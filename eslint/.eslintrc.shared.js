module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "allowImportExportEverywhere": true
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'airbnb/base',
    'plugin:promise/recommended'
  ],
  plugins: [
    'html',
    'jest',
    'import',
    'node',
    'promise'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'curly': ['error', 'multi-or-nest'],
    'global-require': 'off',
    'import/extensions': ['error', { 'js': 'never', 'vue': 'never', 'json': 'always' }],
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['test/**/*', 'nuxt.config.js'] }],
    'import/no-unresolved': 0,
    'indent': ['error', 2],
    'no-confusing-arrow': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false }],
    'promise/avoid-new': 'off',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',
    'semi': 'off',
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always']
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.json']
      }
    }
  },
  globals: {}
}
