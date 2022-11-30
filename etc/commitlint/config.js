module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => /^chore\(release\):.+$/m.test(message)],
};
