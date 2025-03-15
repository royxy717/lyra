import { Scene, PerspectiveCamera, WebGLRenderer, Vector2, Raycaster, Plane, Vector3 } from 'three';

/**
 * 鼠标交互管理器
 * 实现滚轮缩放、鼠标悬停鼓包效果和点击爆炸效果
 */
export class MouseInteractionManager {
  private camera: PerspectiveCamera;
  private scene: Scene;
  private domElement: HTMLElement;
  
  // 缩放配置
  private readonly MIN_ZOOM = 5;   // 最小缩放距离
  private readonly MAX_ZOOM = 80;  // 增加最大缩放距离到80
  private readonly ZOOM_SPEED = 2.0; // 增加缩放速度到2.0
  
  // 鼓包效果配置
  private readonly BULGE_RADIUS = 5;     // 鼓包影响半径（网格单位）
  private readonly BULGE_HEIGHT = 0.9;   // 增加鼓包最大高度到0.9（原来的三倍）
  private readonly BULGE_FALLOFF = 2;    // 鼓包衰减指数
  
  // 爆炸效果配置
  private readonly EXPLOSION_RADIUS = 45;    // 增加爆炸影响半径（从30增加到45，再增加50%）
  private readonly EXPLOSION_STRENGTH = 1.5; // 爆炸强度
  private readonly EXPLOSION_DECAY = 0.95;   // 爆炸衰减系数
  
  // 点击冷却机制
  private lastClickTime: number = 0;
  private readonly CLICK_COOLDOWN = 200; // 点击冷却时间（毫秒），从500减小到200
  
  // 鼠标位置追踪
  private mouse: Vector2;
  private raycaster: Raycaster;
  private groundPlane: Plane;
  private mouseWorldPos: Vector3;
  private isMouseOverGrid: boolean;
  
  // 事件处理函数的绑定版本，用于正确移除事件监听器
  private boundHandleWheel: (event: WheelEvent) => void;
  private boundHandleMouseMove: (event: MouseEvent) => void;
  private boundHandleMouseLeave: () => void;
  private boundHandleClick: (event: MouseEvent) => void;
  
  // 标记是否已经添加了事件监听器
  private hasAddedEventListeners: boolean = false;
  
  constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer, domElement: HTMLElement) {
    this.scene = scene;
    this.camera = camera;
    this.domElement = domElement;
    
    // 初始化鼠标交互相关对象
    this.mouse = new Vector2();
    this.raycaster = new Raycaster();
    this.groundPlane = new Plane(new Vector3(0, 0, 1), 0); // XY平面
    this.mouseWorldPos = new Vector3();
    this.isMouseOverGrid = false;
    
    // 创建绑定的事件处理函数
    this.boundHandleWheel = this.handleWheel.bind(this);
    this.boundHandleMouseMove = this.handleMouseMove.bind(this);
    this.boundHandleMouseLeave = this.handleMouseLeave.bind(this);
    this.boundHandleClick = this.handleClick.bind(this);
    
    // 添加事件监听器
    this.addEventListeners();
  }
  
  /**
   * 添加事件监听器
   */
  private addEventListeners(): void {
    // 防止重复添加事件监听器
    if (this.hasAddedEventListeners) {
      return;
    }
    
    // 移除可能存在的旧事件监听器
    this.removeEventListeners();
    
    // 添加新的事件监听器
    this.domElement.addEventListener('wheel', this.boundHandleWheel);
    this.domElement.addEventListener('mousemove', this.boundHandleMouseMove);
    this.domElement.addEventListener('mouseleave', this.boundHandleMouseLeave);
    
    // 使用捕获阶段处理点击事件，确保在事件冒泡前捕获
    this.domElement.addEventListener('click', this.boundHandleClick, { capture: true });
    
    // 标记已添加事件监听器
    this.hasAddedEventListeners = true;
    
    console.log('MouseInteractionManager: 已添加事件监听器');
  }
  
  /**
   * 移除事件监听器
   */
  private removeEventListeners(): void {
    this.domElement.removeEventListener('wheel', this.boundHandleWheel);
    this.domElement.removeEventListener('mousemove', this.boundHandleMouseMove);
    this.domElement.removeEventListener('mouseleave', this.boundHandleMouseLeave);
    this.domElement.removeEventListener('click', this.boundHandleClick, { capture: true });
    
    // 重置标记
    this.hasAddedEventListeners = false;
  }
  
  /**
   * 处理鼠标点击事件
   */
  private handleClick(event: MouseEvent): void {
    // 检查点击冷却时间
    const currentTime = Date.now();
    if (currentTime - this.lastClickTime < this.CLICK_COOLDOWN) {
      // 如果冷却时间内，阻止事件并返回
      event.preventDefault();
      event.stopPropagation();
      console.log('MouseInteractionManager: 点击冷却中，忽略点击');
      return;
    }
    
    // 更新最后点击时间
    this.lastClickTime = currentTime;
    
    // 计算鼠标在归一化设备坐标中的位置
    const rect = this.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // 更新射线
    this.raycaster.setFromCamera(this.mouse, this.camera);
    
    // 计算射线与地平面的交点
    const intersects = this.raycaster.ray.intersectPlane(this.groundPlane, this.mouseWorldPos);
    
    if (intersects) {
      // 触发爆炸效果
      this.createExplosion();
      
      // 阻止事件冒泡和默认行为
      event.preventDefault();
      event.stopPropagation();
      
      console.log('MouseInteractionManager: 创建爆炸效果，时间戳:', currentTime);
    }
  }
  
  /**
   * 创建爆炸效果
   */
  private createExplosion(): void {
    // 获取鼠标在世界坐标中的位置
    const mouseX = this.mouseWorldPos.x;
    const mouseY = this.mouseWorldPos.y;
    
    // 发出自定义事件通知效果系统创建爆炸
    const explosionEvent = new CustomEvent('createExplosion', {
      detail: {
        position: { x: mouseX, y: mouseY },
        radius: this.EXPLOSION_RADIUS,
        strength: this.EXPLOSION_STRENGTH,
        decay: this.EXPLOSION_DECAY
      }
    });
    
    this.domElement.dispatchEvent(explosionEvent);
  }
  
  /**
   * 处理鼠标移动事件
   */
  private handleMouseMove(event: MouseEvent): void {
    // 计算鼠标在归一化设备坐标中的位置
    const rect = this.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // 更新射线
    this.raycaster.setFromCamera(this.mouse, this.camera);
    
    // 计算射线与地平面的交点
    const intersects = this.raycaster.ray.intersectPlane(this.groundPlane, this.mouseWorldPos);
    
    if (intersects) {
      this.isMouseOverGrid = true;
      // 触发鼓包效果更新
      this.updateBulgeEffect();
    } else {
      this.isMouseOverGrid = false;
    }
  }
  
  /**
   * 处理鼠标离开事件
   */
  private handleMouseLeave(): void {
    this.isMouseOverGrid = false;
    // 重置鼓包效果
    this.resetBulgeEffect();
  }
  
  /**
   * 更新鼓包效果
   */
  private updateBulgeEffect(): void {
    if (!this.isMouseOverGrid) return;
    
    // 获取鼠标在世界坐标中的位置
    const mouseX = this.mouseWorldPos.x;
    const mouseY = this.mouseWorldPos.y;
    
    // 发出自定义事件通知效果系统更新鼓包
    const bulgeEvent = new CustomEvent('updateBulge', {
      detail: {
        position: { x: mouseX, y: mouseY },
        radius: this.BULGE_RADIUS,
        height: this.BULGE_HEIGHT,
        falloff: this.BULGE_FALLOFF
      }
    });
    
    this.domElement.dispatchEvent(bulgeEvent);
  }
  
  /**
   * 重置鼓包效果
   */
  private resetBulgeEffect(): void {
    const resetEvent = new CustomEvent('resetBulge');
    this.domElement.dispatchEvent(resetEvent);
  }
  
  /**
   * 处理滚轮事件
   */
  private handleWheel(event: WheelEvent): void {
    event.preventDefault();
    
    const delta = event.deltaY > 0 ? 1 : -1;
    const currentZ = this.camera.position.z;
    
    const speedFactor = Math.max(1.0, currentZ / 20);
    
    const newZ = Math.max(
      this.MIN_ZOOM,
      Math.min(this.MAX_ZOOM, currentZ + delta * this.ZOOM_SPEED * speedFactor)
    );
    
    this.camera.position.z = newZ;
  }
  
  /**
   * 清理资源
   */
  public dispose(): void {
    // 移除所有事件监听器
    this.removeEventListeners();
    console.log('MouseInteractionManager: 已移除所有事件监听器');
  }
} 