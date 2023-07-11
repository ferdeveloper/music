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

  return config;
};