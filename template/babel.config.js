module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          navigation: './src/navigation',
          screens: './src/screens',
          models: './src/models',
          api: './src/api',
        },
      },
    ],
  ],
};
