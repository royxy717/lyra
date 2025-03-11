import React, { useEffect, useRef, useState } from 'react';
import audioAnalyzer from '../core/AudioAnalyzer';

/**
 * 音频可视化组件
 * 显示音频频谱
 */
const Visualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
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
    };
  }, []);
  
  // 绘制频谱
  useEffect(() => {
    if (!isInitialized) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // 设置画布尺寸
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // 动画帧ID
    let animationId: number;
    
    // 绘制函数
    const draw = () => {
      // 获取频率数据
      const dataArray = audioAnalyzer.getFrequencyData();
      if (!dataArray) return;
      
      const bufferLength = audioAnalyzer.getBufferLength();
      
      // 清空画布
      ctx.fillStyle = 'rgb(20, 20, 30)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 计算条形宽度
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;
      
      // 绘制频谱条形图
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * 2;
        
        // 根据频率创建渐变色
        const r = 150 + (dataArray[i] / 2);
        const g = 50 + (dataArray[i] / 4);
        const b = 200;
        
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        
        x += barWidth + 1;
      }
      
      // 请求下一帧
      animationId = requestAnimationFrame(draw);
    };
    
    // 开始动画
    draw();
    
    // 清理函数
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isInitialized]);
  
  return (
    <div className="visualizer-container">
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
        <canvas 
          ref={canvasRef} 
          className="visualizer-canvas"
        />
      )}
    </div>
  );
};

export default Visualizer; 