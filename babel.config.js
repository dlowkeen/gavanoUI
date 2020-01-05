module.exports = function(api) {
  api.cache(true);

  const presets = [
    'module:metro-react-native-babel-preset',
    'babel-preset-expo',
  ];
  const plugins = [];
  return {
    presets,
    plugins,
  };
};
