module.exports = {
  hooks: {
    'pre-commit': 'npx lint-staged --allow-empty',
    'commit-msg': 'npx --no-install commitlint --edit $1',
  },
};
