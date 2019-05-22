module.exports = {
  dryRun: false,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    [
      '@semantic-release/github',
      {
        assets: [
          { path: 'dist/index.js', label: 'CJS distribution' },
          { path: 'dist/index.module.js', label: 'ES6 distribution' },
        ],
      },
    ],
  ],
};
