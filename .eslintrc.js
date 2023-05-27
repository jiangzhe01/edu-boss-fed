module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': 1, // 对象字面量项尾不能有逗号
    semi: 1, // 语句强制分号结尾
    quotes: 0, // 引号类型 `` "" ''
    'vue/multi-word-component-names': 0,
    'space-before-function-paren': 0
  }
}
