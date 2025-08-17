/// <reference types="vite/client" />
// vite-env.d.ts 파일은 Vite 프로젝트에서 사용되는 타입 정의 파일입니다.

// Vite 환경변수 타입 정의
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

// ImportMeta 타입 정의
interface ImportMeta {
  env: ImportMetaEnv;
}

// 이미지 파일 타입 정의
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}
