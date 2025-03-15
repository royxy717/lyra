/**
 * 音频分析器类
 * 负责捕获和分析音频数据
 */
import { BeatDetector } from './BeatDetector';

class AudioAnalyzer {
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private dataArray: Uint8Array | null = null;
  private source: MediaStreamAudioSourceNode | MediaElementAudioSourceNode | null = null;
  private initialized: boolean = false;
  private audioElement: HTMLAudioElement | null = null;
  private microphoneStream: MediaStream | null = null;
  private beatDetector: BeatDetector | null = null;
  private frequencyData: Uint8Array | null = null;
  private silentAudio: HTMLAudioElement | null = null;

  // FFT大小，必须是2的幂，决定了频谱的精度
  private fftSize: number = 2048;
  
  // 节拍检测相关
  private beatDetectionThreshold: number = 1.5;
  private beatEnergyHistory: number[] = [];
  private beatEnergyHistorySize: number = 30;
  private lastBeatTime: number = 0;
  private beatCooldown: number = 250; // 毫秒
  private isBeatDetected: boolean = false;

  private isPaused: boolean = false;

  constructor() {
    // 创建静音音频元素
    this.silentAudio = new Audio('/audio/silent.mp3');
    this.silentAudio.loop = true;
  }

  /**
   * 请求麦克风权限
   * @returns 是否成功获取权限
   */
  async requestMicrophonePermission(): Promise<boolean> {
    try {
      // 获取麦克风权限
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      this.microphoneStream = stream;
      return true;
    } catch (error) {
      console.error('获取麦克风权限时出错:', error);
      return false;
    }
  }

  /**
   * 初始化音频分析器
   */
  async initialize(): Promise<void> {
    if (this.audioContext) {
      console.log('AudioAnalyzer已经初始化');
      return;
    }
    
    try {
      // 创建音频上下文
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // 创建分析器节点
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = this.fftSize;
      this.analyser.smoothingTimeConstant = 0.8;
      
      // 初始化频率数据数组
      this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
      
      // 创建节拍检测器
      this.beatDetector = new BeatDetector();
      
      // 播放静音音频并立即暂停，以激活音频上下文
      await this.initializeSilentAudio();
      
      this.initialized = true;
      console.log('AudioAnalyzer初始化成功');
    } catch (error) {
      console.error('初始化AudioAnalyzer时出错:', error);
      throw error;
    }
  }
  
