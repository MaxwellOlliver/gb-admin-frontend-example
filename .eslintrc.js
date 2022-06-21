module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "react/prop-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-use-before-define": "off",
    "no-explicit-any": "off",
    "require-jsdoc": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
  },
};
