module.exports = {
    transform: {
      '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    
    setupFilesAfterEnv: ['./jest.setup.js'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx'],
  };
  