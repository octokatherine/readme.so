module.exports = {
  testEnvironment: 'jsdom',
  resetModules: true,
  restoreMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/*.js', '<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/components/*', '<rootDir>/pages/editor.js'],
  coveragePathIgnorePatterns: ['<rootDir>/.next/*'],
  transformIgnorePatterns: ['/node_modules/.+\\.css$'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { presets: ['next/babel'] }],
  },
}
