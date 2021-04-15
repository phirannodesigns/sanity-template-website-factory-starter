module.exports = {
  env: { node: true, browser: true },
  extends: ['sanity/react', 'prettier'],
  root: true,
  rules: {
    'react/prop-types': 1,
    'max-len': 0,
    'no-unused-vars': 1,
    camelcase: 0,
  },
}
