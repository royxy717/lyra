import * as THREE from 'three';

/**
 * 单个柱体组件类
 * 可作为可重用组件，类似于SketchUp中的组件或CAD软件中的Block
 * 使用彩色线框加黑色背景填充的方式实现消隐效果
 */
export class SinglePillar {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  private pillarGroup!: THREE.Group;
  private isInitialized: boolean = false;
  private animationId: number | null = null;
  
  // 存储所有实例的静态数组，用于批量更新
  private static instances: SinglePillar[] = [];

  /**
   * 构造函数
   * @param container 容器元素
   * @param options 可选配置参数
   */
  constructor(
    private container: HTMLElement,
    private options: {
      width?: number;
      height?: number;
      depth?: number;
      position?: THREE.Vector3;
      scale?: THREE.Vector3;
      rotation?: THREE.Euler;
      sideColor?: THREE.Color | number | string;
      topColor?: THREE.Color | number | string;
    } = {}
  ) {
    // 设置默认值
    this.options = {
      width: options.width || 1.8,
      height: options.height || 1.8,
      depth: options.depth || 4,
      position: options.position || new THREE.Vector3(0, 0, 0),
      scale: options.scale || new THREE.Vector3(1, 1, 1),
      rotation: options.rotation || new THREE.Euler(0, 0, 0),
      sideColor: options.sideColor || 0x808080,
      topColor: options.topColor || 0x00AAFF
    };

    // 创建场景
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    // 创建相机 - 使用35度视角
    this.camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    // 调整相机位置，提高视角以完整显示柱体
    this.camera.position.set(8, 3, 8);  // 增加Z轴高度
    this.camera.up.set(0, 0, 1);  // 保持Z轴为上方向
    this.camera.lookAt(0, 0, 2);  // 看向柱体中心点

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

    // 添加窗口大小变化监听
    window.addEventListener('resize', this.onWindowResize.bind(this));
    
    // 将实例添加到静态数组中
    SinglePillar.instances.push(this);
  }

  /**
   * 初始化场景
   */
  initialize(): void {
    try {
      if (this.isInitialized) return;

      // 创建一个组来容纳所有对象
      this.pillarGroup = new THREE.Group();
      
      // 获取尺寸参数
      const width = this.options.width as number;
      const height = this.options.height as number;
      const depth = this.options.depth as number;
      const halfWidth = width / 2;
      const halfHeight = height / 2;
      
      // 创建材质
      // 灰色线条材质（用于侧面和底面）
      const grayLineMaterial = new THREE.LineBasicMaterial({
        color: this.options.sideColor,
        depthTest: true
      });
      
      // 彩色线条材质（用于顶面）
      const topLineMaterial = new THREE.LineBasicMaterial({
        color: this.options.topColor,
        depthTest: true
      });
      
      // 黑色填充材质（不透明）
      const blackFillMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: false,
        side: THREE.DoubleSide,
        depthTest: true,
        depthWrite: true
      });
      
      // 创建底面
      this.createFace(
        [
          new THREE.Vector3(-halfWidth, -halfHeight, 0),
          new THREE.Vector3(halfWidth, -halfHeight, 0),
          new THREE.Vector3(halfWidth, halfHeight, 0),
          new THREE.Vector3(-halfWidth, halfHeight, 0)
        ],
        grayLineMaterial,
        blackFillMaterial,
        new THREE.Vector3(0, 0, -1),
        0
      );
      
      // 创建顶面
      this.createFace(
        [
          new THREE.Vector3(-halfWidth, -halfHeight, depth),
          new THREE.Vector3(halfWidth, -halfHeight, depth),
          new THREE.Vector3(halfWidth, halfHeight, depth),
          new THREE.Vector3(-halfWidth, halfHeight, depth)
        ],
        topLineMaterial,
        blackFillMaterial,
        new THREE.Vector3(0, 0, 1),
        1
      );
      
      // 创建前面
      this.createFace(
        [
          new THREE.Vector3(-halfWidth, -halfHeight, 0),
          new THREE.Vector3(halfWidth, -halfHeight, 0),
          new THREE.Vector3(halfWidth, -halfHeight, depth),
          new THREE.Vector3(-halfWidth, -halfHeight, depth)
        ],
        grayLineMaterial,
        blackFillMaterial,
        new THREE.Vector3(0, -1, 0),
        2
      );
      
      // 创建右面
      this.createFace(
        [
          new THREE.Vector3(halfWidth, -halfHeight, 0),
          new THREE.Vector3(halfWidth, halfHeight, 0),
          new THREE.Vector3(halfWidth, halfHeight, depth),
          new THREE.Vector3(halfWidth, -halfHeight, depth)
        ],
        grayLineMaterial,
        blackFillMaterial,
        new THREE.Vector3(1, 0, 0),
        3
      );
      
