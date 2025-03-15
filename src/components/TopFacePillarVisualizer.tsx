import React, { useEffect, useRef, useState } from 'react';
import audioAnalyzer from '../core/AudioAnalyzer';
import { TopFacePillarEffect } from '../effects/TopFacePillarEffect';
import ControlPanel from './ControlPanel';
import { useMouseInteraction } from '../hooks/useMouseInteraction';
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

/**
 * 3D顶面柱状图可视化组件
 * 使用只有顶面的柱体，实现消隐效果
 */
const TopFacePillarVisualizer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(true); // 默认为 true，不显示初始化提示
  const [error, setError] = useState<string | null>(null);
  const effectRef = useRef<TopFacePillarEffect | null>(null);
  const [audioInitialized, setAudioInitialized] = useState(false);
  
  // 新增：Three.js 对象的引用
  const sceneRef = useRef<Scene | null>(null);
  const cameraRef = useRef<PerspectiveCamera | null>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  
  // 初始化音频环境
  useEffect(() => {
    const initAudio = async () => {
      try {
        // 自动初始化音频分析器（使用静音音频）
        const success = await audioAnalyzer.autoInitialize();
        if (success) {
          console.log('音频环境自动初始化成功');
          setAudioInitialized(true);
        } else {
          console.error('音频环境自动初始化失败');
        }
      } catch (error) {
        console.error('初始化音频环境时出错:', error);
      }
    };
    
    initAudio();
    
    // 组件卸载时清理
    return () => {
      // 不要在这里清理音频分析器，因为它可能被其他组件使用
    };
  }, []);
  
  // 初始化3D效果
  useEffect(() => {
    if (!containerRef.current) {
      console.log('容器不存在');
      return;
    }
    
    console.log('正在初始化3D顶面效果', containerRef.current);
    
    try {
      // 创建3D效果
      const effect = new TopFacePillarEffect(containerRef.current);
      effectRef.current = effect;
      
      // 保存Three.js对象引用
      sceneRef.current = effect.getScene();
      cameraRef.current = effect.getCamera();
      rendererRef.current = effect.getRenderer();
      
      // 初始化并启动效果
      effect.initialize();
      effect.start();
      
      // 创建动画循环
      let animationId: number;
      
      const updateVisualization = () => {
        try {
          // 获取频率数据
          const frequencyData = audioAnalyzer.getFrequencyData();
          const beatDetected = audioAnalyzer.isBeat();
          
          if (frequencyData) {
            // 更新效果
            effect.updateAudioData(frequencyData, beatDetected);
          }
          
          // 请求下一帧
          animationId = requestAnimationFrame(updateVisualization);
        } catch (err) {
          console.error('可视化更新错误', err);
        }
      };
      
      // 开始动画
      updateVisualization();
      
      // 处理窗口大小变化
      const handleResize = () => {
        if (effectRef.current) {
          try {
            effectRef.current.onWindowResize();
          } catch (err) {
            console.error('调整大小时出错', err);
          }
        }
      };
      
      window.addEventListener('resize', handleResize);
      
      // 清理函数
      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
        if (effectRef.current) {
          effectRef.current.dispose();
        }
      };
    } catch (err) {
      console.error('初始化3D效果时出错:', err);
      setError('初始化3D效果时出错');
    }
  }, []);
  
  // 使用鼠标交互 Hook
  useMouseInteraction(
    containerRef as React.RefObject<HTMLElement>,
    sceneRef,
    cameraRef,
    rendererRef
  );
  
  // 处理音频源改变
  const handleSourceChange = () => {
    setIsInitialized(true);
    setError(null);
  };
  
  return (
    <div className="pillar-visualizer">
      {error ? (
        <div className="error-message">
          <p>{error}</p>
        </div>
      ) : (
        <>
          <div 
            ref={containerRef} 
            className="pillar-visualizer-container"
          />
          <ControlPanel onSourceChange={handleSourceChange} />
        </>
      )}
    </div>
  );
};

export default TopFacePillarVisualizer; 