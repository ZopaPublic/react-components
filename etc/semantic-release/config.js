module.exports = {
  ci: false, // skip Continuous Integration environment verifications. This allows for making releases from a local machine
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
        githubUrl: 'https://github.com/',
        githubApiPathPrefix: '/api/v3',
      },
    ],
  ],
};
