/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      ],
      extends: [ 'plugin:cypress/recommended' ], 
    },
  ],
  parserOptions: { ecmaVersion: 'latest', },
  rules: {
    'quotes': [ 2, 'single' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'indent': [ 'error', 2 ],
    'object-curly-newline': [ 'error', { 'minProperties': 3, 'multiline': true } ],
    'no-multiple-empty-lines': [ 'error', { 'max': 1 } ],
    'eol-last': [ 'error', 'always' ]
  },
};
