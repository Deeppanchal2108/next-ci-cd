import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
  
    rules: {
      "no-console": "warn",           // Warn if console.log is left in code
      "prefer-const": "error",        // Error if a variable can be a const
      "@typescript-eslint/no-explicit-any": "error", // Force better types
      "react/react-in-jsx-scope": "off", // Next.js doesn't need React imported
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
