import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { name } from './package.json'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    target: "esnext",
    lib:{
      name:'vitechild',
      // entry:'./src/main.js',
      // fileName:`[name]`,
      entry: path.resolve(__dirname, "./src/main.js"),
      formats:['umd'],
    },
    /* rollupOptions: {
      preserveEntrySignatures: 'allow-extension',
      input: {
        // 入口文件
        main: path.resolve(__dirname, "index.html")
      },
      output: {
        inlineDynamicImports: true,
      },
    }, */
  }
})
