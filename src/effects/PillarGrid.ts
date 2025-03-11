import * as THREE from 'three';

/**
 * 柱体网格类
 * 使用顶面表示柱体的高度，顶面为彩色线框加黑色背景填充
 */
export class PillarGrid {
  public scene: THREE.Scene = new THREE.Scene();
  public camera!: THREE.PerspectiveCamera;
  public renderer!: THREE.WebGLRenderer;
  private gridGroup: THREE.Group = new THREE.Group();
  private topFaces: THREE.Group[][] = [];  // 顶面组（包含线框和填充面）
  private isInitialized: boolean = false;
  private animationId: number | null = null;
  private gridSize: number = 20; // 减少为20x20以提高性能
  private spacing: number = 1.0;  // 柱体之间的间距
  private pillarWidth: number = 0.8;  // 柱体宽度
  private pillarHeight: number = 0.8;  // 柱体高度
  private maxPillarDepth: number = 5.0;  // 柱体最大深度（高度）
  
  // 用于存储柱体高度数据
  private heightData: number[][] = [];
  
  // 材质
  private topEdgeMaterial: THREE.LineBasicMaterial | null = null;
  private topFaceMaterial: THREE.MeshBasicMaterial | null = null;

  /**
   * 构造函数
   * @param container 容器元素
   */
  constructor(private container: HTMLElement) {
    console.log('PillarGrid构造函数开始执行');
    try {
      // 创建场景
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x000000);

      // 计算网格总宽度
      const gridWidth = this.gridSize * this.spacing;
      
      // 创建相机
      this.camera = new THREE.PerspectiveCamera(
        35,  // 使用与单柱体相同的视角
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      
      // 调整相机位置，以便能看到整个网格
      // 相机位置设置为网格大小的1.5倍，确保能看到整个网格
      this.camera.position.set(gridWidth * 0.8, -gridWidth * 0.8, gridWidth * 0.8);
      this.camera.up.set(0, 0, 1);  // Z轴向上
      this.camera.lookAt(0, 0, 0);  // 看向原点（网格中心）

      // 创建渲染器
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false
      });

      // 设置渲染器
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setClearColor(0x000000);
      
      // 移除边框
      this.renderer.domElement.style.outline = 'none';
      this.renderer.domElement.style.border = 'none';

      // 添加到容器
      this.container.appendChild(this.renderer.domElement);

      // 创建网格组
      this.gridGroup = new THREE.Group();
      this.scene.add(this.gridGroup);

      // 初始化高度数据
      for (let x = 0; x < this.gridSize; x++) {
        this.heightData[x] = [];
        for (let y = 0; y < this.gridSize; y++) {
          this.heightData[x][y] = 0;
        }
      }

      // 添加窗口大小变化监听
      window.addEventListener('resize', this.onWindowResize.bind(this));
      
