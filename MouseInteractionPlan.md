# 鼠标互动效果开发计划文档

## 1. 概述

本计划旨在为"弦歌 | Lyra"音乐可视化项目添加鼠标互动效果，增强用户体验。所有新增功能将被封装在单独的文件中，不会修改现有的音乐可视化效果代码。

## 2. 技术架构

### 2.1 新增文件
- `src/interactions/MouseInteractionManager.ts` - 鼠标交互管理器
- `src/interactions/InteractionEffects.ts` - 交互效果实现
- `src/hooks/useMouseInteraction.ts` - React Hook 用于组件中集成鼠标交互
- `src/utils/ProcessManager.ts` - Windows环境下的进程管理工具

### 2.2 集成方式
- 通过 React Hook 方式集成到现有组件
- 使用事件系统与现有的 Three.js 场景交互
- 不直接修改现有的效果代码
- Windows 环境适配

## 3. 功能规划

### 3.1 基础交互功能
1. **缩放控制**
   - 鼠标滚轮控制场景缩放
   - 双指触控支持（针对触摸设备）

2. **悬停高亮**（仅在静音状态和暂停状态下）
   - 鼠标悬停在特定柱体上时模拟音频输入效果
   - 目标柱体高度设置为5个单位
   - 周围柱体形成抛物面鼓包效果
   - 保持原有顶面抛掷效果
   - 显示频率区域信息

### 3.2 高级交互功能
1. **交互式波纹效果**
   - 点击场景产生波纹扩散效果
   - 点击位置产生橙色闪光
   - 波纹最高点不超过5个单位高度
   - 波长参照低频区扩散波长

## 4. 技术实现

### 4.1 MouseInteractionManager 类设计
```typescript
class MouseInteractionManager {
  private scene: THREE.Scene;
  private camera: THREE.Camera;
  private renderer: THREE.WebGLRenderer;
  private domElement: HTMLElement;
  private effects: InteractionEffects;
  private audioState: {
    isMuted: boolean;
    isPaused: boolean;
  };
  
  // 鼠标状态
  private mousePosition: { x: number, y: number };
  private isMouseDown: boolean;
  private isDragging: boolean;
  private raycaster: THREE.Raycaster;
  
  constructor(scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer, domElement: HTMLElement) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.domElement = domElement;
    this.effects = new InteractionEffects(scene);
    this.raycaster = new THREE.Raycaster();
    
    this.initializeState();
    this.addEventListeners();
  }
  
  private initializeState(): void {
    this.mousePosition = { x: 0, y: 0 };
    this.isMouseDown = false;
    this.isDragging = false;
    this.audioState = {
      isMuted: false,
      isPaused: false
    };
  }
  
  // 事件监听器
  private addEventListeners(): void {
    this.domElement.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.domElement.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.domElement.addEventListener('mouseup', this.handleMouseUp.bind(this));
    this.domElement.addEventListener('wheel', this.handleWheel.bind(this));
    this.domElement.addEventListener('touchstart', this.handleTouchStart.bind(this));
    this.domElement.addEventListener('touchmove', this.handleTouchMove.bind(this));
    this.domElement.addEventListener('touchend', this.handleTouchEnd.bind(this));
  }
  
  // 交互处理方法
  private handleMouseMove(event: MouseEvent): void {
    this.mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    if (this.audioState.isMuted || this.audioState.isPaused) {
      this.handleHoverEffect();
    }
  }
  
  private handleHoverEffect(): void {
    this.raycaster.setFromCamera(this.mousePosition, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children);
    
    if (intersects.length > 0) {
      const targetPillar = intersects[0].object;
      this.effects.createParabolicBulge(targetPillar.position, 5);
    }
  }
  
  private handleMouseDown(event: MouseEvent): void {
    this.isMouseDown = true;
    this.effects.createRippleEffect(this.mousePosition, {
      maxHeight: 5,
      color: 0xFFA500, // 橙色
      wavelength: this.effects.getLowFrequencyWavelength()
    });
  }
  
  // 缩放控制
  private handleWheel(event: WheelEvent): void {
    const zoomSpeed = 0.1;
    const delta = event.deltaY > 0 ? 1 : -1;
    this.camera.position.z = Math.max(5, Math.min(50, this.camera.position.z + delta * zoomSpeed));
  }
  
  // 触摸设备支持
  private handleTouchStart(event: TouchEvent): void {
    if (event.touches.length === 2) {
      this.handlePinchStart(event);
    }
  }
  
  // 更新方法
  public update(audioData: Uint8Array, beatDetected: boolean): void {
    this.effects.update(audioData, beatDetected);
  }
  
  public setAudioState(isMuted: boolean, isPaused: boolean): void {
    this.audioState.isMuted = isMuted;
    this.audioState.isPaused = isPaused;
  }
  
  public dispose(): void {
    // 清理事件监听器和资源
    this.domElement.removeEventListener('mousemove', this.handleMouseMove);
    this.domElement.removeEventListener('mousedown', this.handleMouseDown);
    this.domElement.removeEventListener('mouseup', this.handleMouseUp);
    this.domElement.removeEventListener('wheel', this.handleWheel);
    this.effects.dispose();
  }
}
```

