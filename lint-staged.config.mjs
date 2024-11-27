export default {
  '*.{js,jsx}': ['eslint --config eslint.config.js'],
  '*.{ts,tsx}': [
    () => 'tsc --noEmit --project tsconfig.app.json',
    'eslint --config eslint.config.js',
    'prettier --check',
  ],
};
