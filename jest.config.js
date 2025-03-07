module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // If you're using aliases in your project
    },
    globals: {
      'ts-jest': {
        isolatedModules: true, // Speed up compilation
      },
    },
    moduleDirectories: ['node_modules', 'src'],
  };
  