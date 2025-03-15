import * as THREE from 'three';

/**
 * 3D顶面柱状图效果
 * 基于原PillarEffect实现，但只使用顶面
 */
export class TopFacePillarEffect {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  private grid: THREE.Group;
  private topFaces: THREE.Group[][];
  private glowEffects: THREE.Sprite[][];
  
  private pillarHeights: number[][];
  private prevHeight: number[][];
  private prevDeltaZ: number[][];
  private beatHistory: number[];
  
  // 抛掷效果相关属性
  private thrownFaces: {
    face: THREE.Group;
    position: THREE.Vector3;
    velocity: number;
    initialPosition: THREE.Vector3;
    maxHeight: number;
    isDescending: boolean;
    hasCollided: boolean;
    bounceCount: number;
    energyFactor: number;
    glow: THREE.Sprite;
  }[] = [];
  private throwProbability: number = 0.95;   // 进一步提高基础概率
  private throwThreshold: number = 0.003;    // 进一步降低触发阈值
  private minMovementThreshold: number = 0.004; // 进一步降低最小运动阈值
  private throwInitialSpeed: number = 10.0;  // 降低初始速度以配合新的重力
  private throwMaxHeight: number = 12.25;    // 减少到原来的70%
  private gravity: number = 18.0;          // 增加到原来的1.5倍
  private airResistance: number = 0.03;    // 保持较小的空气阻力
  private maxBounces: number = 5;          // 保持弹跳次数
  private energyLoss: number = 0.85;       // 保持能量损失率
  private lastBeatTime: number = 0;        // 记录上次节拍时间
  private beatStrength: number = 0;        // 记录节拍强度
  private energyHistory: number[] = [];    // 记录能量历史
  
  private gridSize: number = 2;
  private gridDimension: number = 60;
  private maxGlowIntensity: number = 2.0;
  private glowThreshold: number = 0.7;
  private smoothFactor: number = 0.25; // 增加平滑因子：0.25意味着每帧移动25%的距离，增强响应速度
  
  private animationId: number | null = null;
  private isInitialized: boolean = false;
  private isSilent: boolean = true;
  private silenceTimer: number = 0;
  private silenceThreshold: number = 30; // 静音检测阈值
  
  // 网页背景色 - 深蓝色
  private readonly backgroundColor: number = 0x171923;
  
  // 鼓包效果相关属性
  private bulgePosition: THREE.Vector2 | null = null;
  private bulgeRadius: number = 0;
  private bulgeHeight: number = 0;
  private bulgeFalloff: number = 2;
  private bulgeActive: boolean = false;
  
  // 爆炸效果相关属性
  private explosions: {
    position: THREE.Vector2;
    radius: number;
    strength: number;
    decay: number;
    age: number;
    maxAge: number;
    flash: THREE.Sprite | null;
  }[] = [];
  private readonly EXPLOSION_MAX_AGE = 240; // 增加爆炸效果持续的帧数，从120增加到240
  private readonly EXPLOSION_WAVE_SPEED = 0.675; // 震荡波传播速度，从0.45增加到0.675（再增加50%）
  
