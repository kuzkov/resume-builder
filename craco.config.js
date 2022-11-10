const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    configure(config) {
      config.module.rules.push({
        test: /pdfjs-dist\/build\/pdf\.worker\.js$/,
        type: "asset/resource",
        generator: {
          filename: "static/chunks/[name].[hash][ext]",
        },
      });
      return config;
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
