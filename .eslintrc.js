module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app",
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    // "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "standard-react",
    "standard"
  ],
  "env": {
    "webextensions": true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "tsconfig.json"
  },
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "react/display-name" : "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-debugger': 'off',
    "no-tabs": "off",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"]
  },
  globals: {
    JSX: true,
  },
  ignorePatterns: [ "./src/types/**/*.ts" ],
};
