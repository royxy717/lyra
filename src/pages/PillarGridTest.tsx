import React, { useEffect, useRef, useState } from 'react';
import { PillarGrid } from '../effects/PillarGrid';
import './PillarGridTest.css';

/**
 * 柱体网格测试页面
 * 展示柱体网格
 */
const PillarGridTest: React.FC = () => {
  // 引用容器元素
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 引用效果实例
  const [grid, setGrid] = useState<PillarGrid | null>(null);
  
  // 控制面板状态
  const [animationEnabled, setAnimationEnabled] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // 初始化效果
  useEffect(() => {
    console.log('PillarGridTest组件挂载');
    if (!containerRef.current) {
      console.error('容器元素不存在');
      setError('容器元素不存在');
      setLoading(false);
      return;
    }
    
    console.log('初始化柱体网格效果');
    setLoading(true);
    
    try {
      // 创建网格实例
      console.log('创建PillarGrid实例');
      const gridEffect = new PillarGrid(containerRef.current);
      
      console.log('启动PillarGrid');
      gridEffect.start();
      
      setGrid(gridEffect);
      setLoading(false);
      
      // 清理函数
      return () => {
        console.log('清理柱体网格效果');
        try {
          gridEffect.dispose();
        } catch (error) {
          console.error('清理PillarGrid时出错:', error);
        }
      };
    } catch (error) {
      console.error('创建PillarGrid时出错:', error);
      setError(`创建网格时出错: ${error instanceof Error ? error.message : String(error)}`);
      setLoading(false);
    }
  }, []);
  
  // 处理动画开关
  const handleAnimationToggle = () => {
    if (!grid) return;
    
    try {
      if (animationEnabled) {
        grid.stop();
      } else {
        grid.start();
      }
      
      setAnimationEnabled(!animationEnabled);
    } catch (error) {
      console.error('切换动画状态时出错:', error);
      setError(`切换动画状态时出错: ${error instanceof Error ? error.message : String(error)}`);
    }
  };
  
  // 处理随机高度按钮
  const handleRandomHeights = () => {
    if (!grid) return;
    
    try {
      grid.setRandomHeights();
    } catch (error) {
      console.error('设置随机高度时出错:', error);
      setError(`设置随机高度时出错: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <div className="pillar-grid-page">
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>正在加载柱体网格...</p>
        </div>
      )}
      
      {error && (
        <div className="error-message">
          <h3>出错了</h3>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>刷新页面</button>
        </div>
      )}
      
      <div className="grid-container" ref={containerRef}></div>
      
      <div className="control-panel">
        <h2>柱体网格 (20x20)</h2>
        
        <div className="control-group">
          <button onClick={handleAnimationToggle} disabled={!grid}>
            {animationEnabled ? '停止动画' : '开始动画'}
          </button>
          
          <button onClick={handleRandomHeights} disabled={!grid}>
            随机高度
          </button>
        </div>
        
        <div className="info">
          <p>使用SinglePillar组件构建的柱体网格</p>
          <p>初始高度设置为0，波浪动画展示高度变化效果</p>
        </div>
      </div>
    </div>
  );
};

export default PillarGridTest; 