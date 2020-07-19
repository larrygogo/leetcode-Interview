module.exports = {
  hooks: {
    'pre-commit': 'npm run test',
    'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS',
  },
};