      // 创建后面
      this.createFace(
        [
          new THREE.Vector3(halfWidth, halfHeight, 0),
          new THREE.Vector3(-halfWidth, halfHeight, 0),
          new THREE.Vector3(-halfWidth, halfHeight, depth),
          new THREE.Vector3(halfWidth, halfHeight, depth)
        ],
        grayLineMaterial,
        blackFillMaterial,
        new THREE.Vector3(0, 1, 0),
        4
      );
      
      // 创建左面
      this.createFace(
        [
          new THREE.Vector3(-halfWidth, halfHeight, 0),
          new THREE.Vector3(-halfWidth, -halfHeight, 0),
          new THREE.Vector3(-halfWidth, -halfHeight, depth),
          new THREE.Vector3(-halfWidth, halfHeight, depth)
        ],
        grayLineMaterial,
        blackFillMaterial,
        new THREE.Vector3(-1, 0, 0),
        5
      );
      
      // 应用位置、缩放和旋转
      this.pillarGroup.position.copy(this.options.position as THREE.Vector3);
      this.pillarGroup.scale.copy(this.options.scale as THREE.Vector3);
      this.pillarGroup.rotation.copy(this.options.rotation as THREE.Euler);
      
      // 添加到场景
      this.scene.add(this.pillarGroup);
      
      // 添加坐标轴辅助器
      const axesHelper = new THREE.AxesHelper(5);
      this.scene.add(axesHelper);
      
      this.isInitialized = true;
      console.log('单柱体初始化完成');
      
      // 立即渲染一次
      this.renderer.render(this.scene, this.camera);
      
