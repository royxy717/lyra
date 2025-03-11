import React, { useEffect } from 'react';
import './App.css'
import TopFacePillarVisualizer from './components/TopFacePillarVisualizer'
import audioAnalyzer from './core/AudioAnalyzer'

const App: React.FC = () => {
  // 添加页面关闭时的清理逻辑
  useEffect(() => {
    const cleanup = () => {
      audioAnalyzer.cleanup();
    };

    // 添加页面关闭事件监听
    window.addEventListener('beforeunload', cleanup);
    window.addEventListener('unload', cleanup);

    return () => {
      cleanup();
      window.removeEventListener('beforeunload', cleanup);
      window.removeEventListener('unload', cleanup);
    };
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>弦歌 | Lyra</h1>
        <p>尽情探索音乐的建筑之美</p>
      </header>
      <div className="main-content">
        <TopFacePillarVisualizer />
      </div>
    </div>
  )
}

export default App
