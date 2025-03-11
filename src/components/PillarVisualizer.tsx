import React, { useEffect, useRef, useState } from 'react';
import audioAnalyzer from '../core/AudioAnalyzer';
import PillarEffect from '../effects/PillarEffect';
import ControlPanel from './ControlPanel';

/**
 * 3D柱状图可视化组件
 * 基于原Processing项目实现
 */
const PillarVisualizer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const effectRef = useRef<PillarEffect | null>(null);
  
  // 初始化音频分析器
  useEffect(() => {
    const initAudio = async () => {
      try {
        const success = await audioAnalyzer.initialize();
        setIsInitialized(success);
        if (!success) {
          setError('无法初始化音频分析器');
        }
      } catch (err) {
        console.error('初始化音频时出错:', err);
        setError('初始化音频时出错');
      }
    };
    
    initAudio();
    
    // 组件卸载时清理资源
    return () => {
      audioAnalyzer.cleanup();
      if (effectRef.current) {
        effectRef.current.dispose();
      }
    };
  }, []);
  
  // 初始化3D效果
  useEffect(() => {
    if (!isInitialized || !containerRef.current) {
      console.log('未初始化或容器不存在', {isInitialized, container: containerRef.current});
      return;
    }
    
    console.log('正在初始化3D效果', containerRef.current);
    console.log('容器尺寸:', containerRef.current.clientWidth, containerRef.current.clientHeight);
    
    try {
      // 创建3D效果
      const effect = new PillarEffect(containerRef.current);
      effectRef.current = effect;
      
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
        console.log('窗口大小变化');
        if (effectRef.current) {
          try {
            effectRef.current.onWindowResize();
            console.log('重置大小完成');
          } catch (err) {
            console.error('调整大小时出错', err);
          }
        }
      };

      // 添加窗口大小变化事件监听
      window.addEventListener('resize', handleResize);
      
      // 在组件初始化后稍微延迟执行一次调整大小
      setTimeout(() => {
        handleResize();
        
        // 强制重新渲染一次
        if (effectRef.current) {
          try {
            effectRef.current.renderer.render(effectRef.current.scene, effectRef.current.camera);
            console.log('强制重新渲染完成');
          } catch (err) {
            console.error('强制渲染出错', err);
          }
        }
      }, 500);
      
      // 清理函数
      return () => {
        console.log('清理资源');
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
        if (effectRef.current) {
          effectRef.current.dispose();
        }
      };
    } catch (err) {
      console.error('3D效果初始化失败', err);
      setError('初始化3D效果时出错: ' + (err instanceof Error ? err.message : String(err)));
    }
  }, [isInitialized]);
  
  // 处理音频源变更
  const handleSourceChange = () => {
    setIsInitialized(true);
  };
  
  useEffect(() => {
    return () => {
      console.log('清理PillarVisualizer效果');
      try {
        if (effectRef.current) {
          effectRef.current.dispose();
          effectRef.current = null;
        }
      } catch (error) {
        console.error('清理PillarVisualizer效果时出错:', error);
      }
    };
  }, []);
  
  return (
    <div className="pillar-visualizer">
      {error ? (
        <div className="error-message">
          <p>{error}</p>
          <p>请确保您已授予麦克风访问权限</p>
        </div>
      ) : !isInitialized ? (
        <div className="loading-message">
          <p>正在初始化音频分析器...</p>
          <p>请允许麦克风访问权限</p>
        </div>
      ) : (
        <>
          <div 
            ref={containerRef} 
            className="pillar-visualizer-container"
          >
          </div>
          <ControlPanel onSourceChange={handleSourceChange} />
        </>
      )}
    </div>
  );
};

export default PillarVisualizer; 