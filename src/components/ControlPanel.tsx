import React, { useState, useRef, useEffect } from 'react';
import audioAnalyzer from '../core/AudioAnalyzer';

interface ControlPanelProps {
  onSourceChange: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onSourceChange }) => {
  const [audioSource, setAudioSource] = useState<'mic' | 'file' | 'demo'>('mic');
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
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
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  // 切换到麦克风输入
  const switchToMic = async () => {
    if (audioSource === 'mic') return;
    
    setIsLoading(true);
    try {
      // 清理当前音频分析器
      audioAnalyzer.cleanup();
      
      // 初始化麦克风
      await audioAnalyzer.initialize();
      
      setAudioSource('mic');
      setFileName(null);
      setIsPaused(false);
      onSourceChange();
    } catch (error) {
      console.error('切换到麦克风时出错:', error);
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
    try {
      // 清理当前音频分析器
      audioAnalyzer.cleanup();
      
      // 创建文件URL
      const fileUrl = URL.createObjectURL(file);
      
      // 初始化音频文件
      await audioAnalyzer.initializeWithAudio(fileUrl);
      
      setAudioSource('file');
      setIsPaused(false);
      onSourceChange();
    } catch (error) {
      console.error('加载音频文件时出错:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // 使用示例音频
  const useDemoAudio = async () => {
    if (audioSource === 'demo') return;
    
    setIsLoading(true);
    try {
      // 清理当前音频分析器
      audioAnalyzer.cleanup();
      
      // 初始化示例音频 - 使用public目录中的demo_music.mp3文件
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
      alert('无法加载示例音频文件。请确保demo_music.mp3文件存在于public目录中。');
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
      
      <div className="instructions">
        <p>提示: 如果使用麦克风，请播放音乐并确保麦克风能够捕获到声音。</p>
        <p>如果使用音频文件，请选择一个音频文件进行播放。</p>
        <p>示例选项使用内置的音乐文件。</p>
      </div>
    </div>
  );
};

export default ControlPanel; 