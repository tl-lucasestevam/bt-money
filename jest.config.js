module.exports = {
  extensionsToTreatAsEsm: ['.jsx'],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test|tests).[tj]s?(x)',
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-test.js'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'ecmascript',
            jsx: true,
            dynamicImport: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
          loose: false,
          target: 'es5',
          // Requires v1.2.50 or upper and requires target to be es2016 or upper.
          keepClassNames: false,
        },
        module: {
          type: 'es6',
        },
      },
    ],
  },
};
