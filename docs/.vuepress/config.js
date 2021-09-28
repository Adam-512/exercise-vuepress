const path = require("path");
module.exports = {
  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "./public"),
      },
    },
  },
};
