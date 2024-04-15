module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    //! TODO: Delete this because confic with my eslint local config
    quotes: "off",
    "comma-dangle": "off",
    //!
    "import/no-extraneous-dependencies": 0,
    "no-console": 0,
    "no-underscore-dangle": 0,
    "no-restricted-globals": 0,
    "linebreak-style": 0,
  },
};