      console.log('PillarGrid构造函数执行完成');
    } catch (error) {
      console.error('PillarGrid构造函数出错:', error);
    }
  }

  /**
   * 初始化网格
   */
  initialize(): void {
    console.log('PillarGrid初始化开始');
    if (this.isInitialized) {
      console.log('PillarGrid已经初始化，跳过');
      return;
    }

    try {
      console.log('初始化柱体网格');
      
      // 创建材质 - 顶面边缘材质（蓝色）
      this.topEdgeMaterial = new THREE.LineBasicMaterial({
        color: 0x00AAFF,
        depthTest: true,
        linewidth: 2  // 注意：由于WebGL限制，线宽在大多数平台上被忽略
      });
      
      // 创建材质 - 顶面填充材质（黑色不透明）
      this.topFaceMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: false,
        side: THREE.DoubleSide,
        depthTest: true,
        depthWrite: true
      });
      
      // 计算网格的起始位置（使网格居中）
      const gridWidth = this.gridSize * this.spacing;
      const startX = -gridWidth / 2;  // 修改起始位置，使网格居中
      const startY = -gridWidth / 2;  // 修改起始位置，使网格居中
      
      // 设置网格组的位置为原点，确保旋转中心正确
      this.gridGroup.position.set(0, 0, 0);
      
      // 初始化网格数组
      for (let x = 0; x < this.gridSize; x++) {
        this.topFaces[x] = [];
      }
      
      // 设置渲染器属性
      this.renderer.sortObjects = true;  // 启用对象排序
      this.renderer.autoClear = true;    // 自动清除缓冲区
      
      // 分批创建柱体顶面，避免一次性创建太多导致卡顿
      const batchSize = 20; // 可以增加批量大小，因为只创建顶面
      let count = 0;
      
      const createBatch = () => {
        console.log(`创建第${Math.floor(count/batchSize) + 1}批顶面，从${count}到${Math.min(count + batchSize, this.gridSize * this.gridSize)}`);
        const batchStart = count;
        const batchEnd = Math.min(count + batchSize, this.gridSize * this.gridSize);
        
        for (let i = batchStart; i < batchEnd; i++) {
          const x = Math.floor(i / this.gridSize);
          const y = i % this.gridSize;
          
          // 计算柱体位置
          const posX = startX + x * this.spacing;
          const posY = startY + y * this.spacing;
          
          try {
            // 创建一个组来容纳顶面的线框和填充面
            const topFaceGroup = new THREE.Group();
            topFaceGroup.position.set(posX, posY, 0);
            
            // 创建顶面几何体 - 用于填充
            const topFaceGeometry = new THREE.PlaneGeometry(this.pillarWidth, this.pillarHeight);
            
            // 创建顶面填充
            const topFaceMesh = new THREE.Mesh(topFaceGeometry, this.topFaceMaterial!);
            // 不需要旋转，平面默认就是XY平面
            topFaceGroup.add(topFaceMesh);
            
            // 创建顶面几何体 - 用于线框
            const topEdgeGeometry = new THREE.BufferGeometry();
            
            // 顶面的四个顶点 - 用于线框
            const edgeVertices = new Float32Array([
              -this.pillarWidth/2, -this.pillarHeight/2, 0,
              this.pillarWidth/2, -this.pillarHeight/2, 0,
              this.pillarWidth/2, this.pillarHeight/2, 0,
              -this.pillarWidth/2, this.pillarHeight/2, 0,
              -this.pillarWidth/2, -this.pillarHeight/2, 0  // 闭合循环
            ]);
            
            topEdgeGeometry.setAttribute('position', new THREE.BufferAttribute(edgeVertices, 3));
            
            // 创建顶面线条
            const topEdge = new THREE.Line(topEdgeGeometry, this.topEdgeMaterial!);
            // 将线框放在填充面的上方一点点，避免Z-fighting
            topEdge.position.z = 0.001;
            topFaceGroup.add(topEdge);
            
            // 添加到网格组
            this.gridGroup.add(topFaceGroup);
            this.topFaces[x][y] = topFaceGroup;
            
            // 初始高度为0
            this.setPillarHeight(x, y, 0);
          } catch (error) {
            console.error(`创建顶面(${x},${y})出错:`, error);
          }
        }
        
        count = batchEnd;
        
        // 如果还有未创建的顶面，继续下一批
        if (count < this.gridSize * this.gridSize) {
          setTimeout(createBatch, 5); // 减少延迟时间，因为只创建顶面
        } else {
          // 所有顶面创建完成
          console.log('顶面网格创建完成');
          
          // 添加坐标轴辅助器
          const axesHelper = new THREE.AxesHelper(10);
          this.scene.add(axesHelper);
          
          // 添加环境光
          const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
          this.scene.add(ambientLight);
          
          // 添加方向光
          const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
          directionalLight.position.set(1, 1, 1);
          this.scene.add(directionalLight);
          
          this.isInitialized = true;
          
          // 立即渲染一次
          this.renderer.render(this.scene, this.camera);
          
          // 开始动画
          this.animate();
        }
      };
      
      // 开始创建第一批
      createBatch();
      
    } catch (error) {
      console.error('初始化顶面网格失败:', error);
    }
  }
  
  /**
   * 设置指定位置柱体的高度
   * @param x X坐标
   * @param y Y坐标
   * @param height 高度值（0-1）
   */
  setPillarHeight(x: number, y: number, height: number): void {
    if (!this.isInitialized) return;
    
    // 检查坐标是否有效
    if (x < 0 || x >= this.gridSize || y < 0 || y >= this.gridSize) {
      console.warn(`坐标(${x},${y})超出范围`);
      return;
    }
    
    // 保存高度数据
    this.heightData[x][y] = height;
    
    // 获取对应的顶面组
    const topFaceGroup = this.topFaces[x][y];
    if (!topFaceGroup) return;
    
    // 计算实际深度（高度）
    const depth = height * this.maxPillarDepth;
    
    // 更新顶面位置
    topFaceGroup.position.z = depth;
    
    // 更新顶面线框颜色
    this.updateTopColor(topFaceGroup, height);
  }
  
  /**
   * 更新柱体顶面颜色
   * @param topFaceGroup 顶面组对象
   * @param height 高度值（0-1）
   */
  private updateTopColor(topFaceGroup: THREE.Group, height: number): void {
    // 计算根据高度的颜色
    const color = new THREE.Color();
    
    // 从蓝色到红色的渐变
    if (height < 0.5) {
      // 蓝色到绿色
      color.setRGB(0, height * 2, 1 - height * 2);
    } else {
      // 绿色到红色
      color.setRGB((height - 0.5) * 2, 1 - (height - 0.5) * 2, 0);
    }
    
    // 更新线框颜色 - 线框是第二个子对象
    const topEdge = topFaceGroup.children[1];
    if (topEdge instanceof THREE.Line && topEdge.material instanceof THREE.LineBasicMaterial) {
      topEdge.material.color = color;
    }
    
    // 填充面保持黑色不变
  }
  
  /**
   * 设置所有柱体的高度
   * @param heights 高度值数组
   */
  setAllPillarHeights(heights: number[][]): void {
    if (!this.isInitialized) return;
    
    for (let x = 0; x < this.gridSize && x < heights.length; x++) {
      for (let y = 0; y < this.gridSize && y < heights[x].length; y++) {
        this.setPillarHeight(x, y, heights[x][y]);
      }
    }
  }
  
  /**
   * 随机设置所有柱体的高度（用于测试）
   */
  setRandomHeights(): void {
    if (!this.isInitialized) return;
    
    for (let x = 0; x < this.gridSize; x++) {
      for (let y = 0; y < this.gridSize; y++) {
        const height = Math.random();
        this.setPillarHeight(x, y, height);
      }
    }
  }
  
  /**
   * 设置波浪形高度（用于测试）
   * @param time 时间参数
   */
  setWaveHeights(time: number): void {
    if (!this.isInitialized) return;
    
    for (let x = 0; x < this.gridSize; x++) {
      for (let y = 0; y < this.gridSize; y++) {
        const distance = Math.sqrt(
          Math.pow(x - this.gridSize / 2, 2) + 
          Math.pow(y - this.gridSize / 2, 2)
        );
        
        const height = 0.5 * (1 + Math.sin(distance * 0.3 - time));
        this.setPillarHeight(x, y, height);
      }
    }
  }

  /**
   * 开始动画
   */
  start(): void {
    console.log('PillarGrid.start()被调用');
    if (!this.isInitialized) {
      console.log('PillarGrid未初始化，开始初始化');
      this.initialize();
    } else if (this.animationId === null) {
      console.log('开始柱体网格动画');
      this.animate();
    }
  }

  /**
   * 停止动画
   */
  stop(): void {
    if (this.animationId !== null) {
      console.log('停止柱体网格动画');
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  /**
   * 窗口大小变化处理
   */
  private onWindowResize(): void {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * 动画循环
   */
  private animate(): void {
    this.animationId = requestAnimationFrame(this.animate.bind(this));

    // 缓慢旋转网格
    if (this.gridGroup) {
      this.gridGroup.rotation.z += 0.001;
    }
    
    // 更新波浪形高度（用于演示）
    const time = Date.now() * 0.001;
    this.setWaveHeights(time);
    
    // 渲染场景
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * 清理资源
   */
  dispose(): void {
    console.log('PillarGrid.dispose()被调用');
    try {
      this.stop();

      // 清理场景
      this.scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments || object instanceof THREE.Line) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });

      // 安全移除渲染器DOM元素
      if (this.renderer && this.renderer.domElement) {
        // 检查DOM元素是否确实是容器的子节点
        if (this.container && this.container.contains(this.renderer.domElement)) {
          this.container.removeChild(this.renderer.domElement);
        }
      }

      // 释放渲染器资源
      if (this.renderer) {
        this.renderer.dispose();
      }

      // 移除事件监听器
      window.removeEventListener('resize', this.onWindowResize.bind(this));
      
      console.log('PillarGrid资源已清理');
    } catch (error) {
      console.error('PillarGrid.dispose()出错:', error);
    }
  }
} 