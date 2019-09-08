const path = require("path");

module.exports = ({ config }) => {
  // Relative path imports
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./src'),
  ];
  return config;
};
