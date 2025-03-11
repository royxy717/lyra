import * as THREE from 'three';

/**
 * 3D柱状图效果
 * 基于原Processing项目实现
 */
export class PillarEffect {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  private grid: THREE.Group;
  private pillarMeshes: THREE.LineSegments[][];
  private throwPlaneMeshes: THREE.LineSegments[][];
  private flashMeshes: (THREE.LineSegments | null)[][];
  private glowMeshes: THREE.LineSegments[][];
  
  private pillarHeights: number[][];
  private prevHeight: number[][];
  private prevDeltaZ: number[][];
  private throwPlaneHeight: number[][];
  private throwPlaneVelocity: number[][];
  private flashAlpha: number[][];
  private pillarColors: THREE.Color[][];
  private targetColors: THREE.Color[][];
  
  private beatHistory: number[];
  private gridSize: number = 2;
  private gridDimension: number = 20;
  private maxThrowHeight: number;
  
  private animationId: number | null = null;
  private isInitialized: boolean = false;
  
  constructor(private container: HTMLElement) {
    console.log('正在创建PillarEffect实例');
    console.log('容器大小:', container.clientWidth, container.clientHeight);
    
    // 创建场景
    this.scene = new THREE.Scene();
    
    // 设置背景色为透明，与网页背景颜色一致
    this.scene.background = null;
    
    // 创建相机 - 使用更适合消隐测试的视角
    this.camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
    this.camera.position.set(0, 50, 50);
    this.camera.lookAt(0, 0, 0);
    
    // 检查并清理容器中已有的canvas元素
    const existingCanvas = container.querySelector('canvas');
    if (existingCanvas) {
      console.log('移除现有的canvas元素');
      container.removeChild(existingCanvas);
    }
    
    console.log('创建渲染器');
    // 创建渲染器 - 强化深度测试
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,  // 启用透明背景
      logarithmicDepthBuffer: true // 提高深度测试精度
    });
    
    // 设置像素比和尺寸
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    
    // 激活深度测试
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.autoClear = true;
    this.renderer.sortObjects = true;
    
    // 移除所有边框
    this.renderer.domElement.style.outline = 'none';
    this.renderer.domElement.style.border = 'none';
    
    // 添加到容器
    this.container.appendChild(this.renderer.domElement);
    
    // 检查canvas是否成功添加
    const canvasCheck = container.querySelector('canvas');
    console.log('Canvas检查:', canvasCheck ? '存在' : '不存在');
    
    // 创建网格组
    this.grid = new THREE.Group();
    this.grid.rotation.x = -Math.PI / 2; // 使网格水平
    this.scene.add(this.grid);
    
    // 初始化其他参数
    this.gridSize = 2;
    this.gridDimension = 40;
    this.maxThrowHeight = 10;
    
    // 添加环境光提高可视性
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    // 初始化数组
    this.pillarMeshes = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(null));
    this.throwPlaneMeshes = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(null));
    this.flashMeshes = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(null));
    this.glowMeshes = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(null));
    
    this.pillarHeights = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(0.01));
    this.prevHeight = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(0));
    this.prevDeltaZ = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(0));
    this.throwPlaneHeight = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(-1));
    this.throwPlaneVelocity = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(0));
    this.flashAlpha = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(0));
    this.pillarColors = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(new THREE.Color(0x808080)));
    this.targetColors = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(new THREE.Color(0x808080)));
    
    // 初始化节拍历史
    this.beatHistory = Array(this.gridDimension).fill(0);
    
    // 添加窗口大小变化事件监听器
    window.addEventListener('resize', this.onWindowResize.bind(this));
    
    console.log('PillarEffect构造完成');
    
    // 初始渲染一次，确保场景可见
    this.renderer.render(this.scene, this.camera);
  }
  
  /**
   * 初始化Three.js场景和对象 - 静态显示模式
   */
  initialize(): void {
    try {
      console.log('初始化PillarEffect - 静态模式');
      
      if (this.isInitialized) {
        console.log('已经初始化过，跳过');
        return;
      }
      
      // 清空网格组
      this.grid.clear();
      
      // 构建网格 - 使用线框而不是实体
      const boxGeometry = new THREE.BoxGeometry(this.gridSize * 0.9, this.gridSize * 0.9, 1);
      
      // 提取边缘 - 用于创建线框效果
      const boxEdges = new THREE.EdgesGeometry(boxGeometry);
      
      // 线框材质 - 为所有区域使用
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x808080, 
        transparent: false,
        depthTest: true,
        depthWrite: true
      });
      
      // 外围区域线框材质 - 半透明效果
      const outerLineMaterial = new THREE.LineBasicMaterial({
        color: 0x808080,
        transparent: true,
        opacity: 0.5,
        depthTest: true,
        depthWrite: true
      });
      
      // 网格偏移值 - 使网格居中
      const offset = (this.gridDimension * this.gridSize) / 2 - this.gridSize / 2;
      
      // 计算核心区域的范围 (中心20x20)
      const coreSize = 20;
      const halfCore = coreSize / 2;
      const centerIndex = Math.floor(this.gridDimension / 2);
      const coreStartIndex = centerIndex - halfCore;
      const coreEndIndex = centerIndex + halfCore;
      
      // 为每个网格位置创建线框和投掷平面
      for (let i = 0; i < this.gridDimension; i++) {
        for (let j = 0; j < this.gridDimension; j++) {
          // 计算位置
          const x = i * this.gridSize - offset;
          const y = j * this.gridSize - offset;
          
          // 检查是否在核心区域内
          const isInCore = i >= coreStartIndex && i < coreEndIndex && 
                           j >= coreStartIndex && j < coreEndIndex;
          
          // 创建柱体网格
          const material = isInCore ? lineMaterial.clone() : outerLineMaterial.clone();
          const pillarMesh = new THREE.LineSegments(boxEdges, material);
          pillarMesh.position.set(x, y, 0.5);
          pillarMesh.scale.z = 0.01;
          this.pillarMeshes[i][j] = pillarMesh;
          this.grid.add(pillarMesh);
          
          // 创建投掷平面网格
          const throwPlaneMesh = new THREE.LineSegments(boxEdges, material.clone());
          throwPlaneMesh.position.set(x, y, 0.5);
          throwPlaneMesh.scale.z = 0.01;
          this.throwPlaneMeshes[i][j] = throwPlaneMesh;
          this.grid.add(throwPlaneMesh);
          
          // 创建发光效果网格
          const glowMesh = new THREE.LineSegments(boxEdges, material.clone());
          glowMesh.position.set(x, y, 0.5);
          glowMesh.scale.z = 0.01;
          this.glowMeshes[i][j] = glowMesh;
          this.grid.add(glowMesh);
          
          // 初始化状态数据
          this.prevHeight[i][j] = 0;
          this.prevDeltaZ[i][j] = 0;
          this.throwPlaneHeight[i][j] = -1;
          this.throwPlaneVelocity[i][j] = 0;
          this.flashAlpha[i][j] = 0;
          this.targetColors[i][j] = new THREE.Color(0x808080);
        }
      }
      
      // 启用控制台输出
      console.log(`创建了 ${this.gridDimension}x${this.gridDimension} 网格, 共 ${this.gridDimension * this.gridDimension} 个柱体`);
      console.log(`核心区域: ${coreStartIndex}~${coreEndIndex-1}, 大小: ${coreSize}x${coreSize}`);
      
      // 立即更新一次静态显示
      this.updateStaticDisplay();
      
      // 设置为已初始化
      this.isInitialized = true;
      
    } catch (error) {
      console.error('初始化PillarEffect失败:', error);
    }
  }
  
  /**
   * 更新静态显示 - 创建静态图案
   */
  private updateStaticDisplay(): void {
    // 计算核心区域的范围 (中心20x20)
    const coreSize = 20;
    const halfCore = coreSize / 2;
    const centerIndex = Math.floor(this.gridDimension / 2);
    const coreStartIndex = centerIndex - halfCore;
    const coreEndIndex = centerIndex + halfCore;
    
    // 对每个柱子设置静态高度
    for (let i = 0; i < this.gridDimension; i++) {
      for (let j = 0; j < this.gridDimension; j++) {
        // 检查是否在核心区域内
        const isInCore = i >= coreStartIndex && i < coreEndIndex && 
                         j >= coreStartIndex && j < coreEndIndex;
        
        // 计算到核心区域边缘的距离
        let decayFactor = 1.0;
        
        if (!isInCore) {
          // 确定点到核心区域的最小距离
          const distX = Math.min(
            Math.abs(i - coreStartIndex),
            Math.abs(i - (coreEndIndex - 1))
          );
          
          const distY = Math.min(
            Math.abs(j - coreStartIndex),
            Math.abs(j - (coreEndIndex - 1))
          );
          
          // 使用曼哈顿距离
          const distToCore = Math.max(distX, distY);
          
          // 计算最大可能距离 (网格边缘)
          const maxDist = this.gridDimension / 2 - halfCore;
          
          // 计算衰减系数 - 距离越远衰减越强
          decayFactor = Math.pow(1 - distToCore / maxDist, 2);
        }
        
        // 静态高度 - 使用固定模式
        let staticHeight = 0.5; // 默认高度
        
        if (isInCore) {
          // 在核心区域创建一个有趣的静态图案 - 例如波浪形状
          const centerDistX = i - centerIndex;
          const centerDistY = j - centerIndex;
          const dist = Math.sqrt(centerDistX * centerDistX + centerDistY * centerDistY);
          
          // 创建同心圆波纹效果
          staticHeight = Math.cos(dist * 0.5) * 0.5 + 1.0;
        }
        
        // 应用衰减
        staticHeight *= decayFactor;
        
        // 设置高度
        this.pillarHeights[i][j] = staticHeight;
        
        // 应用高度和颜色
        this.setHeightBasedColor(i, j);
      }
    }
  }
  
  /**
   * 开始动画
   */
  start(): void {
    if (!this.isInitialized) {
      this.initialize();
    }
    
    this.animate();
  }
  
  /**
   * 停止动画
   */
  stop(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
  
  /**
   * 清理资源
   */
  dispose(): void {
    console.log('PillarEffect.dispose()被调用');
    try {
      this.stop();

      // 清理场景中的对象
      if (this.scene) {
        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
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
      }

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
      
      console.log('PillarEffect资源已清理');
    } catch (error) {
      console.error('PillarEffect.dispose()出错:', error);
    }
  }
  
  /**
   * 处理窗口大小变化
   */
  public onWindowResize(): void {
    // 检查容器是否仍然存在
    if (!this.container) return;
    
    // 确保渲染器和相机尺寸正确
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    
    // 直接强制渲染场景
    this.renderer.render(this.scene, this.camera);
    
    // 如果动画已停止但初始化完成，则重新启动
    if (this.animationId === null && this.isInitialized) {
      console.log('重新启动动画');
      this.start();
    }
  }
  
  /**
   * 动画循环 - 静态显示模式
   */
  private animate(): void {
    if (!this.isInitialized) return;
    
    // 使用requestAnimationFrame继续动画循环
    this.animationId = requestAnimationFrame(() => this.animate());
    
    // 在网格上应用非常缓慢的旋转 - 保持视觉效果
    this.grid.rotation.z += 0.0005; // 非常缓慢的旋转
    
    // 清除深度缓冲和颜色缓冲
    this.renderer.clear();
    this.renderer.clearDepth();
    
    // 强制所有对象更新世界矩阵，确保正确的深度排序
    this.scene.updateMatrixWorld(true);
    
    // 确保相机矩阵更新
    this.camera.updateMatrixWorld(true);
    this.camera.updateProjectionMatrix();
    
    // 渲染场景
    this.renderer.render(this.scene, this.camera);
  }
  
  /**
   * 更新音频数据 - 静音模式下不处理音频数据
   */
  updateAudioData(_frequencyData: Uint8Array, _beatDetected: boolean): void {
    try {
      if (!this.isInitialized) return;
      
      // 计算核心区域的范围 (中心20x20)
      const coreSize = 20;
      const halfCore = coreSize / 2;
      const centerIndex = Math.floor(this.gridDimension / 2);
      const coreStartIndex = centerIndex - halfCore;
      const coreEndIndex = centerIndex + halfCore;
      
      // 静态显示模式 - 不处理音频数据
      // 对每个柱子设置静态高度
      for (let i = 0; i < this.gridDimension; i++) {
        for (let j = 0; j < this.gridDimension; j++) {
          // 检查是否在核心区域内
          const isInCore = i >= coreStartIndex && i < coreEndIndex && 
                           j >= coreStartIndex && j < coreEndIndex;
          
          // 计算到核心区域边缘的距离
          let decayFactor = 1.0;
          
          if (!isInCore) {
            // 确定点到核心区域的最小距离
            const distX = Math.min(
              Math.abs(i - coreStartIndex),
              Math.abs(i - (coreEndIndex - 1))
            );
            
            const distY = Math.min(
              Math.abs(j - coreStartIndex),
              Math.abs(j - (coreEndIndex - 1))
            );
            
            // 使用曼哈顿距离
            const distToCore = Math.max(distX, distY);
            
            // 计算最大可能距离 (网格边缘)
            const maxDist = this.gridDimension / 2 - halfCore;
            
            // 计算衰减系数 - 距离越远衰减越强
            decayFactor = Math.pow(1 - distToCore / maxDist, 2);
          }
          
          // 静态高度 - 使用固定模式
          // 在核心区域创建一个有趣的静态图案
          let staticHeight = 0.5; // 默认高度
          
          if (isInCore) {
            // 在核心区域创建一个有趣的静态图案 - 例如波浪形状
            const centerDistX = i - centerIndex;
            const centerDistY = j - centerIndex;
            const dist = Math.sqrt(centerDistX * centerDistX + centerDistY * centerDistY);
            
            // 创建同心圆波纹效果
            staticHeight = Math.cos(dist * 0.5) * 0.5 + 1.0;
          }
          
          // 应用衰减
          staticHeight *= decayFactor;
          
          // 设置高度
          this.pillarHeights[i][j] = staticHeight;
          
          // 应用高度和颜色
          this.setHeightBasedColor(i, j);
        }
      }
    } catch (error) {
      console.error('更新静态显示时出错:', error);
    }
  }
  
  /**
   * 基于高度设置柱体颜色
   */
  setHeightBasedColor(i: number, j: number): void {
    try {
      if (!this.isInitialized) return;
      
      const height = this.pillarHeights[i][j];
      const pillarMesh = this.pillarMeshes[i][j];
      if (!pillarMesh) return;
      
      // 获取线框材质
      const lineMaterial = pillarMesh.material as THREE.LineBasicMaterial;
      if (!lineMaterial) return;
      
      // 计算核心区域的范围 (中心20x20)
      const coreSize = 20;
      const halfCore = coreSize / 2;
      const centerIndex = Math.floor(this.gridDimension / 2);
      const coreStartIndex = centerIndex - halfCore;
      const coreEndIndex = centerIndex + halfCore;
      
      // 检查是否在核心区域内
      const isInCore = i >= coreStartIndex && i < coreEndIndex && 
                       j >= coreStartIndex && j < coreEndIndex;
      
      // 高度级别
      const baseHeight = this.gridSize;
      
      // 根据高度设置不同的颜色
      let color: THREE.Color;
      
      if (height < baseHeight * 0.3) {
        // 低高度: 灰色
        color = new THREE.Color(0x808080);
      } else if (height < baseHeight * 3) {
        // 中等高度: 随高度变色 (每3个底边长度变一次色相)
        // 将高度映射到0-1
        const normalizedHeight = (height - baseHeight * 0.3) / (baseHeight * 3 - baseHeight * 0.3);
        
        // 计算色相
        const hue = normalizedHeight;
        const saturation = 0.8;
        const lightness = 0.6;
        
        // 使用HSL创建颜色
        color = new THREE.Color().setHSL(hue, saturation, lightness);
      } else {
        // 高高度: 彩虹色循环
        const cycleHeight = (height - baseHeight * 3) / baseHeight;
        const hue = (cycleHeight % 1.0); // 取余数保证在0-1之间循环
        color = new THREE.Color().setHSL(hue, 0.9, 0.7);
      }
      
      // 应用颜色到线框材质
      lineMaterial.color = color;
      this.pillarColors[i][j] = color;
      
      // 更新柱体高度 - 对所有柱体都应用高度变化
      const newHeight = Math.max(height, 0.01); // 避免高度为0
      pillarMesh.scale.z = newHeight;
      
      // 中心点调整 - 保持底部位置不变
      pillarMesh.position.z = newHeight * 0.5;
      
      // 静态模式下不需要更新闪光效果
      
    } catch (error) {
      console.error('设置柱体颜色时出错:', error);
    }
  }
}

export default PillarEffect; 