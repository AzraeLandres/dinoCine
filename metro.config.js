const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  "@": path.resolve(__dirname),
  "@components": path.resolve(__dirname, "src/components"),
  "@lib": path.resolve(__dirname, "src/lib"),
  "@atoms": path.resolve(__dirname, "src/components/atoms"),
};
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
