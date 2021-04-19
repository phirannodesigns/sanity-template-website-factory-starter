module.exports = {
  env: { node: true, browser: true },
  extends: ['sanity/react', 'prettier'],
  root: true,
  rules: {
    camelcase: 0,
    'max-len': 0,
    'no-unused-vars': 1,
    'react/jsx-no-bind': 0,
    'react/prop-types': 1,
  },
}
