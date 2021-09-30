const path = require("path");
module.exports = {
  title: "Nulls world",
  dest: "public",
  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    logo: "/oz_main_color.svg",
    nav: [
      {
        text: "Products",
        custom: true,
        items: [
          { text: "Contracts", des: "A Solidity library of reusable and secure smart contracts", link: "/contracts" },
          { text: "Defender", des: "A platform to automate smart contract operations", link: "/defender" },
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
    footer: [
      {
        title: "Products",
        content: [
          {
            text: "Contracts",
            link: "#",
          },
          {
            text: "Defender",
            link: "#",
          },
        ],
      },
      {
        title: "Security",
        content: [
          {
            text: "Audits",
            link: "#",
          },
          {
            text: "Request a security audit",
            link: "#",
          },
        ],
      },
      {
        title: "Learn",
        content: [
          {
            text: "Docs",
            link: "#",
          },
          {
            text: "Community Forum",
            link: "#",
          },
          {
            text: "Ethernaut",
            link: "#",
          },
        ],
      },
      {
        title: "Company",
        content: [
          {
            text: "About Us",
            link: "#",
          },
          {
            text: "Jobs",
            link: "#",
          },
          {
            text: "Github",
            link: "#",
          },
          {
            text: "Twitter",
            link: "#",
          },
          {
            text: "Discord",
            link: "#",
          },
          {
            text: "Logo Kit",
            link: "#",
          },
        ],
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
