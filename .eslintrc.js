module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['custom'],
  extends: ['plugin:custom/recommended'],
  rules: {
    'custom/no-top-level-external-import': [
      'error',
      {
        entryPoints: ['src/index.ts', 'src/root.ts'], // Specify the entry points as an array of strings
        ignoreModules: ['dotenv'], // Optional: Specify any modules to ignore, as an array of strings
      },
    ],
  },
};
