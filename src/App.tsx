import React from 'react';
import './App.css'
import TopFacePillarVisualizer from './components/TopFacePillarVisualizer'

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>弦歌 | Lyra</h1>
        <p>一个以建筑方法诠释音乐的可视化玩具</p>
      </header>
      <div className="main-content">
        <TopFacePillarVisualizer />
      </div>
    </div>
  )
}

export default App
