const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Fix Windows path issue with node:sea
config.resolver.alias = {
  'node:sea': false,
};

// Disable problematic externals on Windows
config.resolver.platforms = ['ios', 'android', 'web'];

module.exports = config;
