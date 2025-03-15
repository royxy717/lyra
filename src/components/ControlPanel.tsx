import React, { useState, useRef, useEffect } from 'react';
import audioAnalyzer from '../core/AudioAnalyzer';

interface ControlPanelProps {
  onSourceChange: () => void;
  visualizerRef?: React.RefObject<HTMLDivElement | null>;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onSourceChange, visualizerRef }) => {
  const [audioSource, setAudioSource] = useState<'none' | 'mic' | 'file' | 'demo'>('none');
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
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
  
  // 使用示例音频
  const useDemoAudio = async () => {
    if (audioSource === 'demo') return;
    
    setIsLoading(true);
    setError(null);
    try {
      // 清理当前音频分析器
      audioAnalyzer.cleanup();
      
      // 初始化示例音频
      const success = await audioAnalyzer.initializeWithAudio('/demo_music.mp3');
      if (!success) {
        throw new Error('无法加载示例音频文件');
      }
      
      setAudioSource('demo');
      setFileName('示例音乐 (demo_music.mp3)');
      setIsPaused(false);
      onSourceChange();
    } catch (error) {
      console.error('加载示例音频时出错:', error);
      setError('无法加载示例音频文件');
      setAudioSource('none');
    } finally {
      setIsLoading(false);
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
            示例
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
            
            <button 
              className="play-pause-button"
              onClick={togglePlayPause}
              disabled={audioSource !== 'file' && audioSource !== 'demo'}
            >
              {isPaused ? '▶️ 播放' : '⏸️ 暂停'}
            </button>
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
        <p>提示: 如果使用麦克风，请播放音乐并确保麦克风能够捕获到声音。</p>
        <p>如果使用音频文件，请选择一个音频文件进行播放。</p>
        <p>示例选项使用内置的音乐文件。</p>
      </div>
    </div>
  );
};

export default ControlPanel; 