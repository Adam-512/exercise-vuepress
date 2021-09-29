const path = require("path");
module.exports = {
  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    logo: "/oz_main_color.svg",
    nav: [
      {
        text: "Products",
        items: [
          { text: "Contracts", link: "/contracts" },
          { text: "Defender", link: "/defender" },
        ],
      },
      { text: "Security Audits", link: "/secure" },
      {
        text: "Learn",
        items: [
          { text: "Docs", link: "/docs" },
          { text: "Community", link: "/community" },
          { text: "Github", link: "/github" },
        ],
      },
      { text: "Company", link: "/company" },
      { text: "News & Events", link: "/news" },
    ],
    sidebar: [
      {
        title: "Group 1", // 必要的
        path: "/foo/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/"],
      },
      {
        title: "Group 2",
        children: [
          /* ... */
        ],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
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
