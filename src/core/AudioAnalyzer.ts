/**
 * 音频分析器类
 * 负责捕获和分析音频数据
 */
import { createSilentAudio } from '../utils/createSilentAudio';

export class AudioAnalyzer {
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private dataArray: Uint8Array | null = null;
  private source: MediaStreamAudioSourceNode | MediaElementAudioSourceNode | null = null;
  private isInitialized: boolean = false;
  private audioElement: HTMLAudioElement | null = null;
  private microphoneStream: MediaStream | null = null;
  private silentAudioElement: HTMLAudioElement | null = null;

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
  
  // 自动初始化标志
  private autoInitialized: boolean = false;

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
   * 初始化音频分析器（使用麦克风）
   * @returns 是否成功初始化
   */
  async initialize(): Promise<boolean> {
    try {
      if (!this.microphoneStream) {
        return false;
      }

      // 创建音频上下文
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // 创建分析器节点
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = this.fftSize;
      
      // 创建音频源
      this.source = this.audioContext.createMediaStreamSource(this.microphoneStream);
      this.source.connect(this.analyser);
      
      // 创建数据数组
      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(bufferLength);
      
      // 初始化节拍检测历史
      for (let i = 0; i < this.beatEnergyHistorySize; i++) {
        this.beatEnergyHistory.push(0);
      }
      
      this.isInitialized = true;
      console.log('音频分析器初始化成功');
      return true;
    } catch (error) {
      console.error('初始化音频分析器时出错:', error);
      return false;
    }
  }
  
  /**
   * 初始化音频分析器（使用音频文件）
   * @param audioUrl 音频文件URL
   * @returns 是否成功初始化
   */
  async initializeWithAudio(audioUrl: string): Promise<boolean> {
    try {
      // 创建音频上下文
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // 创建分析器节点
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = this.fftSize;
      
      // 创建音频元素
      this.audioElement = new Audio();
      this.audioElement.src = audioUrl;
      this.audioElement.loop = false;
      
      // 创建音频源
      this.source = this.audioContext.createMediaElementSource(this.audioElement);
      this.source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination); // 连接到输出，这样可以听到声音
      
      // 播放音频
      await this.audioElement.play();
      
      // 创建数据数组
      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(bufferLength);
      
      // 初始化节拍检测历史
      for (let i = 0; i < this.beatEnergyHistorySize; i++) {
        this.beatEnergyHistory.push(0);
      }
      
      this.isInitialized = true;
      console.log('音频分析器初始化成功（使用音频文件）');
      return true;
    } catch (error) {
      console.error('初始化音频分析器时出错:', error);
      return false;
    }
  }
  
  /**
   * 自动初始化音频分析器（使用静音音频）
   * 用于在系统启动时激活音频环境
   * @returns 是否成功初始化
   */
  async autoInitialize(): Promise<boolean> {
    if (this.autoInitialized) {
      return true;
    }
    
    try {
      console.log('正在自动初始化音频分析器（使用静音音频）');
      
      // 创建静音音频元素
      this.silentAudioElement = createSilentAudio();
      
      // 创建音频上下文
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // 创建分析器节点
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = this.fftSize;
      
      // 创建音频源
      this.source = this.audioContext.createMediaElementSource(this.silentAudioElement);
      this.source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);
      
      // 播放音频
      await this.silentAudioElement.play();
      
      // 创建数据数组
      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(bufferLength);
      
      // 初始化节拍检测历史
      for (let i = 0; i < this.beatEnergyHistorySize; i++) {
        this.beatEnergyHistory.push(0);
      }
      
      this.isInitialized = true;
      this.autoInitialized = true;
      console.log('音频分析器自动初始化成功（使用静音音频）');
      return true;
    } catch (error) {
      console.error('自动初始化音频分析器时出错:', error);
      return false;
    }
  }

  /**
   * 获取频率数据
   * @returns 频率数据数组
   */
  getFrequencyData(): Uint8Array | null {
    if (!this.isInitialized || !this.analyser || !this.dataArray) {
      return null;
    }
    
    this.analyser.getByteFrequencyData(this.dataArray);
    
    // 检测节拍
    this.detectBeat();
    
    return this.dataArray;
  }

  /**
   * 获取时域数据
   * @returns 时域数据数组
   */
  getTimeData(): Uint8Array | null {
    if (!this.isInitialized || !this.analyser || !this.dataArray) {
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
    if (!this.isInitialized || !this.analyser) {
      return 0;
    }
    
    return this.analyser.frequencyBinCount;
  }
  
  /**
   * 检测是否有节拍
   * @returns 是否检测到节拍
   */
  isBeat(): boolean {
    return this.isBeatDetected;
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
    
    if (this.silentAudioElement) {
      this.silentAudioElement.pause();
      this.silentAudioElement.remove(); // 从DOM中移除
    }
    
    if (this.audioContext) {
      this.audioContext.close();
    }

    if (this.microphoneStream) {
      this.microphoneStream.getTracks().forEach(track => track.stop());
      this.microphoneStream = null;
    }
    
    this.isInitialized = false;
    this.autoInitialized = false;
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
   * 获取当前音频元素
   * @returns 当前音频元素或null
   */
  getAudioElement(): HTMLAudioElement | null {
    return this.audioElement;
  }
  
  /**
   * 获取当前音频源类型
   * @returns 'mic'表示麦克风，'file'表示音频文件，'none'表示未初始化
   */
  getSourceType(): 'mic' | 'file' | 'none' {
    if (!this.isInitialized) {
      return 'none';
    }
    
    return this.audioElement ? 'file' : 'mic';
  }
}

// 导出单例实例
export default new AudioAnalyzer(); 