// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.{js,mjs,cjs,ts}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
// ];

import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import playwright from 'eslint-plugin-playwright';

export default [
  {
    files: ['**/*.ts'], // Apply to all TypeScript files
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      parserOptions: {
        project: './tsconfig.json', // Point to your tsconfig.json
      },
    },
    plugins: {
      '@typescript-eslint': ts, // Add TypeScript plugin
      playwright, // Add Playwright plugin
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'warn', // Warn about unused variables
      '@typescript-eslint/explicit-function-return-type': 'warn', // Enforce return types

      // Playwright rules
      'playwright/no-skipped-test': 'error', // Enforce no skipped tests
      'playwright/no-page-pause': 'error', // Enforce no page.pause() in tests
      'playwright/no-element-handle': 'error', // Encourage use of locator instead of elementHandle

      // General rules
      'no-console': 'warn', // Warn about console.log statements
    },
  },
];