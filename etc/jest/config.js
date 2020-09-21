module.exports = {
  rootDir: '../../src',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
    '^.+\\.css$': '<rootDir>/../etc/jest/cssTransform.js',
    '^(?!.*\\.(mjs|cjs|css|json)$)': '<rootDir>/../etc/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