### 4.2 InteractionEffects 类设计
```typescript
class InteractionEffects {
  private scene: THREE.Scene;
  private pillarMeshes: THREE.Mesh[];
  private originalHeights: Map<string, number>;
  private springSystem: SpringSystem;
  
  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.pillarMeshes = [];
    this.originalHeights = new Map();
    this.springSystem = new SpringSystem({
      stiffness: 0.3,
      damping: 0.7
    });
    
    this.initializePillars();
  }
  
  private initializePillars(): void {
    // 初始化柱体网格和原始高度
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh && object.userData.isPillar) {
        this.pillarMeshes.push(object);
        this.originalHeights.set(object.uuid, object.scale.y);
      }
    });
  }
  
  public createParabolicBulge(center: THREE.Vector3, maxHeight: number): void {
    const bulgeRadius = 2; // 鼓包影响半径
    
    this.pillarMeshes.forEach((pillar) => {
      const distance = center.distanceTo(pillar.position);
      if (distance <= bulgeRadius) {
        const height = maxHeight * (1 - (distance / bulgeRadius) ** 2);
        this.springSystem.setTarget(pillar.uuid, height);
      }
    });
  }
  
  public createRippleEffect(position: THREE.Vector2, options: {
    maxHeight: number;
    color: number;
    wavelength: number;
  }): void {
    // 创建点击闪光效果
    const flash = new THREE.PointLight(options.color, 1, 10);
    flash.position.set(position.x * 10, position.y * 10, 5);
    this.scene.add(flash);
    
    // 创建波纹动画
    const ripple = {
      center: new THREE.Vector3(position.x * 10, position.y * 10, 0),
      radius: 0,
      maxRadius: 20,
      speed: 0.5,
      wavelength: options.wavelength
    };
    
    this.animateRipple(ripple, options.maxHeight);
  }
  
  private animateRipple(ripple: any, maxHeight: number): void {
    const animate = () => {
      ripple.radius += ripple.speed;
      
      this.pillarMeshes.forEach((pillar) => {
        const distance = pillar.position.distanceTo(ripple.center);
        const phase = (distance / ripple.wavelength) * Math.PI * 2;
        const amplitude = Math.max(0, maxHeight * (1 - ripple.radius / ripple.maxRadius));
        
        if (distance <= ripple.radius) {
          const height = amplitude * Math.sin(phase);
          this.springSystem.setTarget(pillar.uuid, height);
        }
      });
      
      if (ripple.radius < ripple.maxRadius) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }
  
  public update(audioData: Uint8Array, beatDetected: boolean): void {
    this.springSystem.update();
    this.pillarMeshes.forEach((pillar) => {
      const targetHeight = this.springSystem.getCurrentValue(pillar.uuid);
      pillar.scale.y = targetHeight;
    });
  }
  
  public getLowFrequencyWavelength(): number {
    // 返回低频区的波长参数
    return 4;
  }
  
  public dispose(): void {
    // 清理资源
    this.springSystem.dispose();
  }
}
```

### 4.3 ProcessManager 类设计（Windows环境）
```typescript
class ProcessManager {
  private static readonly DEFAULT_PORT = 5173;
  
  public static async checkAndStartServer(): Promise<void> {
    try {
      // 检查默认端口是否被占用
      const isPortInUse = await this.checkPort(this.DEFAULT_PORT);
      
      if (isPortInUse) {
        // 终止占用端口的进程
        await this.killProcessOnPort(this.DEFAULT_PORT);
      }
      
      // 启动新服务
      await this.startDevServer();
    } catch (error) {
      console.error('服务器启动失败:', error);
      throw error;
    }
  }
  
  private static async checkPort(port: number): Promise<boolean> {
    return new Promise((resolve) => {
      const netstat = require('child_process').exec(
        `netstat -ano | findstr :${port}`,
        (error: any, stdout: string) => {
          resolve(!!stdout);
        }
      );
    });
  }
  
  private static async killProcessOnPort(port: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const cmd = require('child_process').exec(
        `for /f "tokens=5" %a in ('netstat -aon ^| findstr :${port}') do taskkill /F /PID %a`,
        (error: any) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });
  }
  
  private static async startDevServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      const npm = require('child_process').spawn('npm', ['run', 'dev'], {
        stdio: 'inherit',
        shell: true
      });
      
      npm.on('error', reject);
      npm.on('close', (code: number) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Server exited with code ${code}`));
        }
      });
    });
  }
}
```

### 4.4 React Hook 实现
```typescript
function useMouseInteraction(
  containerRef: React.RefObject<HTMLElement>,
  sceneRef: React.RefObject<THREE.Scene>,
  cameraRef: React.RefObject<THREE.Camera>,
  rendererRef: React.RefObject<THREE.WebGLRenderer>,
  audioState: { isMuted: boolean; isPaused: boolean }
) {
  const interactionManagerRef = useRef<MouseInteractionManager | null>(null);
  
  useEffect(() => {
    if (!containerRef.current || !sceneRef.current || !cameraRef.current || !rendererRef.current) {
      return;
    }
    
    // 创建交互管理器
    const interactionManager = new MouseInteractionManager(
      sceneRef.current,
      cameraRef.current,
      rendererRef.current,
      containerRef.current
    );
    
    interactionManagerRef.current = interactionManager;
    
    // 返回清理函数
    return () => {
      if (interactionManagerRef.current) {
        interactionManagerRef.current.dispose();
      }
    };
  }, [containerRef, sceneRef, cameraRef, rendererRef]);
  
  // 更新音频状态
  useEffect(() => {
    if (interactionManagerRef.current) {
      interactionManagerRef.current.setAudioState(audioState.isMuted, audioState.isPaused);
    }
  }, [audioState]);
  
  return interactionManagerRef.current;
}
```

## 5. 集成计划

[原有内容保持不变...]



