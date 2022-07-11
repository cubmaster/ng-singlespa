const singleSpaAngularWebpack = require("single-spa-angular/lib/webpack")
  .default;
const path = require("path");
const devHost = "localhost";
const devPort = 4201;
const devUrl = `http://${devHost}:${devPort}`;
module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(
    angularWebpackConfig,
    options
  );

  // Feel free to modify this webpack config however you'd like to
  const customConfig = {

    entry: {
      main: ["/src/styles.scss", "/src/main.single-spa.ts"],
    },
    output: {
      //path: path.resolve(__dirname, "../Assets"),
      filename: "remote.js",
      crossOriginLoading: "anonymous",
      libraryTarget: "umd",
      publicPath: `${devUrl}/`,
      library: "AppComponent",
    },
    externals: [
        "single-spa"
    ],
  };


  const config = { ...singleSpaWebpackConfig, ...customConfig };
  /*
   * DEVELOPMENT MODE CONFIG
   */
  if (config.mode === "development") {
    config.devServer = {
      server: 'http',
      allowedHosts: 'all',
      liveReload: false,
      host: devHost,
      port: devPort,
      historyApiFallback: true,
      static: path.resolve(__dirname, "../Assets"),
     // inline: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  }

  return config;
};
