import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

/**
 * 鼠标交互管理器
 * 当前版本仅实现滚轮缩放功能
 */
export class MouseInteractionManager {
  private camera: PerspectiveCamera;
  private domElement: HTMLElement;
  
  // 缩放配置
  private readonly MIN_ZOOM = 5;   // 最小缩放距离
  private readonly MAX_ZOOM = 80;  // 增加最大缩放距离到80
  private readonly ZOOM_SPEED = 2.0; // 增加缩放速度到2.0
  
  constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer, domElement: HTMLElement) {
    this.camera = camera;
    this.domElement = domElement;
    
    this.addEventListeners();
  }
  
  /**
   * 添加事件监听器
   */
  private addEventListeners(): void {
    this.domElement.addEventListener('wheel', this.handleWheel.bind(this));
  }
  
  /**
   * 处理滚轮事件
   * @param event 滚轮事件对象
   */
  private handleWheel = (event: WheelEvent): void => {
    event.preventDefault(); // 阻止默认滚动行为
    
    // 根据滚动量计算缩放因子
    const delta = event.deltaY > 0 ? 1 : -1;
    const currentZ = this.camera.position.z;
    
    // 使用当前距离来调整缩放速度（距离越远，移动越快）
    const speedFactor = Math.max(1.0, currentZ / 20);
    
    // 计算新的 Z 位置，并确保在允许范围内
    const newZ = Math.max(
      this.MIN_ZOOM,
      Math.min(this.MAX_ZOOM, currentZ + delta * this.ZOOM_SPEED * speedFactor)
    );
    
    // 更新相机位置
    this.camera.position.z = newZ;
  }
  
  /**
   * 清理资源
   */
  public dispose(): void {
    this.domElement.removeEventListener('wheel', this.handleWheel);
  }
} 