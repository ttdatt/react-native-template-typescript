module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
    'plugin:react/recommended', // uses react-specific linting rules
    'plugin:prettier/recommended', // enables eslint-plugin-prettier and eslint-config-prettier
    'prettier',
    'plugin:react-hooks/recommended', // enforces the Rules of Hooks
    'plugin:jest/recommended', // enforces Jest-specific rules
    'plugin:jest/style', // enforces Jest-specific styles
    'plugin:react-native-a11y/ios',
  ],
  ignorePatterns: [
    'node_modules/',
    'metro.config.js',
    'babel.config.js',
    'jest.config.js',
    'jest.setup.js',
    'dist/',
    '__mocks__/**/*.ts',
    '__mocks__/**/*.js',
    'coverage/**/*',
    '.eslintrc.js',
    'react-native.config.js',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  rules: {
    'react/self-closing-comp': 2,
    'react/jsx-curly-brace-presence': [2, {props: 'never', children: 'ignore'}],
    'react/react-in-jsx-scope': 0,
    'react/display-name': ['off'],
    'react/prop-types': ['off'],
    'react-native/no-inline-styles': 0,
    // "react-hooks/exhaustive-deps": "off",
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    indent: 'off',
    '@typescript-eslint/no-unused-vars': [
      1,
      {argsIgnorePattern: '^_', ignoreRestSiblings: true},
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 1,
    // "@typescript-eslint/unbound-method": "off",
    '@typescript-eslint/interface-name-prefix': ['off'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'jest',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    'react-native/react-native': true,
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.test.js', '*.test.jsx'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
};
