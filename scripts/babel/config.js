module.exports = {
  presets: [
    ['@babel/env', {
      modules: false,
    }],
    '@babel/react',
    '@babel/typescript',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-transform-runtime', { corejs: 2 }],

    // plugin-babel-import config
    ['import', { libraryName: 'zarm', libraryDirectory: 'components', style: true }, 'zarm'],
    ['import', { libraryName: 'dragon-ui', style: true }, 'dragon-ui'],
  ],
};
