module.exports = {
  plugins: ['solid', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:solid/typescript',
    'prettier',
    './.eslintrc-common.js',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    es2022: true,
    browser: true,
    worker: true,
    serviceworker: true,
    node: true,
  },
  rules: {},
};
