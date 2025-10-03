import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import prerender from "vite-plugin-prerender";

const path = require("path");

export default defineConfig({
  server: {
    port: 2407, // đổi port nếu muốn
    open: true, // tự mở browser khi chạy `npm run dev`
  },
  build: {
    outDir: "dist", // thư mục build output
  },
  plugins: [
    tailwindcss(),
    prerender({
      staticDir: path.resolve(__dirname, "dist"),
      routes: ["/"], // build ra index.html tĩnh
    }),
  ],
  base: "./",
});
