module.exports = {
    webpack: {
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: "file-loader",
              },
            ],
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "file-loader"
          },
        ],
      },
    },
  };
  