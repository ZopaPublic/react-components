module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // -- TYPESCRIPT
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'variableLike', format: ['camelCase', 'UPPER_CASE', 'StrictPascalCase'] },
      { selector: 'typeLike', format: ['StrictPascalCase'] },
    ],
    '@typescript-eslint/no-explicit-any': 'off', // TODO: Fix all any
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // -- React
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off', // TODO: needs research
    'react/prop-types': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          FC: 'See: https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/',
          'React.FC': 'See: https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/',
        },
        extendDefaults: true,
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
  plugins: ['unused-imports'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
