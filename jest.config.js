module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/*.js', '<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/components/*', '<rootDir>/pages/editor.js'],
  coveragePathIgnorePatterns: ['<rootDir>/.next/*'],
}
