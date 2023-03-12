/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
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
    'array-bracket-spacing': [ 'error', 'always' ],
    'eol-last': [ 'error', 'always' ],
    'indent': [ 'error', 2 ],
    'no-multiple-empty-lines': [ 'error', { 'max': 1 } ],
    'object-curly-newline': [ 'error', { 'minProperties': 3, 'multiline': true } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'quotes': [ 2, 'single' ],
  },
};
