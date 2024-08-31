import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsEslint from 'typescript-eslint';

export default [
  {
    ignores: ["**/*/local_build*.cjs", "**/*/bundle.cjs", "**/*/.sst/**"],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      'no-duplicate-imports': 'error',
    },
  },

  ...tsEslint.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),

  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      }],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/promise-function-async": "error",
      "prefer-promise-reject-errors": "error",
      "no-throw-literal": "error",
      "@typescript-eslint/triple-slash-reference": "off",
    }
  }
]
