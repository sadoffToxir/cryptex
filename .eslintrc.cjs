/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      extends: [
        'plugin:cypress/recommended'
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'semi': ['error', 'never'],
    'vue/html-self-closing': 'error',
    'indent': ['error', 2]

  }
}
