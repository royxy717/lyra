import React, { useState, useRef, useEffect } from 'react';
import audioAnalyzer from '../core/AudioAnalyzer';

interface ControlPanelProps {
  onSourceChange: () => void;
  visualizerRef: React.RefObject<HTMLDivElement>;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onSourceChange, visualizerRef }) => {
  const [audioSource, setAudioSource] = useState<'none' | 'mic' | 'file' | 'demo'>('none');
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // 添加示例音乐列表
  const demoMusicList = [
    { name: '电台音乐1', file: '/demo_music/demo1.mp3' },
    { name: '电台音乐2', file: '/demo_music/demo2.mp3' },
    { name: '电台音乐3', file: '/demo_music/demo3.mp3' },
    { name: '电台音乐4', file: '/demo_music/demo4.mp3' },
    { name: '电台音乐5', file: '/demo_music/demo5.mp3' },
  ];
  const [currentDemoIndex, setCurrentDemoIndex] = useState(0);
  
  // 检查播放状态
  useEffect(() => {
    const checkPauseStatus = () => {
      setIsPaused(audioAnalyzer.getIsPaused());
    };
    
    // 初始检查
    checkPauseStatus();
    
    // 设置定时器定期检查
    const intervalId = setInterval(checkPauseStatus, 500);
    
    // 组件卸载时清理
    return () => {
      clearInterval(intervalId);
      // 清理音频分析器
      audioAnalyzer.cleanup();
    };
  }, []);
  
  // 监听全屏变化事件
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  
  // 添加键盘事件监听，使空格键可以控制音乐播放暂停
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // 如果按下空格键，且音频源是文件或示例音乐
      if (event.code === 'Space' && (audioSource === 'file' || audioSource === 'demo')) {
        // 防止空格键触发页面滚动或其他默认行为
        event.preventDefault();
        
        // 切换播放/暂停状态
        togglePlayPause();
      }
    };
    
    // 添加键盘事件监听
    document.addEventListener('keydown', handleKeyDown);
    
    // 组件卸载时移除事件监听
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [audioSource]); // 依赖于 audioSource，确保在音频源变化时重新设置监听器
  
  // 切换到麦克风输入
  const switchToMic = async () => {
    if (audioSource === 'mic') return;
    
    setIsLoading(true);
    setError(null);
    try {
      // 清理当前音频分析器
      audioAnalyzer.cleanup();
      
      // 先请求麦克风权限
      const hasPermission = await audioAnalyzer.requestMicrophonePermission();
      if (!hasPermission) {
        throw new Error('无法获取麦克风权限');
      }

      // 初始化麦克风
      const success = await audioAnalyzer.initialize();
      if (!success) {
        throw new Error('无法初始化麦克风');
      }
      
      setAudioSource('mic');
      setFileName(null);
      setIsPaused(false);
      onSourceChange();
    } catch (error) {
      console.error('切换到麦克风时出错:', error);
      setError('无法访问麦克风，请确保已授予权限');
      setAudioSource('none');
    } finally {
      setIsLoading(false);
    }
  };
  
  // 处理文件上传
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    setFileName(file.name);
    
    setIsLoading(true);
    setError(null);
    try {
      // 清理当前音频分析器
      audioAnalyzer.cleanup();
      
      // 创建文件URL
      const fileUrl = URL.createObjectURL(file);
      
      // 初始化音频文件
      const success = await audioAnalyzer.initializeWithAudio(fileUrl);
      if (!success) {
        throw new Error('无法加载音频文件');
      }
      
      setAudioSource('file');
      setIsPaused(false);
      onSourceChange();
    } catch (error) {
      console.error('加载音频文件时出错:', error);
      setError('无法加载音频文件');
      setAudioSource('none');
    } finally {
      setIsLoading(false);
    }
  };
  
  // 修改使用示例音频的函数
  const useDemoAudio = async () => {
    if (audioSource === 'demo') return;
    
    setIsLoading(true);
    setError(null);
    try {
      // 清理当前音频分析器
      audioAnalyzer.cleanup();
      
      // 初始化示例音频
      const success = await audioAnalyzer.initializeWithAudio(demoMusicList[currentDemoIndex].file);
      if (!success) {
        throw new Error('无法加载示例音频文件');
      }
      
      setAudioSource('demo');
      setFileName(`${demoMusicList[currentDemoIndex].name}`);
      setIsPaused(false);
      onSourceChange();

      // 添加音频结束事件监听器
      const audioElement = audioAnalyzer.getAudioElement();
      if (audioElement) {
        audioElement.onended = () => {
          // 播放下一首
          playNextDemo();
        };
      }
    } catch (error: any) {
      console.error('加载示例音频时出错:', error);
      setError('无法加载示例音频文件');
      setAudioSource('none');
    } finally {
      setIsLoading(false);
    }
  };
  
  // 添加播放下一首示例音乐的函数
  const playNextDemo = async () => {
    // 先暂停并清理当前音频，防止两首歌同时播放
    if (audioAnalyzer.getAudioElement()) {
      audioAnalyzer.getAudioElement()!.pause();
      audioAnalyzer.cleanup();
    }
    
    const nextIndex = (currentDemoIndex + 1) % demoMusicList.length;
    setCurrentDemoIndex(nextIndex);
    
    try {
      const success = await audioAnalyzer.initializeWithAudio(demoMusicList[nextIndex].file);
      if (success) {
        setFileName(`${demoMusicList[nextIndex].name}`);
        const audioElement = audioAnalyzer.getAudioElement();
        if (audioElement) {
          audioElement.onended = () => {
            playNextDemo();
          };
        }
      }
    } catch (error: any) {
      console.error('切换下一首示例音乐时出错:', error);
    }
  };
  
  // 添加播放上一首示例音乐的函数
  const playPreviousDemo = async () => {
    // 先暂停并清理当前音频，防止两首歌同时播放
    if (audioAnalyzer.getAudioElement()) {
      audioAnalyzer.getAudioElement()!.pause();
      audioAnalyzer.cleanup();
    }
    
    const prevIndex = (currentDemoIndex - 1 + demoMusicList.length) % demoMusicList.length;
    setCurrentDemoIndex(prevIndex);
    
    try {
      const success = await audioAnalyzer.initializeWithAudio(demoMusicList[prevIndex].file);
      if (success) {
        setFileName(`${demoMusicList[prevIndex].name}`);
        const audioElement = audioAnalyzer.getAudioElement();
        if (audioElement) {
          audioElement.onended = () => {
            playNextDemo();
          };
        }
      }
    } catch (error: any) {
      console.error('切换上一首示例音乐时出错:', error);
    }
  };
  
  // 触发文件选择对话框
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  // 切换播放/暂停
  const togglePlayPause = () => {
    if (audioAnalyzer.getSourceType() === 'file') {
      const newPauseState = audioAnalyzer.togglePlayPause();
      setIsPaused(newPauseState);
    }
  };
  
  // 切换全屏
  const toggleFullscreen = () => {
    if (!visualizerRef || !visualizerRef.current) return;
    
    try {
      if (!document.fullscreenElement) {
        // 进入全屏
        visualizerRef.current.requestFullscreen().catch(err => {
          console.error(`无法进入全屏模式: ${err.message}`);
        });
      } else {
        // 退出全屏
        document.exitFullscreen();
      }
    } catch (error) {
      console.error('切换全屏时出错:', error);
    }
  };
  
  return (
    <div className="control-panel">
      <div className="source-selector">
        <h3>音频源</h3>
        <div className="source-buttons">
          <button 
            className={`source-button ${audioSource === 'mic' ? 'active' : ''}`}
            onClick={switchToMic}
            disabled={isLoading || audioSource === 'mic'}
          >
            麦克风
          </button>
          
          <button 
            className={`source-button ${audioSource === 'file' ? 'active' : ''}`}
            onClick={triggerFileInput}
            disabled={isLoading}
          >
            上传
          </button>
          
          <button 
            className={`source-button ${audioSource === 'demo' ? 'active' : ''}`}
            onClick={useDemoAudio}
            disabled={isLoading || audioSource === 'demo'}
          >
            电台
          </button>
          
          <input 
            type="file" 
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="audio/*"
            onChange={handleFileUpload}
          />
        </div>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {(audioSource === 'file' || audioSource === 'demo') && fileName && (
          <div className="file-info">
            <div className="file-name">
              当前文件: {fileName}
            </div>
            
            <div className="playback-controls">
              {audioSource === 'demo' && (
                <button 
                  className="nav-button prev-button"
                  onClick={playPreviousDemo}
                  disabled={isLoading}
                >
                  ⏮️
                </button>
              )}
              
              <button 
                className="play-pause-button"
                onClick={togglePlayPause}
                disabled={audioSource !== 'file' && audioSource !== 'demo'}
              >
                {isPaused ? '▶️' : '⏸️'}
              </button>
              
              {audioSource === 'demo' && (
                <button 
                  className="nav-button next-button"
                  onClick={playNextDemo}
                  disabled={isLoading}
                >
                  ⏭️
                </button>
              )}
            </div>
          </div>
        )}
        
        {isLoading && (
          <div className="loading-indicator">
            加载中...
          </div>
        )}
      </div>
      
      <div className="fullscreen-control">
        <button 
          className="fullscreen-button"
          onClick={toggleFullscreen}
          title={isFullscreen ? '退出全屏' : '进入全屏'}
        >
          {isFullscreen ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
                <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
              </svg>
              退出全屏
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
                <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
              </svg>
              进入全屏
            </>
          )}
        </button>
      </div>
      
      <div className="instructions">
        <p>本期弦歌电台歌单，下面是1-5首demo音乐的曲名：</p>
        <ul className="demo-music-list">
          {demoMusicList.map((music, index) => (
            <li key={index} className={currentDemoIndex === index ? 'active' : ''}>
              {music.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ControlPanel; 