  /**
   * 初始化静音音频
   */
  private async initializeSilentAudio(): Promise<void> {
    if (!this.audioContext || !this.silentAudio || !this.analyser) return;
    
    try {
      // 等待音频加载
      await this.silentAudio.load();
      
      // 创建媒体源节点
      const silentSource = this.audioContext.createMediaElementSource(this.silentAudio);
      silentSource.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);
      
      // 播放并立即暂停
      await this.silentAudio.play();
      this.silentAudio.pause();
      
      // 保存源节点引用
      this.source = silentSource;
      
    } catch (error) {
      console.error('初始化静音音频时出错:', error);
    }
  }

  /**
   * 获取频率数据
   * @returns 频率数据数组
   */
  getFrequencyData(): Uint8Array | null {
    if (!this.analyser || !this.frequencyData) return null;
    
    this.analyser.getByteFrequencyData(this.frequencyData);
    return this.frequencyData;
  }

  /**
   * 获取时域数据
   * @returns 时域数据数组
   */
  getTimeData(): Uint8Array | null {
    if (!this.initialized || !this.analyser || !this.dataArray) {
      return null;
    }
    
    this.analyser.getByteTimeDomainData(this.dataArray);
    return this.dataArray;
  }

  /**
   * 获取分析器的频率区间数量
   * @returns 频率区间数量
   */
  getBufferLength(): number {
    if (!this.initialized || !this.analyser) {
      return 0;
    }
    
    return this.analyser.frequencyBinCount;
  }
  
  /**
   * 检测是否有节拍
   * @returns 是否检测到节拍
   */
  isBeat(): boolean {
    const frequencyData = this.getFrequencyData();
    if (!frequencyData || !this.beatDetector) return false;
    
    return this.beatDetector.detectBeat(frequencyData);
  }
  
  /**
   * 节拍检测算法
   * 基于能量变化检测节拍
   */
  private detectBeat(): void {
    if (!this.dataArray) return;
    
    // 计算当前帧的能量
    let currentEnergy = 0;
    const lowFreqBound = 5;  // 低频范围起始索引
    const highFreqBound = 100; // 低频范围结束索引
    
    for (let i = lowFreqBound; i < highFreqBound && i < this.dataArray.length; i++) {
      currentEnergy += this.dataArray[i] * this.dataArray[i];
    }
    currentEnergy = Math.sqrt(currentEnergy / (highFreqBound - lowFreqBound));
    
    // 计算历史能量平均值
    let energyAverage = 0;
    for (let i = 0; i < this.beatEnergyHistorySize; i++) {
      energyAverage += this.beatEnergyHistory[i];
    }
    energyAverage /= this.beatEnergyHistorySize;
    
    // 更新历史能量
    this.beatEnergyHistory.push(currentEnergy);
    this.beatEnergyHistory.shift();
    
    // 检测节拍
    const now = Date.now();
    if (currentEnergy > energyAverage * this.beatDetectionThreshold && 
        now - this.lastBeatTime > this.beatCooldown) {
      this.isBeatDetected = true;
      this.lastBeatTime = now;
    } else {
      this.isBeatDetected = false;
    }
  }

  /**
   * 清理资源
   */
  cleanup(): void {
    if (this.source) {
      this.source.disconnect();
    }
    
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.src = '';
    }
    
    if (this.audioContext) {
      this.audioContext.close();
    }

    if (this.microphoneStream) {
      this.microphoneStream.getTracks().forEach(track => track.stop());
      this.microphoneStream = null;
    }
    
    this.initialized = false;
  }

  /**
   * 暂停音频播放
   */
  pause(): void {
    if (this.audioElement && !this.isPaused) {
      this.audioElement.pause();
      this.isPaused = true;
    }
  }
  
  /**
   * 恢复音频播放
   */
  play(): void {
    if (this.audioElement && this.isPaused) {
      this.audioElement.play();
      this.isPaused = false;
    }
  }
  
  /**
   * 切换播放/暂停状态
   * @returns 当前是否暂停
   */
  togglePlayPause(): boolean {
    if (this.audioElement) {
      if (this.isPaused) {
        this.play();
      } else {
        this.pause();
      }
    }
    return this.isPaused;
  }
  
  /**
   * 获取当前播放状态
   * @returns 是否暂停
   */
  getIsPaused(): boolean {
    return this.isPaused;
  }
  
  /**
   * 获取当前音频源类型
   * @returns 'mic'表示麦克风，'file'表示音频文件，'none'表示未初始化
   */
  getSourceType(): 'mic' | 'file' | 'none' {
    if (!this.initialized) {
      return 'none';
    }
    
    return this.audioElement ? 'file' : 'mic';
  }

  /**
   * 切换到麦克风输入
   */
  async switchToMicrophone(): Promise<void> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      if (!this.audioContext || !this.analyser) {
        throw new Error('AudioAnalyzer未初始化');
      }
      
      // 断开当前源
      if (this.source) {
        this.source.disconnect();
      }
      
      // 创建新的麦克风源
      this.source = this.audioContext.createMediaStreamSource(stream);
      this.source.connect(this.analyser);
      
    } catch (error) {
      console.error('切换到麦克风输入时出错:', error);
      throw error;
    }
  }
  
  /**
   * 切换到音频文件
   */
  async switchToAudioFile(audioUrl: string): Promise<void> {
    try {
      if (!this.audioContext || !this.analyser) {
        throw new Error('AudioAnalyzer未初始化');
      }
      
      // 断开当前源
      if (this.source) {
        this.source.disconnect();
      }
      
      // 创建新的音频元素
      const audioElement = new Audio(audioUrl);
      audioElement.loop = true;
      
      // 创建新的媒体源
      this.source = this.audioContext.createMediaElementSource(audioElement);
      this.source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);
      
      // 播放音频
      await audioElement.play();
      
    } catch (error) {
      console.error('切换到音频文件时出错:', error);
      throw error;
    }
  }
  
  /**
   * 检查是否已初始化
   */
  isInitialized(): boolean {
    return this.initialized;
  }
}

// 创建单例实例
const audioAnalyzer = new AudioAnalyzer();
export default audioAnalyzer; 