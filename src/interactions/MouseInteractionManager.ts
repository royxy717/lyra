import { Scene, PerspectiveCamera, WebGLRenderer, Vector2, Raycaster, Plane, Vector3 } from 'three';

/**
 * 鼠标和触摸交互管理器
 * 实现滚轮缩放、鼠标/触摸悬停鼓包效果和点击/双击爆炸效果
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
  private EXPLOSION_STRENGTH = 1.0; // 爆炸强度
  private readonly EXPLOSION_DECAY = 0.05;   // 爆炸衰减系数
  
  // 点击冷却机制
  private lastClickTime = 0;
  private readonly CLICK_COOLDOWN = 100; // 毫秒，从500减小到100
  
  // 触摸事件相关
  private lastTouchTime: number = 0;
  private readonly DOUBLE_TAP_THRESHOLD = 300; // 毫秒
  private isTouching: boolean = false;
  private touchZoomStart: number = 0; // 双指缩放开始距离
  private touchZoomCurrent: number = 0; // 双指缩放当前距离
  
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
  
  // 触摸事件处理函数的绑定版本
  private boundHandleTouchStart: (event: TouchEvent) => void;
  private boundHandleTouchMove: (event: TouchEvent) => void;
  private boundHandleTouchEnd: (event: TouchEvent) => void;
  
  // 标记是否已经添加了事件监听器
  private hasAddedEventListeners: boolean = false;
  
  // 设备检测
  private isMobileDevice: boolean = false;
  
  constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer, domElement: HTMLElement) {
    this.scene = scene;
    this.camera = camera;
    this.domElement = domElement;
    
    // 检测是否为移动设备
    this.isMobileDevice = this.detectMobileDevice();
    console.log(`设备检测: ${this.isMobileDevice ? '移动设备' : '桌面设备'}`);
    
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
    
    // 创建绑定的触摸事件处理函数
    this.boundHandleTouchStart = this.handleTouchStart.bind(this);
    this.boundHandleTouchMove = this.handleTouchMove.bind(this);
    this.boundHandleTouchEnd = this.handleTouchEnd.bind(this);
    
    // 添加事件监听器
    this.addEventListeners();
    
    // 如果是移动设备，应用移动设备特定的优化
    if (this.isMobileDevice) {
      this.applyMobileOptimizations();
    }
  }
  
  /**
   * 检测是否为移动设备
   */
  private detectMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (navigator.maxTouchPoints !== undefined && navigator.maxTouchPoints > 2);
  }
  
  /**
   * 应用移动设备特定的优化
   */
  private applyMobileOptimizations(): void {
    console.log('应用移动设备优化');
    
    // 1. 添加视口元标签，确保正确的缩放
    this.ensureViewportMeta();
    
    // 2. 禁用长按菜单
    this.disableLongPressMenu();
    
    // 3. 调整爆炸效果强度，使其在移动设备上更明显
    this.adjustExplosionForMobile();
  }
  
  /**
   * 确保页面有正确的视口元标签
   */
  private ensureViewportMeta(): void {
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    
    // 设置视口属性，禁用用户缩放以避免干扰我们的双指缩放
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  }
  
  /**
   * 禁用长按菜单，避免干扰交互
   */
  private disableLongPressMenu(): void {
    // 禁用上下文菜单
    this.domElement.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      return false;
    });
    
    // 添加触摸反馈样式
    const style = document.createElement('style');
    style.textContent = `
      canvas {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
      }
    `;
    document.head.appendChild(style);
  }
  
  /**
   * 调整爆炸效果参数，使其在移动设备上更明显
   */
  private adjustExplosionForMobile(): void {
    // 在移动设备上增强爆炸效果
    if (this.isMobileDevice) {
      // 增加爆炸强度，使其在小屏幕上更明显
      this.EXPLOSION_STRENGTH = 2.0; // 现在可以修改了
    }
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
    
    // 添加鼠标事件监听器（桌面设备）
    this.domElement.addEventListener('wheel', this.boundHandleWheel);
    this.domElement.addEventListener('mousemove', this.boundHandleMouseMove);
    this.domElement.addEventListener('mouseleave', this.boundHandleMouseLeave);
    this.domElement.addEventListener('click', this.boundHandleClick, { capture: true });
    
    // 添加触摸事件监听器（移动设备）
    this.domElement.addEventListener('touchstart', this.boundHandleTouchStart, { passive: false });
    this.domElement.addEventListener('touchmove', this.boundHandleTouchMove, { passive: false });
    this.domElement.addEventListener('touchend', this.boundHandleTouchEnd);
    
    // 标记已添加事件监听器
    this.hasAddedEventListeners = true;
    
    console.log('MouseInteractionManager: 已添加事件监听器');
  }
  
  /**
   * 移除事件监听器
   */
  private removeEventListeners(): void {
    // 移除鼠标事件监听器
    this.domElement.removeEventListener('wheel', this.boundHandleWheel);
    this.domElement.removeEventListener('mousemove', this.boundHandleMouseMove);
    this.domElement.removeEventListener('mouseleave', this.boundHandleMouseLeave);
    this.domElement.removeEventListener('click', this.boundHandleClick, { capture: true });
    
    // 移除触摸事件监听器
    this.domElement.removeEventListener('touchstart', this.boundHandleTouchStart);
    this.domElement.removeEventListener('touchmove', this.boundHandleTouchMove);
    this.domElement.removeEventListener('touchend', this.boundHandleTouchEnd);
    
    // 重置标记
    this.hasAddedEventListeners = false;
  }
  
  /**
   * 处理触摸开始事件
   */
  private handleTouchStart(event: TouchEvent): void {
    // 阻止默认行为，防止页面滚动
    event.preventDefault();
    
    if (event.touches.length === 1) {
      // 单指触摸 - 模拟鼠标悬停
      this.isTouching = true;
      
      // 获取触摸点位置
      const touch = event.touches[0];
      this.updatePointerPosition(touch.clientX, touch.clientY);
      
      // 检测是否为双击（两次触摸间隔小于阈值）
      const currentTime = Date.now();
      if (currentTime - this.lastTouchTime < this.DOUBLE_TAP_THRESHOLD) {
        // 双击检测 - 模拟鼠标点击产生爆炸
        this.handleDoubleTap();
      }
      
      // 更新最后触摸时间
      this.lastTouchTime = currentTime;
    } else if (event.touches.length === 2) {
      // 双指触摸 - 用于缩放
      // 计算两个触摸点之间的距离作为初始缩放值
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      this.touchZoomStart = Math.sqrt(dx * dx + dy * dy);
      this.touchZoomCurrent = this.touchZoomStart;
    }
  }
  
  /**
   * 处理触摸移动事件
   */
  private handleTouchMove(event: TouchEvent): void {
    // 阻止默认行为，防止页面滚动
    event.preventDefault();
    
    if (event.touches.length === 1 && this.isTouching) {
      // 单指移动 - 模拟鼠标移动
      const touch = event.touches[0];
      this.updatePointerPosition(touch.clientX, touch.clientY);
    } else if (event.touches.length === 2) {
      // 双指移动 - 处理缩放
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      this.touchZoomCurrent = Math.sqrt(dx * dx + dy * dy);
      
      // 计算缩放比例变化
      if (this.touchZoomStart > 0) {
        const zoomDelta = (this.touchZoomStart - this.touchZoomCurrent) * 0.05;
        
        // 应用缩放
        const currentZ = this.camera.position.z;
        const speedFactor = Math.max(1.0, currentZ / 20);
        
        const newZ = Math.max(
          this.MIN_ZOOM,
          Math.min(this.MAX_ZOOM, currentZ + zoomDelta * this.ZOOM_SPEED * speedFactor)
        );
        
        this.camera.position.z = newZ;
        
        // 更新缩放起始值，使缩放更平滑
        this.touchZoomStart = this.touchZoomCurrent;
      }
    }
  }
  
  /**
   * 处理触摸结束事件
   */
  private handleTouchEnd(event: TouchEvent): void {
    // 如果没有剩余的触摸点，重置触摸状态
    if (event.touches.length === 0) {
      this.isTouching = false;
      this.isMouseOverGrid = false;
      this.resetBulgeEffect();
    }
  }
  
  /**
   * 处理双击事件 - 产生爆炸效果
   */
  private handleDoubleTap(): void {
    // 检查点击冷却时间
    const currentTime = Date.now();
    if (currentTime - this.lastClickTime < this.CLICK_COOLDOWN) {
      console.log('MouseInteractionManager: 点击冷却中，忽略双击');
      return;
    }
    
    // 更新最后点击时间
    this.lastClickTime = currentTime;
    
    // 更新射线
    this.raycaster.setFromCamera(this.mouse, this.camera);
    
    // 计算射线与地平面的交点
    const intersects = this.raycaster.ray.intersectPlane(this.groundPlane, this.mouseWorldPos);
    
    if (intersects) {
      // 触发爆炸效果
      this.createExplosion();
      console.log('MouseInteractionManager: 双击触发爆炸效果，时间戳:', currentTime);
      
      // 添加触觉反馈（如果设备支持）
      this.provideTactileFeedback();
    }
  }
  
  /**
   * 提供触觉反馈（如果设备支持）
   */
  private provideTactileFeedback(): void {
    // 检查设备是否支持振动API
    if (this.isMobileDevice && 'vibrate' in navigator) {
      try {
        // 短暂振动以提供触觉反馈
        navigator.vibrate(50);
      } catch (e) {
        console.log('振动API不可用或被禁用');
      }
    }
  }
  
  /**
   * 更新指针（鼠标/触摸）位置
   */
  private updatePointerPosition(clientX: number, clientY: number): void {
    // 计算指针在归一化设备坐标中的位置
    const rect = this.domElement.getBoundingClientRect();
    this.mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    
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
    this.updatePointerPosition(event.clientX, event.clientY);
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