/**
 * 节拍检测器
 * 用于检测音频中的节拍
 */
export class BeatDetector {
  private readonly BEAT_HISTORY_SIZE = 60;  // 保持1秒的历史数据（60帧）
  private readonly BEAT_THRESHOLD = 1.5;    // 节拍阈值
  private energyHistory: number[] = [];
  private lastBeatTime: number = 0;
  private minBeatInterval: number = 200;    // 最小节拍间隔（毫秒）
  
  constructor() {
    // 初始化能量历史
    for (let i = 0; i < this.BEAT_HISTORY_SIZE; i++) {
      this.energyHistory.push(0);
    }
  }
  
  /**
   * 检测是否有节拍
   * @param frequencyData 频率数据
   * @returns 是否检测到节拍
   */
  detectBeat(frequencyData: Uint8Array): boolean {
    // 计算当前帧的能量
    let currentEnergy = 0;
    for (let i = 0; i < frequencyData.length; i++) {
      currentEnergy += frequencyData[i];
    }
    currentEnergy = currentEnergy / frequencyData.length;
    
    // 计算历史平均能量
    const averageEnergy = this.energyHistory.reduce((a, b) => a + b, 0) / this.BEAT_HISTORY_SIZE;
    
    // 更新能量历史
    this.energyHistory.push(currentEnergy);
    this.energyHistory.shift();
    
    // 检查是否超过最小节拍间隔
    const currentTime = performance.now();
    if (currentTime - this.lastBeatTime < this.minBeatInterval) {
      return false;
    }
    
    // 检测节拍
    if (currentEnergy > averageEnergy * this.BEAT_THRESHOLD) {
      this.lastBeatTime = currentTime;
      return true;
    }
    
    return false;
  }
} 