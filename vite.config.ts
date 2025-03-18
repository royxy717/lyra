import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 确保在 GitHub Pages 上正确加载资源
  server: {
    host: true, // 监听所有地址，包括局域网和公网
    port: 5173, // 指定端口号
    strictPort: true, // 如果端口被占用，则中止
    open: true // 在浏览器中自动打开
  }
})
