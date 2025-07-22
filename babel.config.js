module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './app',
          '@screens': './app/screens',
          '@components': './app/components',
          '@navigation': './app/navigation',
          '@hooks': './app/hooks',
          '@constants': './app/constants',
          '@schemas': './app/schemas',
          '@db': './app/db',
          '@utils': './app/utils',
          '@context': './app/context',
        }
      },
    ],
  ],
};
