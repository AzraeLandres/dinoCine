const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  "@": path.resolve(__dirname),
  "@components": path.resolve(__dirname, "src/components"),
  "@screens": path.resolve(__dirname, "src/screens"),
  "@atoms": path.resolve(__dirname, "src/components/atoms"),
  "@molecules": path.resolve(__dirname, "src/components/molecules"),
  "@organisms": path.resolve(__dirname, "src/components/organisms"),
  "@templates": path.resolve(__dirname, "src/components/templates"),
  "@layout": path.resolve(__dirname, "src/components/layout"),
  "@constants": path.resolve(__dirname, "src/constants"),
  "@lib": path.resolve(__dirname, "src/lib"),
};

module.exports = config;