  constructor(private container: HTMLElement) {
    console.log('正在创建TopFacePillarEffect实例');
    console.log('容器大小:', container.clientWidth, container.clientHeight);
    
    // 创建场景
    this.scene = new THREE.Scene();
    
    // 设置背景色为透明，与网页背景颜色一致
    this.scene.background = null;
    
    // 创建相机 - 使用更适合消隐测试的视角
    this.camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
    
    // 调整相机位置，使视角正确且内容居中
    this.camera.position.set(0, -70, 80); // 增加相机高度，使视角更高
    this.camera.up.set(0, 0, 1);  // Z轴向上
    this.camera.lookAt(0, 0, 0);  // 看向中心点
    
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
    this.updateRendererSize();
    
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
    
    // 创建网格组 - 不再旋转，保持水平
    this.grid = new THREE.Group();
    // 不再旋转网格，保持XY平面为水平面
    this.scene.add(this.grid);
    
    // 初始化其他参数
    this.gridSize = 2;
    this.gridDimension = 60;
    
    // 添加环境光提高可视性
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    // 初始化数组
    this.topFaces = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(null));
    this.glowEffects = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(null));
    
    this.pillarHeights = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(0.01));
    this.prevHeight = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(0));
    this.prevDeltaZ = Array(this.gridDimension).fill(null).map(() => Array(this.gridDimension).fill(0));
    
    // 初始化节拍历史
    this.beatHistory = Array(this.gridDimension).fill(0);
    
    // 添加窗口大小变化事件监听器
    window.addEventListener('resize', this.onWindowResize.bind(this));
    
    console.log('TopFacePillarEffect构造完成');
    
    // 初始渲染一次，确保场景可见
    this.renderer.render(this.scene, this.camera);
    
    // 添加鼓包效果事件监听
    this.container.addEventListener('updateBulge', this.handleBulgeUpdate.bind(this) as EventListener);
    this.container.addEventListener('resetBulge', this.handleBulgeReset.bind(this) as EventListener);
    
    // 添加爆炸效果事件监听
    this.container.addEventListener('createExplosion', this.handleCreateExplosion.bind(this) as EventListener);
  }
  
  /**
   * 初始化Three.js场景和对象
   */
  initialize(): void {
    try {
      console.log('初始化TopFacePillarEffect');
      
      if (this.isInitialized) {
        console.log('已经初始化过，跳过');
        return;
      }
      
      // 清空网格组
      this.grid.clear();
      
      // 创建材质 - 顶面边缘材质（灰色）
      const topEdgeMaterial = new THREE.LineBasicMaterial({
        color: 0x808080, // 默认为50%灰色
        depthTest: true,
        linewidth: 2  // 注意：由于WebGL限制，线宽在大多数平台上被忽略
      });
      
      // 创建材质 - 顶面填充材质（与网页背景色一致）
      const topFaceMaterial = new THREE.MeshBasicMaterial({
        color: this.backgroundColor, // 使用与网页背景一致的深蓝色
        transparent: false,
        side: THREE.DoubleSide,
        depthTest: true,
        depthWrite: true
      });
      
      // 创建光晕材质
      const glowTexture = this.createGlowTexture();
      const glowMaterial = new THREE.SpriteMaterial({
        map: glowTexture,
        color: 0xffffff,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        depthWrite: false
      });
      
      // 网格偏移值 - 使网格居中
      const offset = (this.gridDimension * this.gridSize) / 2 - this.gridSize / 2;
      
      // 计算核心区域的范围 (中心30x30)
      const coreSize = 30;
      const halfCore = coreSize / 2;
      const centerIndex = Math.floor(this.gridDimension / 2);
      const coreStartIndex = centerIndex - halfCore;
      const coreEndIndex = centerIndex + halfCore;
      
      // 为每个网格位置创建顶面
      for (let i = 0; i < this.gridDimension; i++) {
        for (let j = 0; j < this.gridDimension; j++) {
          // 计算位置 - 注意XY平面现在是水平的
          const x = i * this.gridSize - offset;
          const y = j * this.gridSize - offset;
          
          // 检查是否在核心区域内
          const isInCore = i >= coreStartIndex && i < coreEndIndex && 
                           j >= coreStartIndex && j < coreEndIndex;
          
          // 如果不在核心区域内，跳过创建
          if (!isInCore) continue;
          
          // 创建一个组来容纳顶面的线框和填充面
          const topFaceGroup = new THREE.Group();
          topFaceGroup.position.set(x, y, 0);
          
          // 创建顶面几何体 - 用于填充
          const topFaceGeometry = new THREE.PlaneGeometry(this.gridSize * 0.9, this.gridSize * 0.9);
          
          // 创建顶面填充 - 确保平面朝上
          const topFaceMesh = new THREE.Mesh(topFaceGeometry, topFaceMaterial);
          topFaceGroup.add(topFaceMesh);
          
          // 创建顶面几何体 - 用于线框
          const topEdgeGeometry = new THREE.BufferGeometry();
          
          // 顶面的四个顶点 - 用于线框 (在XY平面上)
          const halfSize = this.gridSize * 0.45;
          const edgeVertices = new Float32Array([
            -halfSize, -halfSize, 0,
            halfSize, -halfSize, 0,
            halfSize, halfSize, 0,
            -halfSize, halfSize, 0,
            -halfSize, -halfSize, 0  // 闭合循环
          ]);
          
          topEdgeGeometry.setAttribute('position', new THREE.BufferAttribute(edgeVertices, 3));
          
          // 创建顶面线条
          const topEdge = new THREE.Line(topEdgeGeometry, topEdgeMaterial.clone());
          // 将线框放在填充面的上方一点点，避免Z-fighting
          topEdge.position.z = 0.001;
          topFaceGroup.add(topEdge);
          
          // 创建光晕效果
          const glowSprite = new THREE.Sprite(glowMaterial.clone());
          glowSprite.scale.set(this.gridSize * 2, this.gridSize * 2, 1);
          glowSprite.visible = false; // 初始不可见
          topFaceGroup.add(glowSprite);
          
          // 添加到网格组
          this.grid.add(topFaceGroup);
          this.topFaces[i][j] = topFaceGroup;
          this.glowEffects[i][j] = glowSprite;
          
          // 初始高度为0
          this.setPillarHeight(i, j, 0);
        }
      }
      
      // 启用控制台输出
      console.log(`创建了 ${this.gridDimension}x${this.gridDimension} 网格, 核心区域: ${coreSize}x${coreSize}`);
      
      // 设置为已初始化
      this.isInitialized = true;
      
    } catch (error) {
      console.error('初始化TopFacePillarEffect失败:', error);
    }
  }
  
  /**
   * 创建光晕纹理
   */
  private createGlowTexture(): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    
    const context = canvas.getContext('2d');
    if (!context) throw new Error('无法创建2D上下文');
    
    // 创建径向渐变
    const gradient = context.createRadialGradient(
      32, 32, 0,
      32, 32, 32
    );
    
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    // 填充渐变
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
    
    // 创建纹理
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    return texture;
  }
  
  /**
   * 设置指定位置柱体的高度
   * @param i X坐标
   * @param j Y坐标
   * @param height 高度值（0-1）
   */
  private setPillarHeight(i: number, j: number, height: number): void {
    // 保存目标高度
    const targetHeight = height;
    
    // 获取当前高度
    const currentHeight = this.pillarHeights[i][j];
    
    // 获取上一帧的高度变化率
    const prevDelta = this.prevDeltaZ[i][j];
    
    // 计算当前帧的目标变化率
    const targetDelta = (targetHeight - currentHeight) * this.smoothFactor;
    
    // 添加弹性效果：当方向改变时，增加反弹力
    let newDelta = targetDelta;
    if (Math.sign(targetDelta) !== Math.sign(prevDelta)) {
      // 方向改变时增加反弹力
      newDelta = targetDelta * 1.5;
    }
    
    // 应用阻尼效果，保留一部分上一帧的动量
    newDelta = newDelta * 0.7 + prevDelta * 0.3;
    
    // 计算新高度
    const newHeight = currentHeight + newDelta;
    
    // 检测是否需要抛掷
    this.checkAndThrow(i, j, newDelta, prevDelta);
    
    // 保存高度数据和变化率
    this.pillarHeights[i][j] = newHeight;
    this.prevDeltaZ[i][j] = newDelta;
    
    // 获取对应的顶面组
    const topFaceGroup = this.topFaces[i][j];
    if (!topFaceGroup) return;
    
    // 更新顶面位置 - 将高度值放大28倍
    topFaceGroup.position.z = newHeight * 28;
    
    // 更新顶面颜色
    this.setBrightnessBasedColor(i, j);
    
    // 更新光晕效果
    this.updateGlowEffect(i, j);
  }
  
  /**
   * 检测并创建抛掷效果
   */
  private checkAndThrow(i: number, j: number, currentDelta: number, prevDelta: number): void {
    // 计算加速度（变化率的变化）
    const acceleration = currentDelta - prevDelta;
    
    // 只在有向上加速度时触发，大幅降低门槛
    if (acceleration <= 0.004) { // 大幅降低向上加速度要求
      return;
    }
    
    // 计算当前运动强度 - 主要关注向上的加速度
    const movementIntensity = Math.abs(currentDelta) + acceleration * 5;
    
    // 如果运动强度低于阈值，直接返回
    if (movementIntensity < this.minMovementThreshold) {
      return;
    }
    
    // 获取当前时间
    const currentTime = performance.now();
    
    // 计算与上次节拍的时间差
    const timeSinceLastBeat = currentTime - this.lastBeatTime;
    
    // 检查是否是强节拍时刻 - 进一步降低要求
    const isStrongBeat = this.beatHistory[this.beatHistory.length - 1] > 0 && 
                        currentDelta > 0.01 &&   // 进一步降低变化率要求
                        this.beatStrength > 0.5; // 进一步降低节拍强度要求
    
    // 计算当前位置的能量 - 更关注加速度
    const positionEnergy = Math.abs(currentDelta) + acceleration * 4;
    
    // 根据节拍强度和位置能量计算抛掷概率
    let throwChance = 0;
    
    if (isStrongBeat) {
      // 强节拍时，提高概率但降低到原来的一半
      throwChance = this.beatStrength * 0.45 * (1 + acceleration * 12);
    } else if (timeSinceLastBeat > 60 && positionEnergy > this.throwThreshold) { // 进一步减少时间间隔
      // 非节拍时，更容易触发，但降低到原来的一半
      throwChance = Math.min(positionEnergy * acceleration * 3, 0.35);
    }
    
    // 计算到中心的距离
    const centerIndex = Math.floor(this.gridDimension / 2);
    const distanceFromCenter = Math.sqrt(Math.pow(i - centerIndex, 2) + Math.pow(j - centerIndex, 2));
    
    // 核心区域大小（20x20）
    const coreSize = 10; // 半径为10，对应20x20的区域
    
    // 根据距离调整抛起概率
    if (distanceFromCenter <= coreSize) {
      // 核心区域（20x20）增加抛起概率，但降低到原来的一半
      throwChance += 0.075 * (1 - distanceFromCenter / coreSize); // 越靠近中心，增加越多，但只有原来的一半
    } else {
      // 边缘区域降低抛起概率
      const distanceFactor = Math.min((distanceFromCenter - coreSize) / (centerIndex - coreSize), 1);
      throwChance *= Math.max(0.3, 1 - distanceFactor * 0.7); // 越靠近边缘，降低越多，最低降至30%
    }
    
    // 应用基础概率衰减，但在高加速度区域减少衰减
    const accelerationFactor = Math.min(acceleration * 8, 2.0); // 增加加速度影响
    throwChance *= this.throwProbability * (1 + accelerationFactor);
    
    // 额外降低抛起概率，使总体数量减半
    throwChance *= 0.5;
    
    // 根据概率决定是否抛掷
    if (Math.random() < throwChance) {
      // 可能触发多个抛掷，但降低数量
      // 80%的情况下只抛起1个，20%的情况下抛起2个
      const multiThrowCount = Math.random() < 0.8 ? 1 : 2;
      
      for (let t = 0; t < multiThrowCount; t++) {
        const speedFactor = isStrongBeat ? 
          2.0 + this.beatStrength * 1.2 + acceleration * 6 : 
          1.5 + positionEnergy * 3 + acceleration * 5;
        
        // 根据距离中心的远近调整抛起高度
        let heightFactor = 1.0;
        if (distanceFromCenter > coreSize) {
          // 边缘区域降低抛起高度
          const distanceFactor = Math.min((distanceFromCenter - coreSize) / (centerIndex - coreSize), 1);
          heightFactor = Math.max(0.5, 1 - distanceFactor * 0.5); // 最低降至50%
        }
        
        this.createThrownFace(i, j, this.throwInitialSpeed * speedFactor * heightFactor);
      }
    }
  }
  
  /**
   * 强制触发抛掷效果（用于测试）
   */
  private forceThrow(): void {
    // 在中心区域随机选择一个点
    const centerIndex = Math.floor(this.gridDimension / 2);
    const i = centerIndex + Math.floor((Math.random() - 0.5) * 10);
    const j = centerIndex + Math.floor((Math.random() - 0.5) * 10);
    
    // 确保索引在有效范围内
    const validI = Math.max(0, Math.min(i, this.gridDimension - 1));
    const validJ = Math.max(0, Math.min(j, this.gridDimension - 1));
    
    // 使用固定的上升速度
    const upwardSpeed = 0.1;
    
    // 创建抛掷效果
    this.createThrownFace(validI, validJ);
    console.log(`强制触发抛掷效果: 位置(${validI},${validJ})`);
  }
  
  /**
   * 创建抛掷的顶面
   */
  private createThrownFace(i: number, j: number, initialSpeed: number = this.throwInitialSpeed): void {
    const originalFace = this.topFaces[i][j];
    if (!originalFace) {
      return;
    }
    
    try {
      // 克隆原始顶面
      const thrownFace = originalFace.clone();
      
      // 确保材质也被克隆，并设置初始透明度
      thrownFace.traverse((child) => {
        try {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.Material) {
            child.material = child.material.clone();
            child.material.transparent = true;
            child.material.opacity = 0.9;
          }
          if (child instanceof THREE.Line && child.material instanceof THREE.LineBasicMaterial) {
            child.material = child.material.clone();
            child.material.transparent = true;
            child.material.opacity = 0.9;
          }
        } catch (error) {
          console.error('处理抛掷顶面材质时出错:', error);
        }
      });
      
      // 获取原始顶面的世界位置和旋转
      const worldPosition = new THREE.Vector3();
      const worldQuaternion = new THREE.Quaternion();
      originalFace.getWorldPosition(worldPosition);
      originalFace.getWorldQuaternion(worldQuaternion);
      
      // 设置抛掷顶面的位置和旋转
      thrownFace.position.copy(worldPosition);
      thrownFace.quaternion.copy(worldQuaternion);
      
      // 创建光晕效果
      const glowTexture = this.createGlowTexture();
      const glowMaterial = new THREE.SpriteMaterial({
        map: glowTexture,
        color: 0xffffff,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        depthWrite: false
      });
      
      const glowSprite = new THREE.Sprite(glowMaterial);
      glowSprite.scale.set(this.gridSize * 2, this.gridSize * 2, 1);
      glowSprite.visible = false;
      thrownFace.add(glowSprite);
      
      // 直接添加到场景
      this.scene.add(thrownFace);
      
      // 添加到抛掷列表
      this.thrownFaces.push({
        face: thrownFace,
        position: thrownFace.position.clone(),
        velocity: initialSpeed,
        initialPosition: worldPosition.clone(),
        maxHeight: worldPosition.z + this.throwMaxHeight,
        isDescending: false,
        hasCollided: false,
        bounceCount: 0,
        energyFactor: 0.8 + Math.random() * 0.4,
        glow: glowSprite
      });
      
    } catch (error) {
      console.error('创建抛掷顶面时出错:', error);
    }
  }
  
  /**
   * 创建碰撞闪光效果
   */
  private createCollisionFlash(position: THREE.Vector3): void {
    try {
      // 创建一个平面几何体作为闪光效果
      const flashGeometry = new THREE.PlaneGeometry(4, 4);
      const flashMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        transparent: true,
        opacity: 1.0,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      
      const flash = new THREE.Mesh(flashGeometry, flashMaterial);
      flash.position.copy(position);
      flash.position.z += 0.1; // 略微上移以避免z-fighting
      
      this.scene.add(flash);
      
      // 创建闪光动画
      let opacity = 1.0;
      const animate = () => {
        opacity -= 0.1;
        if (opacity <= 0) {
          this.scene.remove(flash);
          flashGeometry.dispose();
          flashMaterial.dispose();
          return;
        }
        
        flashMaterial.opacity = opacity;
        requestAnimationFrame(animate);
      };
      
      animate();
    } catch (error) {
      console.error('创建碰撞闪光效果时出错:', error);
    }
  }
  
  /**
   * 更新抛掷的顶面
   */
  private updateThrownFaces(_deltaTime: number): void {
    try {
      const fixedDeltaTime = 1/60;
      
      for (let i = this.thrownFaces.length - 1; i >= 0; i--) {
        try {
          const thrown = this.thrownFaces[i];
          
          // 应用空气阻力
          const airResistanceForce = thrown.velocity * this.airResistance;
          
          // 更新速度和位置
          if (!thrown.isDescending) {
            thrown.velocity -= (this.gravity + airResistanceForce) * fixedDeltaTime;
            thrown.position.z += thrown.velocity * fixedDeltaTime;
            
            if (thrown.velocity <= 0) {
              thrown.isDescending = true;
              thrown.velocity = 0;
            }
          } else {
            thrown.velocity += this.gravity * fixedDeltaTime;
            thrown.velocity = Math.min(thrown.velocity, 12.0);
            thrown.position.z -= thrown.velocity * fixedDeltaTime;
            
            // 检查碰撞
            if (!thrown.hasCollided && thrown.position.z <= thrown.initialPosition.z) {
              thrown.position.z = thrown.initialPosition.z;
              
              // 移除抛起物而不是重复弹跳
              thrown.hasCollided = true;
              this.scene.remove(thrown.face);
              this.thrownFaces.splice(i, 1);
              continue;
            }
          }
          
          // 更新顶面位置
          thrown.face.position.copy(thrown.position);
          
          // 更新光晕效果
          const height = Math.abs(thrown.position.z - thrown.initialPosition.z);
          const normalizedHeight = height / this.throwMaxHeight;
          
          // 获取抛掷面的子对象
          thrown.face.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
              // 确保填充面颜色始终为背景色
              child.material.color.set(this.backgroundColor);
            }
            if (child instanceof THREE.Line && child.material instanceof THREE.LineBasicMaterial) {
              // 更新线框颜色
              const brightness = 0.2 + Math.min(normalizedHeight * 0.8, 0.8);
              child.material.color.setRGB(brightness, brightness, brightness);
            }
          });
          
          // 更新光晕
          if (thrown.glow) {
            if (normalizedHeight > 0.3) {
              thrown.glow.visible = true;
              // 保持低亮度光晕效果
              const scale = this.gridSize * 1.5;
              thrown.glow.scale.set(scale, scale, 1);
              (thrown.glow.material as THREE.SpriteMaterial).opacity = 0.3;
            } else {
              thrown.glow.visible = false;
            }
          }
          
        } catch (error) {
          console.error('更新单个抛掷顶面时出错:', error);
          if (i >= 0 && i < this.thrownFaces.length) {
            const thrown = this.thrownFaces[i];
            if (thrown && thrown.face) {
              this.scene.remove(thrown.face);
            }
            this.thrownFaces.splice(i, 1);
          }
        }
      }
    } catch (error) {
      console.error('更新抛掷顶面时出错:', error);
    }
  }
  
  /**
   * 根据高度设置亮度
   * @param i X坐标
   * @param j Y坐标
   */
  private setBrightnessBasedColor(i: number, j: number): void {
    const topFaceGroup = this.topFaces[i][j];
    if (!topFaceGroup) return;
    
    const height = this.pillarHeights[i][j];
    
    // 如果处于静音状态，使用20%灰色
    if (this.isSilent) {
      // 更新线框颜色 - 线框是第二个子对象
      const topEdge = topFaceGroup.children[1];
      if (topEdge instanceof THREE.Line && topEdge.material instanceof THREE.LineBasicMaterial) {
        topEdge.material.color.setRGB(0.2, 0.2, 0.2); // 20%灰色
      }
      return;
    }
    
    // 计算亮度 - 从20%到100%
    // 绝对高度6对应的height值为6/28=0.214（因为现在Z轴缩放是28倍）
    const brightness = 0.2 + Math.min(height / 0.214 * 0.8, 0.8); // 将高度映射到亮度，范围从0.2到1.0
    
    // 更新线框颜色 - 线框是第二个子对象
    const topEdge = topFaceGroup.children[1];
    if (topEdge instanceof THREE.Line && topEdge.material instanceof THREE.LineBasicMaterial) {
      topEdge.material.color.setRGB(brightness, brightness, brightness);
    }
  }
  
  /**
   * 更新光晕效果
   * @param i X坐标
   * @param j Y坐标
   */
  private updateGlowEffect(i: number, j: number): void {
    const glowSprite = this.glowEffects[i][j];
    if (!glowSprite) return;
    
    const height = this.pillarHeights[i][j];
    
    // 在绝对高度为4个单位时触发光晕（4/28 ≈ 0.143）
    if (height > 0.143) {
      glowSprite.visible = true;
      
      // 调整光晕强度计算，保持渐变范围合适
      const glowIntensity = Math.min((height - 0.143) * 2.0, 1.0);
      
      // 增大光晕的基础大小
      const scale = this.gridSize * (1.5 + glowIntensity);
      glowSprite.scale.set(scale, scale, 1);
      
      // 设置光晕颜色 - 增加基础不透明度
      const material = glowSprite.material as THREE.SpriteMaterial;
      material.opacity = glowIntensity * 0.7;
      
      // 增强节拍时的光晕效果
      if (this.beatHistory[this.beatHistory.length - 1] > 0) {
        material.opacity *= 2.0;
      }
    } else {
      glowSprite.visible = false;
    }
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
   * 清理资源
   */
  dispose(): void {
    try {
      this.stop();
      
      // 清理场景
      this.scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Sprite) {
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
      
      // 清理抛掷的顶面
      for (const thrown of this.thrownFaces) {
        this.scene.remove(thrown.face);
        thrown.face.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.Material) {
            child.material.dispose();
          }
          if (child instanceof THREE.Line && child.material instanceof THREE.LineBasicMaterial) {
            child.material.dispose();
          }
        });
      }
      this.thrownFaces = [];
      
      // 清理爆炸效果
      for (const explosion of this.explosions) {
        if (explosion.flash) {
          this.scene.remove(explosion.flash);
        }
      }
      this.explosions = [];
      
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
      
      // 移除鼓包效果事件监听
      this.container.removeEventListener('updateBulge', this.handleBulgeUpdate.bind(this) as EventListener);
      this.container.removeEventListener('resetBulge', this.handleBulgeReset.bind(this) as EventListener);
      
      // 移除爆炸效果事件监听
      this.container.removeEventListener('createExplosion', this.handleCreateExplosion.bind(this) as EventListener);
      
      console.log('TopFacePillarEffect资源已清理');
    } catch (error) {
      console.error('清理TopFacePillarEffect资源失败:', error);
    }
  }
  
  /**
   * 更新渲染器尺寸
   */
  private updateRendererSize(): void {
    if (!this.container || !this.camera || !this.renderer) return;

    // 获取容器尺寸
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    // 检测屏幕方向
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    // 计算合适的视口大小
    let viewWidth = width;
    let viewHeight = height;

    if (isPortrait) {
      // 竖屏模式：放大1.5倍，允许裁切
      viewHeight = width * 0.8; // 保持宽高比为 1.25:1
      // 调整相机视角以适应更大的显示区域
      this.camera.position.set(0, -95, 110); // 调整相机位置以适应放大的视图
      this.camera.fov = 42; // 减小视场角以获得更好的视觉效果
    } else {
      // 横屏模式：填充主要区域
      viewHeight = height;
      // 恢复默认相机位置和视场角
      this.camera.position.set(0, -70, 80);
      this.camera.fov = 45;
    }

    // 更新相机宽高比和投影矩阵
    this.camera.aspect = viewWidth / viewHeight;
    this.camera.updateProjectionMatrix();

    // 更新渲染器尺寸
    this.renderer.setSize(viewWidth, viewHeight);
  }

  /**
   * 处理窗口大小变化
   */
  onWindowResize(): void {
    this.updateRendererSize();
  }
  
  /**
   * 动画循环
   */
  private animate(): void {
    this.animationId = requestAnimationFrame(this.animate.bind(this));

    // 更新爆炸效果
    this.updateExplosions();

    // 添加相机旋转动画
    const radius = Math.sqrt(this.camera.position.x * this.camera.position.x + this.camera.position.y * this.camera.position.y);
    const angle = Math.atan2(this.camera.position.y, this.camera.position.x) + 0.001;
    this.camera.position.x = radius * Math.cos(angle);
    this.camera.position.y = radius * Math.sin(angle);
    this.camera.lookAt(0, 0, 0);

    // 更新抛掷的顶面
    this.updateThrownFaces(1/60);

    // 打印当前抛掷顶面数量（每秒一次）
    if (Math.random() < 0.016) { // 约每秒一次 (1/60)
      console.log(`当前抛掷顶面数量: ${this.thrownFaces.length}`);
    }

    // 渲染场景
    this.renderer.render(this.scene, this.camera);
  }
  
  /**
   * 更新音频数据
   */
  updateAudioData(frequencyData: Uint8Array, beatDetected: boolean): void {
    if (!this.isInitialized) return;
    
    try {
      // 计算当前帧的总能量
      let totalEnergy = 0;
      for (let i = 0; i < frequencyData.length; i++) {
        totalEnergy += frequencyData[i];
      }
      const averageEnergy = totalEnergy / frequencyData.length;
      
      // 更新能量历史
      this.energyHistory.push(averageEnergy);
      if (this.energyHistory.length > 30) { // 保持最近30帧的历史
        this.energyHistory.shift();
      }
      
      // 计算能量变化率
      const energyChange = this.energyHistory.length > 1 ? 
        averageEnergy - this.energyHistory[this.energyHistory.length - 2] : 0;
      
      // 如果检测到节拍，更新节拍相关数据
      if (beatDetected) {
        const currentTime = performance.now();
        this.lastBeatTime = currentTime;
        
        // 计算节拍强度（基于能量和能量变化）
        this.beatStrength = Math.min(
          (averageEnergy / 255) * 0.7 + Math.abs(energyChange / 255) * 0.3,
          1.0
        );
      }
      
      // 原有的静音检测逻辑
      if (averageEnergy < 5) {
        this.silenceTimer++;
      } else {
        this.silenceTimer = 0;
      }
      this.isSilent = this.silenceTimer > this.silenceThreshold;
      
      // 计算核心区域的范围 (中心30x30)
      const coreSize = 30;
      const halfCore = coreSize / 2;
      const centerIndex = Math.floor(this.gridDimension / 2);
      const coreStartIndex = centerIndex - halfCore;
      const coreEndIndex = centerIndex + halfCore;
      
      // 更新节拍历史
      this.beatHistory.push(beatDetected ? 1 : 0);
      this.beatHistory.shift();
      
      // 首先计算每个Y坐标对应的频率值 (用于中心列)
      const yFrequencyValues: number[] = [];
      
      for (let localJ = 0; localJ < coreSize; localJ++) {
        // 使用分段非线性映射来调整频率索引
        const normalizedPosition = localJ / (coreSize - 1); // 0到1
        
        // 分段非线性映射：
        // 低频段(0-0.3): 较慢的增长
        // 中频段(0.3-0.8): 线性增长
        // 高频段(0.8-1.0): 压缩到最后一列
        let mappedPosition;
        if (normalizedPosition < 0.3) {
          // 低频段使用平方根映射
          mappedPosition = Math.pow(normalizedPosition / 0.3, 0.5) * 0.3;
        } else if (normalizedPosition < 0.8) {
          // 中频段线性映射，但范围扩大
          mappedPosition = 0.3 + ((normalizedPosition - 0.3) / 0.5) * 0.6;
        } else {
          // 高频段全部映射到最后的采样点
          mappedPosition = 0.9;
        }
        
        // 计算实际的频率索引，但只使用频谱的前80%
        const frequencyIndex = Math.min(
          Math.floor(mappedPosition * (frequencyData.length * 0.8)),
          frequencyData.length - 1
        );
        
        // 获取频率值并进行非线性映射
        let frequencyValue = frequencyData[frequencyIndex] / 255;
        
        // 根据频率区域调整增益 - 中频段增益最大
        let gainFactor;
        if (normalizedPosition < 0.3) {
          // 低频段增益：0.8-1.2
          gainFactor = 0.8 + (normalizedPosition / 0.3) * 0.4;
        } else if (normalizedPosition < 0.8) {
          // 中频段增益：1.2-1.6
          gainFactor = 1.2 + ((normalizedPosition - 0.3) / 0.5) * 0.4;
        } else {
          // 高频段增益：1.6-1.8
          gainFactor = 1.6 + ((normalizedPosition - 0.8) / 0.2) * 0.2;
        }
        
        frequencyValue = Math.pow(frequencyValue, 0.6) * gainFactor;
        
        // 确保值在0-1范围内
        frequencyValue = Math.min(Math.max(frequencyValue, 0), 1);
        
        yFrequencyValues.push(frequencyValue);
      }
      
      // 对频率值在Y方向进行预平滑
      const smoothedFrequencyValues: number[] = [];
      const ySmoothingRadius = 2; // Y方向平滑半径
      
      for (let j = 0; j < yFrequencyValues.length; j++) {
        let sum = 0;
        let weightSum = 0;
        
        for (let dj = -ySmoothingRadius; dj <= ySmoothingRadius; dj++) {
          const nj = j + dj;
          if (nj >= 0 && nj < yFrequencyValues.length) {
            // 使用高斯权重
            const weight = Math.exp(-(dj * dj) / 4);
            sum += yFrequencyValues[nj] * weight;
            weightSum += weight;
          }
        }
        
        smoothedFrequencyValues[j] = sum / weightSum;
      }
      
      // 获取当前时间用于水波动画
      const time = performance.now() * 0.001;
      
      // 创建临时数组存储平滑前的高度值
      const rawHeights: number[][] = Array(coreSize).fill(0).map(() => Array(coreSize).fill(0));
      
      // 更新核心区域的柱体高度
      for (let i = coreStartIndex; i < coreEndIndex; i++) {
        const localI = i - coreStartIndex;
        
        for (let j = coreStartIndex; j < coreEndIndex; j++) {
          const localJ = j - coreStartIndex;
          let heightValue = 0;
          
          // 使用第17列作为基准列 (基于0的索引，所以是16)
          if (localI === 16) {
            // 使用预平滑后的Y轴频率值，并稍微降低基准列高度
            heightValue = Math.max(smoothedFrequencyValues[localJ] * 0.85, 0.02);
          } else {
            // 计算与基准列的距离
            const distanceFromCenter = Math.abs(localI - 16);
            
            // 获取预平滑后的基准列对应Y位置的高度值作为波源
            const sourceHeight = smoothedFrequencyValues[localJ];
            
            // 根据Y轴位置（频率）动态计算波长
            const frequencyFactor = localJ / (coreSize - 1);
            // 减小波长范围到1.8-1.2，使波动更加密集
            const waveLength = 1.8 - (frequencyFactor * 0.6);
            
            // 增加传播速度，使波动更快
            const propagationSpeed = 18.0;
            
            // 使用非线性衰减 - 恢复原来的衰减参数
            // 基础衰减系数 - 更小的值使得近距离衰减更缓慢
            const baseAttenuation = 0.03;
            // 距离的指数系数 - 增大指数使远距离衰减更快
            const distanceExponent = 2.2;
            // 计算非线性距离，添加偏移使近距离衰减更平缓
            const normalizedDistance = Math.max(0, (distanceFromCenter - 3) / (coreSize / 2));
            // 使用指数函数计算衰减系数
            const attenuationFactor = baseAttenuation * Math.pow(normalizedDistance, distanceExponent);
            
            // 计算相位偏移 - 基于距离和时间
            const phaseOffset = distanceFromCenter - time * propagationSpeed;
            
            // 计算衰减系数 - 使用非线性衰减
            const attenuation = Math.exp(-attenuationFactor * distanceFromCenter);
            
            // 计算水波高度 - 使用正弦波和余弦波的组合，增加复杂性
            const waveHeight = (
              Math.sin(phaseOffset / waveLength) * 0.7 + 
              Math.cos(phaseOffset / (waveLength * 1.3))
            ) * attenuation * sourceHeight * 0.5;
            
            // 确保高度为正值，并使用统一的最小高度
            heightValue = Math.max(waveHeight * 0.8, 0.02);
          }
          
          // 应用鼓包效果
          heightValue = this.applyBulgeEffect(i, j, heightValue);
          
          // 应用爆炸效果
          heightValue = this.applyExplosionEffect(i, j, heightValue);
          
          // 存储原始高度值
          rawHeights[localI][localJ] = heightValue;
        }
      }
      
      // 应用增强的空间平滑 - 增加平滑半径和权重
      const xSmoothingRadius = 5; // 增加X方向平滑半径到5
      const finalYSmoothingRadius = 5; // 增加Y方向平滑半径到5
      const xSmoothingWeight = 0.9; // 增加X方向平滑权重到0.9
      const ySmoothingWeight = 0.9; // 增加Y方向平滑权重到0.9
      
      // 增加衰减系数的基准值和变化率
      const baseAttenuationFactor = 0.15; // 基准衰减系数
      const attenuationVariation = 0.05; // 衰减变化率
      
      for (let i = 0; i < coreSize; i++) {
        for (let j = 0; j < coreSize; j++) {
          let totalWeight = 1.0;
          let smoothedHeight = rawHeights[i][j];
          
          // 遍历邻近点 - 使用椭圆形平滑区域
          for (let di = -xSmoothingRadius; di <= xSmoothingRadius; di++) {
            for (let dj = -finalYSmoothingRadius; dj <= finalYSmoothingRadius; dj++) {
              if (di === 0 && dj === 0) continue;
              
              const ni = i + di;
              const nj = j + dj;
              
              if (ni >= 0 && ni < coreSize && nj >= 0 && nj < coreSize) {
                // 计算椭圆距离
                const xDistance = di / xSmoothingRadius;
                const yDistance = dj / finalYSmoothingRadius;
                const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
                
                if (distance <= 1.0) {
                  // 使用高斯权重，增加平滑强度
                  const xWeight = xSmoothingWeight * Math.exp(-distance * distance * 3);
                  const yWeight = ySmoothingWeight * Math.exp(-distance * distance * 3);
                  const weight = Math.abs(di) > 0 ? xWeight : yWeight;
                  
                  // 根据是否是基准列附近调整权重
                  const distanceFromCenter = Math.abs(i - 16);
                  const centerProximityFactor = Math.exp(-distanceFromCenter * 0.2);
                  const adjustedWeight = weight * (1 + centerProximityFactor * 0.5);
                  
                  totalWeight += adjustedWeight;
                  smoothedHeight += rawHeights[ni][nj] * adjustedWeight;
                }
              }
            }
          }
          
          // 应用平滑后的高度
          this.setPillarHeight(
            coreStartIndex + i,
            coreStartIndex + j,
            smoothedHeight / totalWeight
          );
        }
      }
      
      // 如果检测到节拍，添加额外的视觉效果
      if (beatDetected && !this.isSilent) {
        if (this.beatStrength > 0.5) {
          const centerIndex = Math.floor(this.gridDimension / 2);
          
          // 显著增加触发数量
          const throwCount = 4 + Math.floor(this.beatStrength * 12); // 最多可能触发16个
          
          for (let t = 0; t < throwCount; t++) {
            const i = centerIndex + Math.floor((Math.random() - 0.5) * 16);
            const j = centerIndex + Math.floor((Math.random() - 0.5) * 16);
            
            const validI = Math.max(0, Math.min(i, this.gridDimension - 1));
            const validJ = Math.max(0, Math.min(j, this.gridDimension - 1));
            
            this.createThrownFace(validI, validJ, this.throwInitialSpeed * (1.8 + this.beatStrength * 1.5));
          }
          
          console.log(`强节拍触发${throwCount}个抛掷效果`);
        }
      }
      
    } catch (error) {
      console.error('更新音频数据时出错:', error);
    }
  }

  private createCollisionGlow(_face: THREE.Group, position: THREE.Vector3): void {
    try {
      // 创建一个平面几何体作为碰撞光晕 - 减小尺寸
      const glowGeometry = new THREE.PlaneGeometry(this.gridSize * 2, this.gridSize * 2);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.4, // 降低初始不透明度
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.copy(position);
      glow.position.z += 0.01;
      
      this.scene.add(glow);
      
      // 创建光晕动画 - 缩短持续时间
      let time = 0;
      const duration = 0.15; // 缩短持续时间到0.15秒
      const animate = () => {
        time += 1/60;
        if (time >= duration) {
          this.scene.remove(glow);
          glowGeometry.dispose();
          glowMaterial.dispose();
          return;
        }
        
        const progress = time / duration;
        const scale = 1 + progress * 0.3; // 减小扩大幅度
        glow.scale.set(scale, scale, 1);
        glowMaterial.opacity = 0.4 * (1 - progress); // 从较低的不透明度开始衰减
        
        requestAnimationFrame(animate);
      };
      
      animate();
    } catch (error) {
      console.error('创建碰撞光晕效果时出错:', error);
    }
  }

  public getScene(): THREE.Scene {
    return this.scene;
  }

  public getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  public getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  /**
   * 处理鼓包更新事件
   */
  private handleBulgeUpdate(event: CustomEvent): void {
    const { position, radius, height, falloff } = event.detail;
    this.bulgePosition = new THREE.Vector2(position.x, position.y);
    this.bulgeRadius = radius;
    this.bulgeHeight = height;
    this.bulgeFalloff = falloff;
    this.bulgeActive = true;
  }
  
  /**
   * 处理鼓包重置事件
   */
  private handleBulgeReset(): void {
    this.bulgeActive = false;
    this.bulgePosition = null;
  }
  
  /**
   * 应用鼓包效果到指定位置
   */
  private applyBulgeEffect(i: number, j: number, baseHeight: number): number {
    if (!this.bulgeActive || !this.bulgePosition) return baseHeight;
    
    // 计算网格位置的世界坐标
    const gridSize = 2;
    const offset = (this.gridDimension * gridSize) / 2 - gridSize / 2;
    const worldX = i * gridSize - offset;
    const worldY = j * gridSize - offset;
    
    // 计算到鼓包中心的距离
    const distance = new THREE.Vector2(worldX, worldY).distanceTo(this.bulgePosition);
    
    // 如果超出影响半径，返回原始高度
    if (distance > this.bulgeRadius) return baseHeight;
    
    // 计算鼓包高度
    const normalizedDistance = distance / this.bulgeRadius;
    const bulgeInfluence = Math.pow(1 - normalizedDistance, this.bulgeFalloff);
    const bulgeContribution = this.bulgeHeight * bulgeInfluence;
    
    return baseHeight + bulgeContribution;
  }

  /**
   * 处理创建爆炸事件
   */
  private handleCreateExplosion(event: CustomEvent): void {
    const { position, radius, strength, decay } = event.detail;
    
    // 创建爆炸效果
    this.createExplosion(
      new THREE.Vector2(position.x, position.y),
      radius,
      strength,
      decay
    );
  }
  
  /**
   * 创建爆炸效果
   */
  private createExplosion(
    position: THREE.Vector2,
    radius: number,
    strength: number,
    decay: number
  ): void {
    // 创建爆炸闪光效果
    const flash = this.createExplosionFlash(position);
    
    // 添加到爆炸列表
    this.explosions.push({
      position,
      radius,
      strength,
      decay,
      age: 0,
      maxAge: this.EXPLOSION_MAX_AGE,
      flash
    });
    
    console.log(`创建爆炸效果: 位置(${position.x}, ${position.y}), 半径${radius}, 强度${strength}`);
  }
  
  /**
   * 创建爆炸闪光效果
   */
  private createExplosionFlash(position: THREE.Vector2): THREE.Sprite {
    // 创建闪光纹理
    const flashTexture = this.createGlowTexture();
    
    // 创建闪光材质 - 使用橙色
    const flashMaterial = new THREE.SpriteMaterial({
      map: flashTexture,
      color: 0xff7700, // 橙色
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false
    });
    
    // 创建闪光精灵
    const flash = new THREE.Sprite(flashMaterial);
    
    // 设置位置
    flash.position.set(position.x, position.y, 0.5); // 略微上移以避免z-fighting
    
    // 设置大小
    flash.scale.set(5, 5, 1);
    
    // 添加到场景
    this.scene.add(flash);
    
    return flash;
  }
  
  /**
   * 更新爆炸效果
   */
  private updateExplosions(): void {
    for (let i = this.explosions.length - 1; i >= 0; i--) {
      const explosion = this.explosions[i];
      
      // 增加年龄
      explosion.age++;
      
      // 如果超过最大年龄，移除爆炸效果
      if (explosion.age >= explosion.maxAge) {
        // 移除闪光效果
        if (explosion.flash) {
          this.scene.remove(explosion.flash);
          (explosion.flash.material as THREE.SpriteMaterial).dispose();
        }
        
        // 从列表中移除
        this.explosions.splice(i, 1);
        continue;
      }
      
      // 更新闪光效果
      if (explosion.flash) {
        // 计算闪光不透明度 - 快速衰减
        const flashOpacity = Math.max(0, 1 - explosion.age / 20);
        (explosion.flash.material as THREE.SpriteMaterial).opacity = flashOpacity;
        
        // 增加闪光大小
        const scale = 5 + explosion.age * 0.2;
        explosion.flash.scale.set(scale, scale, 1);
      }
    }
  }
  
  /**
   * 应用爆炸效果到指定位置
   */
  private applyExplosionEffect(i: number, j: number, baseHeight: number): number {
    if (this.explosions.length === 0) return baseHeight;
    
    // 计算网格位置的世界坐标
    const gridSize = 2;
    const offset = (this.gridDimension * gridSize) / 2 - gridSize / 2;
    const worldX = i * gridSize - offset;
    const worldY = j * gridSize - offset;
    const worldPos = new THREE.Vector2(worldX, worldY);
    
    // 累积所有爆炸的影响
    let totalEffect = 0;
    
    for (const explosion of this.explosions) {
      // 计算当前震荡波半径
      const waveRadius = explosion.age * this.EXPLOSION_WAVE_SPEED;
      
      // 计算到爆炸中心的距离
      const distance = worldPos.distanceTo(explosion.position);
      
      // 如果在震荡波前沿附近，添加效果
      const waveFrontWidth = 4; // 增加震荡波宽度（从3增加到4）
      const distFromWaveFront = Math.abs(distance - waveRadius);
      
      if (distFromWaveFront < waveFrontWidth && distance <= explosion.radius) {
        // 计算在波前的位置 (0-1)
        const wavePos = 1 - (distFromWaveFront / waveFrontWidth);
        
        // 计算波形 - 使用正弦波
        const waveForm = Math.sin(wavePos * Math.PI);
        
        // 计算强度衰减 - 随着距离和时间衰减，但衰减更慢
        const distanceFactor = 1 - Math.pow(distance / explosion.radius, 0.7); // 使用非线性衰减，减缓衰减速度
        const ageFactor = 1 - Math.pow(explosion.age / explosion.maxAge, 0.8); // 使用非线性衰减，减缓衰减速度
        const strengthFactor = explosion.strength * distanceFactor * ageFactor;
        
        // 计算最终效果 - 将波峰高度调整为原来的70%
        const effect = waveForm * strengthFactor * 0.7;
        
        // 累加效果
        totalEffect += effect;
      }
    }
    
    // 应用效果到高度
    return baseHeight + totalEffect;
  }
} 