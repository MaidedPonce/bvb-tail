const path = require("path");

module.exports = {
  entry: "src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel/loader",
        },
      },
      {
        test: /\html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ],
  },
};
