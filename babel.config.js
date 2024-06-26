module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: [
    //   'react-native-reanimated/plugin',
    // ]
    plugins: [
      [
        'module:react-native-dotenv',
        {
          // envName: 'APP_ENV',
          moduleName: 'app/config',
          path: '.env',
          // blocklist: null,
          // allowlist: null,
          // blacklist: null, // DEPRECATED
          // whitelist: null, // DEPRECATED
          // safe: false,
          // allowUndefined: true,
          // verbose: false,
        },
      ],
    ],
  };
};
