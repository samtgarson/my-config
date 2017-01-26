module.exports = {
  rules: {
    'comma-dangle': 'off',
    'space-before-function-paren': ['error', 'always'],
    'semi': 'off',
    'no-underscore-dangle': ['error', { 'allowAfterSuper': true }],
    'no-return-assign': 'off',
    'ava/no-skip-test': 'off',
    'indent': ['error', 2],
    'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false }],
    'curly': ['error', 'multi-or-nest']
  }
}
