module.exports = {
  plugins: ['prefer-arrow'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-syntax': ['error', 'ClassDeclaration'],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
        allowStandaloneDeclarations: false,
      },
    ],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'func-style': ['error', 'expression'],
  },
};
