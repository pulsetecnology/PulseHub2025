/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@frontend/(.*)$': '<rootDir>/src/front-end/$1'
  },
  moduleDirectories: ['node_modules', 'src'],
};
