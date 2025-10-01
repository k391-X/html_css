import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    port: 2407,   // đổi port nếu muốn
    open: true    // tự mở browser khi chạy `npm run dev`
  },
  build: {
    outDir: "dist"  // thư mục build output
  },
    plugins: [
    tailwindcss(),
  ],
  base: "./",
})
