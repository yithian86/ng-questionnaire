module.exports = {
  module: {
    rules: [
      {
        // Use raw-loader to load files without annoying warnings
        test: /\.(md|txt|ico)(\?.*$|$)/,
        use: ['raw-loader']
      },
      {
        test: /.(pug)$/,
        exclude: /.(include|partial).(pug|jade)$/,
        use: [
          { loader: "apply-loader" },
          {
            loader: "pug-loader",
            options: { root: "src"}
          }
        ],
      },
      {
        test: /.(include|partial).(pug)$/,
        use: [
          { loader: "apply-loader" },
          { loader: "pug-loader", options: { root: "src" } }
        ],
      }
    ],
  },
  plugins: []
};
