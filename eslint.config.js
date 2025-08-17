import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    // ESLint 규칙 설정 추가
    rules: {
      // any 타입 사용 허용
      "@typescript-eslint/no-explicit-any": "off",

      // 추가적인 TypeScript 규칙 완화 (선택사항)
      "@typescript-eslint/no-unused-vars": "warn", // 사용하지 않는 변수는 경고만
      "@typescript-eslint/no-non-null-assertion": "warn", // ! 연산자는 경고만

      // React 관련 규칙
      "react-hooks/exhaustive-deps": "warn", // useEffect 의존성 배열 경고만
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".ts", ".js", ".jsx", ".tsx", ".json"],
        },
      },
    },
  },
]);
