module.exports = (_env, argv) => {
  // ...
  return {
    // ...
    module: {
      rules: [
        // 이미지 로더
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: "assets/images/[name].[hash:8].[ext]",
              },
            },
          ],
        },
        // SVG 로더
        {
          test: /\.svg$/i,
          use: ["@svgr/webpack"],
        },
        // 웹폰트 로더
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "public/fonts/[name].[hash:8].[ext]",
              },
            },
          ],
        },
      ],
    },
  };
};
