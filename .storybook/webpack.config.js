const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.sass$/,
    use: [
      require.resolve("vue-style-loader"),
      require.resolve("css-loader"),
      {
        loader: require.resolve("sass-loader"),
        options: {
          sassOptions: {
            indentedSyntax: true
          }
        }
      }
    ],
  });

  config.resolve.alias['@'] = path.resolve(__dirname, '../src')

  return config;
};