      // 开始动画循环，更新面的可见性
      this.start();
      
    } catch (error) {
      console.error('初始化单柱体失败:', error);
    }
  }
  
  /**
   * 创建一个面（包含线框和填充）
   * @param vertices 面的四个顶点
   * @param lineMaterial 线框材质
   * @param fillMaterial 填充材质
   * @param normal 面的法向量
   * @param faceIndex 面的索引
   */
  private createFace(
    vertices: THREE.Vector3[],
    lineMaterial: THREE.LineBasicMaterial,
    fillMaterial: THREE.MeshBasicMaterial,
    normal: THREE.Vector3,
    faceIndex: number
  ): void {
    // 创建面组
    const faceGroup = new THREE.Group();
    
    // 创建填充面
    const fillGeometry = new THREE.BufferGeometry();
    const fillVertices = [];
    
    // 创建三角形1（0,1,2）
    fillVertices.push(
      vertices[0].x, vertices[0].y, vertices[0].z,
      vertices[1].x, vertices[1].y, vertices[1].z,
      vertices[2].x, vertices[2].y, vertices[2].z
    );
    
    // 创建三角形2（0,2,3）
    fillVertices.push(
      vertices[0].x, vertices[0].y, vertices[0].z,
      vertices[2].x, vertices[2].y, vertices[2].z,
      vertices[3].x, vertices[3].y, vertices[3].z
    );
    
    fillGeometry.setAttribute('position', new THREE.Float32BufferAttribute(fillVertices, 3));
    const fillMesh = new THREE.Mesh(fillGeometry, fillMaterial.clone());
    faceGroup.add(fillMesh);
    
    // 创建线框
    const lineGeometry = new THREE.BufferGeometry();
    const lineVertices = [];
    
    // 添加四个顶点，形成闭合的线框
    for (let i = 0; i < vertices.length; i++) {
      lineVertices.push(vertices[i].x, vertices[i].y, vertices[i].z);
    }
    // 添加第一个顶点，闭合线框
    lineVertices.push(vertices[0].x, vertices[0].y, vertices[0].z);
    
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));
    const line = new THREE.Line(lineGeometry, lineMaterial.clone());
    
    // 将线框放在填充面的上方一点点，避免Z-fighting
    line.position.z += 0.001 * normal.z;
    line.position.x += 0.001 * normal.x;
    line.position.y += 0.001 * normal.y;
    
    faceGroup.add(line);
    
    // 添加自定义属性：面的法向量和面的索引
    (faceGroup as any).faceNormal = normal;
    (faceGroup as any).faceIndex = faceIndex;
    (faceGroup as any).line = line;
    (faceGroup as any).fillMesh = fillMesh;
    
    this.pillarGroup.add(faceGroup);
  }
  
  /**
   * 根据高度设置顶面颜色
   * @param height 高度值，范围0-1
   */
  setTopColorByHeight(height: number): void {
    if (!this.isInitialized || !this.pillarGroup) return;
    
    // 确保height在0-1范围内
    height = Math.max(0, Math.min(1, height));
    
    // 根据高度计算颜色
    const color = new THREE.Color();
    
    // 从蓝色到红色的渐变
    if (height < 0.5) {
      // 蓝色到绿色
      color.setRGB(0, height * 2, 1 - height * 2);
    } else {
      // 绿色到红色
      color.setRGB((height - 0.5) * 2, 1 - (height - 0.5) * 2, 0);
    }
    
    // 查找顶面并更新颜色
    this.pillarGroup.children.forEach(child => {
      if ((child as any).faceIndex === 1 && (child as any).line) {
        const line = (child as any).line;
        if (line.material instanceof THREE.LineBasicMaterial) {
          line.material.color = color;
        }
      }
    });
  }
  
  /**
   * 更新面的可见性，实现消隐效果
   */
  private updateFacesVisibility(): void {
    if (!this.isInitialized || !this.pillarGroup) return;
    
    // 获取相机位置
    const cameraPosition = new THREE.Vector3();
    this.camera.getWorldPosition(cameraPosition);
    
    // 获取柱体的世界位置
    const pillarPosition = new THREE.Vector3();
    this.pillarGroup.getWorldPosition(pillarPosition);
    
    // 计算相机到柱体的方向
    const dirToCamera = new THREE.Vector3().subVectors(cameraPosition, pillarPosition);
    dirToCamera.normalize();
    
    // 遍历所有面
    this.pillarGroup.children.forEach(faceGroup => {
      if ((faceGroup as any).faceNormal) {
        // 获取面的法向量
        const normal = (faceGroup as any).faceNormal.clone();
        
        // 将法向量转换到世界坐标系
        const worldMatrix = new THREE.Matrix4();
        worldMatrix.extractRotation(this.pillarGroup.matrixWorld);
        normal.applyMatrix4(worldMatrix);
        
        // 计算点积，判断面是否朝向相机
        const dotProduct = normal.dot(dirToCamera);
        
        // 如果点积大于0，面朝向相机，否则背向相机
        faceGroup.visible = (dotProduct > 0);
      }
    });
  }
  
  /**
   * 获取柱体组对象，用于添加到其他场景
   */
  getPillarGroup(): THREE.Group | null {
    return this.isInitialized ? this.pillarGroup : null;
  }
  
  /**
   * 克隆一个新的柱体实例
   * @param container 新容器
   * @param options 新选项
   */
  clone(container: HTMLElement, options: any = {}): SinglePillar {
    // 合并选项
    const mergedOptions = {
      ...this.options,
      ...options
    };
    
    // 创建新实例
    return new SinglePillar(container, mergedOptions);
  }
  
  /**
   * 静态方法：更新所有实例的属性
   * @param property 属性名
   * @param value 属性值
   */
  static updateAllInstances(property: string, value: any): void {
    SinglePillar.instances.forEach(instance => {
      switch (property) {
        case 'topColor':
          // 更新顶面颜色
          if (instance.isInitialized && instance.pillarGroup) {
            instance.pillarGroup.children.forEach(child => {
              if ((child as any).faceIndex === 1 && (child as any).line) {
                const line = (child as any).line;
                if (line.material instanceof THREE.LineBasicMaterial) {
                  line.material.color = new THREE.Color(value);
                }
              }
            });
          }
          break;
          
        case 'sideColor':
          // 更新侧面颜色
          if (instance.isInitialized && instance.pillarGroup) {
            instance.pillarGroup.children.forEach(child => {
              if ((child as any).faceIndex !== 1 && (child as any).line) {
                const line = (child as any).line;
                if (line.material instanceof THREE.LineBasicMaterial) {
                  line.material.color = new THREE.Color(value);
                }
              }
            });
          }
          break;
          
        case 'position':
          // 更新位置
          if (instance.isInitialized && instance.pillarGroup) {
            instance.pillarGroup.position.copy(value);
          }
          instance.options.position = value;
          break;
          
        case 'scale':
          // 更新缩放
          if (instance.isInitialized && instance.pillarGroup) {
            instance.pillarGroup.scale.copy(value);
          }
          instance.options.scale = value;
          break;
          
        case 'rotation':
          // 更新旋转
          if (instance.isInitialized && instance.pillarGroup) {
            instance.pillarGroup.rotation.copy(value);
          }
          instance.options.rotation = value;
          break;
          
        default:
          console.warn(`未知属性: ${property}`);
      }
    });
  }
  
  /**
   * 开始动画
   */
  start(): void {
    if (!this.isInitialized) {
      this.initialize();
    } else if (this.animationId === null) {
      this.animate();
    }
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

    // 缓慢旋转柱体
    if (this.pillarGroup) {
      this.pillarGroup.rotation.z += 0.01;
    }
    
    // 更新面的可见性
    this.updateFacesVisibility();
    
    // 渲染场景
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * 清理资源
   */
  dispose(): void {
    try {
      this.stop();

      // 从静态数组中移除
      const index = SinglePillar.instances.indexOf(this);
      if (index !== -1) {
        SinglePillar.instances.splice(index, 1);
      }

      // 清理场景
      this.scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
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
      
    } catch (error) {
      console.error('清理单柱体资源失败:', error);
    }
  }
} 