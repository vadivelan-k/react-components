module.exports = {
  context: __dirname + "/app/frontend",
  entry: {
    home: __dirname + "/app/frontend/home.entry.js"
  },

  output: {
    filename: "[name].js",
    path: __dirname + "/app/assets/javascripts/"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          optional: ["es7.decorators", "runtime"]
        }
      }
    ]
  }
};
