/* eslint @typescript-eslint/no-var-requires: 'off' */

const {
  compilerOptions: { paths },
} = require('./tsconfig.json')

const formatedPaths = {}

for (const key in paths) {
  formatedPaths[key.replace('/*', '')] = paths[key][0].replace('/*', '')
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: formatedPaths,
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
}
