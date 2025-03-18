import { useEffect, useRef } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import { MouseInteractionManager } from '../interactions/MouseInteractionManager';

/**
 * 鼠标交互 Hook
 * 当前版本仅实现滚轮缩放功能
 */
export function useMouseInteraction(
  containerRef: React.RefObject<HTMLDivElement>,
  sceneRef: React.RefObject<Scene | null>,
  cameraRef: React.RefObject<PerspectiveCamera | null>,
  rendererRef: React.RefObject<WebGLRenderer | null>
) {
  const interactionManagerRef = useRef<MouseInteractionManager | null>(null);
  
  useEffect(() => {
    // 确保所有必要的引用都存在
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
    
    // 清理函数
    return () => {
      if (interactionManagerRef.current) {
        interactionManagerRef.current.dispose();
      }
    };
  }, [containerRef, sceneRef, cameraRef, rendererRef]);
  
  return interactionManagerRef.current;
} 