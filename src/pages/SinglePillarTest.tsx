import React, { useEffect, useRef, useState } from 'react';
import { SinglePillar } from '../effects/SinglePillar';
import * as THREE from 'three';
import './SinglePillarTest.css';

/**
 * 单柱体测试页面
 * 展示如何使用SinglePillar组件及其可重用特性
 */
const SinglePillarTest: React.FC = () => {
  // 引用容器元素
  const containerRef = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);
  
  // 引用效果实例
  const [_pillar1, setPillar1] = useState<SinglePillar | null>(null);
  const [_pillar2, setPillar2] = useState<SinglePillar | null>(null);
  
  // 控制面板状态
  const [sideColor, setSideColor] = useState<string>('#808080');
  const [topColor, setTopColor] = useState<string>('#00AAFF');
  const [width, setWidth] = useState<number>(1.8);
  const [height, setHeight] = useState<number>(1.8);
  const [depth, setDepth] = useState<number>(4);
  
  // 初始化效果
  useEffect(() => {
    if (containerRef.current && container2Ref.current) {
      console.log('初始化单柱体效果');
      
      // 创建第一个柱体实例
      const effect1 = new SinglePillar(containerRef.current, {
        width: width,
        height: height,
        depth: depth,
        sideColor: sideColor,
        topColor: topColor
      });
      effect1.start();
      setPillar1(effect1);
      
      // 创建第二个柱体实例（克隆第一个）
      const effect2 = effect1.clone(container2Ref.current, {
        // 可以覆盖一些属性
        position: new THREE.Vector3(0, 0, 0),
        rotation: new THREE.Euler(0, 0, Math.PI / 4) // 旋转45度
      });
      effect2.start();
      setPillar2(effect2);
      
      // 清理函数
      return () => {
        console.log('清理单柱体效果');
        effect1.dispose();
        effect2.dispose();
      };
    }
  }, []);
  
  // 更新所有实例的属性
  const updateAllInstances = (property: string, value: any) => {
    SinglePillar.updateAllInstances(property, value);
  };
  
  // 处理侧面颜色变化
  const handleSideColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setSideColor(newColor);
    updateAllInstances('sideColor', newColor);
  };
  
  // 处理顶面颜色变化
  const handleTopColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setTopColor(newColor);
    updateAllInstances('topColor', newColor);
  };
  
  // 处理宽度变化
  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = parseFloat(e.target.value);
    setWidth(newWidth);
    updateAllInstances('width', newWidth);
  };
  
  // 处理高度变化
  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = parseFloat(e.target.value);
    setHeight(newHeight);
    updateAllInstances('height', newHeight);
  };
  
  // 处理深度变化
  const handleDepthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDepth = parseFloat(e.target.value);
    setDepth(newDepth);
    updateAllInstances('depth', newDepth);
  };

  return (
    <div className="single-pillar-page">
      <div className="pillars-container">
        <div className="pillar-wrapper">
          <h3>柱体实例 1</h3>
          <div className="single-pillar-container" ref={containerRef}></div>
        </div>
        <div className="pillar-wrapper">
          <h3>柱体实例 2 (克隆并旋转45度)</h3>
          <div className="single-pillar-container" ref={container2Ref}></div>
        </div>
      </div>
      
      <div className="control-panel">
        <h2>组件控制面板</h2>
        <p>修改这些属性将同时更新所有柱体实例</p>
        
        <div className="control-group">
          <label>
            侧面颜色:
            <input 
              type="color" 
              value={sideColor} 
              onChange={handleSideColorChange} 
            />
          </label>
        </div>
        
        <div className="control-group">
          <label>
            顶面颜色:
            <input 
              type="color" 
              value={topColor} 
              onChange={handleTopColorChange} 
            />
          </label>
        </div>
        
        <div className="control-group">
          <label>
            宽度:
            <input 
              type="range" 
              min="0.5" 
              max="5" 
              step="0.1" 
              value={width} 
              onChange={handleWidthChange} 
            />
            <span>{width.toFixed(1)}</span>
          </label>
        </div>
        
        <div className="control-group">
          <label>
            高度:
            <input 
              type="range" 
              min="0.5" 
              max="5" 
              step="0.1" 
              value={height} 
              onChange={handleHeightChange} 
            />
            <span>{height.toFixed(1)}</span>
          </label>
        </div>
        
        <div className="control-group">
          <label>
            深度:
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="0.5" 
              value={depth} 
              onChange={handleDepthChange} 
            />
            <span>{depth.toFixed(1)}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SinglePillarTest; 