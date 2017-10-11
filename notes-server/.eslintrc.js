module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    // @NOTE: bower
    '$': true,
    'moment': true,

    // @NOTE: provide plugin
    '_': true,
    'Vue': true,
    'App': true,

    // @NOTE: define plugin
    'cordova': true,
    'DEV': true,
    'PROD': true,
    '__THEME': true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'vue', 'import'
  ],
  // add your custom rules here
  'rules': {

    'indent': ['error', 2, {
      'SwitchCase': 1,
    }],

    'semi': ['warn', 'always'],
    'no-extra-semi': 'error',
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],

    'curly': ['warn', 'all'],

    'brace-style': ['warn', 'stroustrup'],

    'comma-dangle': ['warn', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],

    'no-alert': 'off',
    'no-debugger': 'warn',
    'no-console': ['warn', {
      'allow': ['log', 'info', 'warn', 'error'],
    }],

    'no-unused-vars': ['warn', {
      'args': 'none',
    }],

    'no-shadow': 'warn',

    'no-unreachable': 'warn',

  },
};
