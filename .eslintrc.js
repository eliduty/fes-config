module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/script-setup-uses-vars': 'error',
    'prefer-const': 'off',
    'object-shorthand': 'warn',
    camelcase: ['warn', { properties: 'never' }],
    quotes: ['warn', 'single'],
    semi: 'warn',
    'prettier/prettier': [
      'off',
      {
        singleQuote: false,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        sortAttributes: true,
        'key-spacing': false,
      },
    ],
  },
};
