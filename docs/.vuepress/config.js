const path = require("path");
module.exports = {
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: `https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css`,
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  dest: "public",
  locales: {
    "/": {
      lang: "en-us",
      title: "Nulls world",
      description: "Nulls world",
    },
    "/zh-cn/": {
      lang: "zh-cn",
      title: "Nulls 世界",
      description: "Nulls 世界",
    },
  },
  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    logo: "/oz_main_color.svg",
    locales: {
      "/": {
        selectText: "Language",
        label: "English",
        nav: [
          {
            text: "Products",
            custom: true,
            items: [
              {
                text: "Contracts",
                des:
                  "A Solidity library of reusable and secure smart contracts",
                link: "/contracts",
              },
              {
                text: "Defender",
                des: "A platform to automate smart contract operations",
                link: "/defender",
              },
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
        sidebar: {
          sideBarOfLearn: [
            {
              text: "Community Forum",
              link: "#",
            },
            {
              text: "Docs",
              link: "#",
            },
            {
              text: "Ethernaut",
              link: "#",
            },
          ],
          sideBarOfCompany: [
            {
              text: "About us",
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
              text: "Blog",
              link: "#",
            },
          ],
        },
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
        copyright: {
          copy: "© OpenZeppelin 2020",
          items: [
            {
              text: "隐私政策",
              link: "#",
            },
            {
              text: "使用条款",
              link: "#",
            },
            {
              text: "xxxx",
              link: "#",
            },
          ],
        },
      },
      "/zh-cn/": {
        selectText: "语言",
        label: "简体中文",
        nav: [
          {
            text: "产品",
            custom: true,
            items: [
              {
                text: "合约",
                des: "可重用且安全的智能合约的 Solidity 库",
                link: "/contracts",
              },
              {
                text: "卫士",
                des: "一个自动化智能合约操作的平台",
                link: "/defender",
              },
            ],
          },
          { text: "安全审计", link: "/secure" },
          {
            text: "学习",
            items: [
              { text: "文档", link: "/docs" },
              { text: "社区", link: "/community" },
              { text: "Github", link: "/github" },
            ],
          },
          { text: "公司", link: "/company" },
          { text: "新闻事件", link: "/news" },
        ],
        sidebar: {
          sideBarOfLearn: [
            {
              text: "社区论坛",
              link: "#",
            },
            {
              text: "文档",
              link: "#",
            },
            {
              text: "以太网",
              link: "#",
            },
          ],
          sideBarOfCompany: [
            {
              text: "关于我们",
              link: "#",
            },
            {
              text: "岗位",
              link: "#",
            },
            {
              text: "Github",
              link: "#",
            },
            {
              text: "博客",
              link: "#",
            },
          ],
        },
        footer: [
          {
            title: "产品",
            content: [
              {
                text: "合约",
                link: "#",
              },
              {
                text: "卫士",
                link: "#",
              },
            ],
          },
          {
            title: "安全",
            content: [
              {
                text: "审核",
                link: "#",
              },
              {
                text: "请求安全审计",
                link: "#",
              },
            ],
          },
          {
            title: "学习",
            content: [
              {
                text: "文档",
                link: "#",
              },
              {
                text: "社区",
                link: "#",
              },
              {
                text: "以太网",
                link: "#",
              },
            ],
          },
          {
            title: "公司",
            content: [
              {
                text: "关于我们",
                link: "#",
              },
              {
                text: "岗位",
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
        copyright: {
          copy: "© OpenZeppelin 2020",
          items: [
            {
              text: "隐私政策",
              link: "#",
            },
            {
              text: "使用条款",
              link: "#",
            },
            {
              text: "xxxx",
              link: "#",
            },
          ],
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "./public"),
      },
    },
  },
};
