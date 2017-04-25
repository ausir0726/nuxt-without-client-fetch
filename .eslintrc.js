module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // 強制檢查 import 可以被正確解析 
  settings: {
    'import/resolver': {
      'webpack': {
        'config': '.eslint.resolve.config.js'
      }
    }
  },
  // add your custom rules here
  rules: {},
  globals: {}
}
