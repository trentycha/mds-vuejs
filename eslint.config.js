import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Global ignores
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/build/**"],
  },

  // Base ESLint recommended config
  js.configs.recommended,

  // Vue 3 recommended config
  ...pluginVue.configs["flat/recommended"],

  // Prettier config (disables conflicting rules)
  eslintConfigPrettier,

  // Your custom config
  {
    files: ["**/*.js", "**/*.vue"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Node.js globals (equivalent to env.node)
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        // Browser globals (if needed)
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
  },
];
