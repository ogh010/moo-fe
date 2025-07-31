import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ⬅️ 꼭 필요

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // todo 백엔드 주소, 프록시할 대상 서버 url을 설정
        changeOrigin: true, // 원본 호스트 헤더를 변경
        rewrite: (path) => path.replace(/^\/api/, ""), // 요청 경로를 재작성
      },
    },
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") }, // ✅ 수정됨
    ],
  },
});
