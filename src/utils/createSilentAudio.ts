/**
 * 创建静音音频工具
 * 用于生成一个1秒钟的静音音频，并在运行时添加到DOM中
 */

/**
 * 创建并添加静音音频元素到DOM
 * 这个函数会创建一个1秒钟的静音音频，并将其添加到DOM中
 * 这样可以避免需要实际的静音MP3文件
 */
export function createSilentAudio(): HTMLAudioElement {
  // 创建音频上下文
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  // 创建一个空的1秒音频缓冲区
  const buffer = audioContext.createBuffer(2, audioContext.sampleRate, audioContext.sampleRate);
  
  // 获取左右声道数据
  const leftChannel = buffer.getChannelData(0);
  const rightChannel = buffer.getChannelData(1);
  
  // 填充静音数据（全部为0）
  for (let i = 0; i < buffer.length; i++) {
    leftChannel[i] = 0;
    rightChannel[i] = 0;
  }
  
  // 将音频缓冲区转换为WAV格式的Blob
  const wavBlob = bufferToWav(buffer, audioContext.sampleRate);
  
  // 创建URL
  const audioUrl = URL.createObjectURL(wavBlob);
  
  // 创建音频元素
  const audioElement = new Audio();
  audioElement.src = audioUrl;
  audioElement.loop = true;
  audioElement.volume = 0;
  audioElement.id = 'silent-audio';
  
  // 添加到DOM
  document.body.appendChild(audioElement);
  
  return audioElement;
}

/**
 * 将音频缓冲区转换为WAV格式的Blob
 * @param buffer 音频缓冲区
 * @param sampleRate 采样率
 * @returns WAV格式的Blob
 */
function bufferToWav(buffer: AudioBuffer, sampleRate: number): Blob {
  const numChannels = buffer.numberOfChannels;
  const length = buffer.length * numChannels * 2;
  const arrayBuffer = new ArrayBuffer(44 + length);
  const view = new DataView(arrayBuffer);
  
  // RIFF标识
  writeString(view, 0, 'RIFF');
  // 文件长度
  view.setUint32(4, 36 + length, true);
  // WAVE标识
  writeString(view, 8, 'WAVE');
  // fmt标识
  writeString(view, 12, 'fmt ');
  // fmt块长度
  view.setUint32(16, 16, true);
  // 音频格式（PCM = 1）
  view.setUint16(20, 1, true);
  // 声道数
  view.setUint16(22, numChannels, true);
  // 采样率
  view.setUint32(24, sampleRate, true);
  // 字节率
  view.setUint32(28, sampleRate * numChannels * 2, true);
  // 块对齐
  view.setUint16(32, numChannels * 2, true);
  // 位深度
  view.setUint16(34, 16, true);
  // data标识
  writeString(view, 36, 'data');
  // 数据长度
  view.setUint32(40, length, true);
  
  // 写入音频数据
  const channelData = [];
  for (let i = 0; i < numChannels; i++) {
    channelData.push(buffer.getChannelData(i));
  }
  
  let offset = 44;
  for (let i = 0; i < buffer.length; i++) {
    for (let channel = 0; channel < numChannels; channel++) {
      const sample = Math.max(-1, Math.min(1, channelData[channel][i]));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
      offset += 2;
    }
  }
  
  return new Blob([view], { type: 'audio/wav' });
}

/**
 * 在DataView中写入字符串
 * @param view DataView
 * @param offset 偏移量
 * @param string 字符串
 */
function writeString(view: DataView, offset: number, string: string): void {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
} 