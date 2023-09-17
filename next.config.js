const withImages = require("next-images");

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static',
            publicPath: '/_next/static',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
});
