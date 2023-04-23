const base = require('@yiluxiangbei/eslint-config-base')

module.exports = {
  extends: [
    '@yiluxiangbei/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  overrides: [
    ...base.overrides,
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
