module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'react-app',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        'no-undef': 0, // https://github.com/eslint/typescript-eslint-parser/issues/437#issuecomment-435526531
    },
};
