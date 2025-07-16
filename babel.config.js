module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screens': './app/screens',
          '@components': './app/components',
          '@navigators': './app/navigation',
          '@hooks': './app/hooks',
          '@constants': './app/constants',
        }, "@/*": ["app/*"]
      },
    ],
  ],
};
