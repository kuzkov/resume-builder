const CracoLessPlugin = require("craco-less");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = {
  webpack: {
    configure(config) {
      config.plugins.push(new AntdDayjsWebpackPlugin());

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
