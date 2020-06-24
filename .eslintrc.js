module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        './node_modules/eslint-config-airbnb-base/rules/best-practices.js',
        './node_modules/eslint-config-airbnb-base/rules/errors.js',
        './node_modules/eslint-config-airbnb-base/rules/node.js',
        './node_modules/eslint-config-airbnb-base/rules/style.js',
        './node_modules/eslint-config-airbnb-base/rules/variables.js',
        './node_modules/eslint-config-airbnb-base/rules/es6.js',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
};
