module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  //配置解析器
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  extends: 'eslint:recommended',
  //全局变量
  globals: {
    __DEV__: true,
    __WECHAT__: true,
    __ALIPAY__: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    getApp: true,
    getCurrentPages: true,
  },
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    'no-console': 0,
    'no-debugger': 1,
    'prefer-const': 0,
    'no-empty-function': 0,
    semi: 1,
    quotes: [1, 'single'],
    'object-shorthand': 1,
    'no-unused-vars': 1,
    'object-curly-spacing': [1, 'always'],
    camelcase: [2, { properties: 'never' }],
    // 关闭eslint可能与prettier发生冲突的代码格式化规则
    'prettier/prettier': [
      0,
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        printWidth: 200,
        tabWidth: 2,
        semi: true,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        'key-spacing': false,
      },
    ],
  },
};
