import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // cssCodeSplit: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom'
        }
      }
    },
    outDir: 'lib',
    lib: {
      entry: './script/index.tsx',
      formats: ['es'],
      fileName: format => `index.${format}.js`
    }
  }
})
