import { Scene, PerspectiveCamera, WebGLRenderer, Vector2, Raycaster, Plane, Vector3 } from 'three';

/**
 * 鼠标交互管理器
 * 实现滚轮缩放和鼠标悬停鼓包效果
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
  
  // 鼠标位置追踪
  private mouse: Vector2;
  private raycaster: Raycaster;
  private groundPlane: Plane;
  private mouseWorldPos: Vector3;
  private isMouseOverGrid: boolean;
  
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
    
    this.addEventListeners();
  }
  
  /**
   * 添加事件监听器
   */
  private addEventListeners(): void {
    this.domElement.addEventListener('wheel', this.handleWheel.bind(this));
    this.domElement.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.domElement.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
  }
  
  /**
   * 处理鼠标移动事件
   */
  private handleMouseMove = (event: MouseEvent): void => {
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
  private handleMouseLeave = (): void => {
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
  private handleWheel = (event: WheelEvent): void => {
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
    this.domElement.removeEventListener('wheel', this.handleWheel);
    this.domElement.removeEventListener('mousemove', this.handleMouseMove);
    this.domElement.removeEventListener('mouseleave', this.handleMouseLeave);
  }
} 