export const cn_CN = [
  {
    slug: 'title-and-description',
    name: '标题和描述',
    markdown: `
# 项目标题

简要说明这个项目是做什么的，是为谁做的

`,
  },
  {
    slug: 'installation',
    name: '安装',
    markdown: `
## 安装

使用 npm 安装 my-project

\`\`\`bash
  npm install my-project
  cd my-project
\`\`\`
    `,
  },
  {
    slug: 'logo',
    name: 'Logo',
    markdown: `
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

`,
  },
  {
    slug: 'run-locally',
    name: '在本地运行',
    markdown: `
## 在本地运行

Clone 这个 project

\`\`\`bash
  git clone https://link-to-project
\`\`\`

前往项目目录

\`\`\`bash
  cd my-project
\`\`\`

安装依赖

\`\`\`bash
  npm install
\`\`\`

启动服务器

\`\`\`bash
  npm run start
\`\`\`

`,
  },
  {
    slug: 'screenshots',
    name: '截图',
    markdown: `
## 截图

![App Screenshot](https://dummyimage.com/468x300?text=App+Screenshot+Here)

`,
  },
  {
    slug: 'env-variables',
    name: '环境变量',
    markdown: `
## 环境变量

要运行这个项目，你将需要在你的 .env 文件中添加以下环境变量

\`API_KEY\`

\`ANOTHER_API_KEY\`

`,
  },
  {
    slug: 'features',
    name: '特性',
    markdown: `
## 特性

- 光明/黑暗模式切换
- 在线预览
- 全屏模式
- 跨平台

`,
  },
  {
    slug: 'usage-examples',
    name: '使用方法/示例',
    markdown: `
## 使用方法/示例

\`\`\`javascript
import Component from 'my-project'

function App() {
  return <Component />
}
\`\`\`

`,
  },
  {
    slug: 'api',
    name: 'API 参考',
    markdown: `
## API 参考

#### 获取所有项目

\`\`\`http
  GET /api/items
\`\`\`

| 参数 | 类型     | 描述                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **必选**. 你的 API key |

#### 获取一个项目

\`\`\`http
  GET /api/items/$\{id}
\`\`\`

| 参数 | 类型     | 描述                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **必选**. 要获取的项目的 id |

#### add(num1, num2)

接受两个数字并返回其总和。

`,
  },
  {
    slug: 'contributing',
    name: '贡献',
    markdown: `
## 贡献

我们随时欢迎大家的贡献!

请参阅 \`contributing.md\` 了解如何开始贡献。

请遵守本项目的 \`行为准则\`。

`,
  },
  {
    slug: 'tests',
    name: '运行测试',
    markdown: `
## 运行测试

要运行测试，运行以下命令

\`\`\`bash
  npm run test
\`\`\`

`,
  },
  {
    slug: 'license',
    name: '证书',
    markdown: `
## 证书

[MIT](https://choosealicense.com/licenses/mit/)

`,
  },
  {
    slug: 'badges',
    name: '徽标',
    markdown: `
## 徽标

从以下位置添加徽章：[shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

`,
  },
  {
    slug: 'roadmap',
    name: '路线图',
    markdown: `
## 路线图

- 其他浏览器支持

- 增加更多的集成

`,
  },
  {
    slug: 'authors',
    name: '作者',
    markdown: `
## 作者

- [@octokatherine](https://www.github.com/octokatherine)

`,
  },
  {
    slug: 'acknowledgement',
    name: '致谢',
    markdown: `
## 致谢

 - [非常棒的 Readme 模板](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [非常棒的 README](https://github.com/matiassingers/awesome-readme)
 - [如何写好 readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

`,
  },
  {
    slug: 'support',
    name: '支持',
    markdown: `
## 支持

如需支持，请发送电子邮件至 fake@fake.com 或加入我们的 Slack 频道。

`,
  },
  {
    slug: 'feedback',
    name: '反馈',
    markdown: `
## 反馈

如果你有任何反馈，请联系我们：fake@fake.com

`,
  },
  {
    slug: 'related',
    name: '相关',
    markdown: `
## 相关

以下是一些相关项目

[非常棒的 README](https://github.com/matiassingers/awesome-readme)

`,
  },
  {
    slug: 'demo',
    name: 'Demo',
    markdown: `
## Demo

插入 gif 图片或演示链接

`,
  },
  {
    slug: 'tech',
    name: '技术',
    markdown: `
## 技术栈

**客户端:** React, Redux, TailwindCSS

**服务端:** Node, Express

`,
  },
  {
    slug: 'optimizations',
    name: '优化',
    markdown: `
## 优化

你在你的代码中做了哪些优化？如：重构、性能改进、可访问性

`,
  },
  {
    slug: 'lessons',
    name: '教训',
    markdown: `
## 经验和教育

你在建设这个项目时学到了什么？你遇到了什么挑战，你是如何克服的？

`,
  },
  {
    slug: 'faq',
    name: 'FAQ',
    markdown: `
## FAQ

#### 问题 1

回答 1

#### 问题 2

回答 2

`,
  },
  {
    slug: 'used-by',
    name: '谁在使用',
    markdown: `
## 谁在使用

该项目被以下公司使用:

- 公司 1
- 公司 2

`,
  },
  {
    slug: 'documentation',
    name: '文档',
    markdown: `
## 文档

[文档](https://linktodocumentation)

`,
  },
  {
    slug: 'deployment',
    name: '开发',
    markdown: `
## 开发

要部署这个项目，请运行

\`\`\`bash
  npm run deploy
\`\`\`

`,
  },
  {
    slug: 'appendix',
    name: '附录',
    markdown: `
## 附录

任何额外的信息都在这里

`,
  },
  {
    slug: 'github-profile-intro',
    name: 'Github 简介 - 介绍',
    markdown: `
# 你好, 我是 Katherine! 👋

`,
  },
  {
    slug: 'github-profile-about-me',
    name: 'Github 简介 - 关于',
    markdown: `
## 🚀 关于
我是一个全栈开发...

`,
  },
  {
    slug: 'github-profile-skills',
    name: 'Github 简介 - 技能',
    markdown: `
## 🛠 技能
Javascript, HTML, CSS...

`,
  },
  {
    slug: 'github-profile-links',
    name: 'Github 简介 - 链接',
    markdown: `
## 🔗 链接
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

`,
  },
  {
    slug: 'github-profile-other',
    name: 'Github 简介 - 其他',
    markdown: `
## 其他常见的 Github 简介部分
👩‍💻 我当前就职于...

🧠 我当前在学习...

👯‍♀️ 我希望能在以下方面进行合作...

🤔 我想寻求帮助的是...

💬 向我咨询...

📫 如何联系我...

😄 代名词...

⚡️ 有趣的事情...

`,
  },
  {
    slug: 'colorreference',
    name: '颜色参考',
    markdown: `## 颜色参考

| 颜色             | 十六进制                                                                |
| ----------------- | ------------------------------------------------------------------ |
| 示例颜色 | ![#0a192f](https://dummyimage.com/10/0a192f/white?text=+) #0a192f |
| 示例颜色 | ![#f8f8f8](https://dummyimage.com/10/f8f8f8/white?text=+) #f8f8f8 |
| 示例颜色 | ![#00b48a](https://dummyimage.com/10/00b48a/white?text=+) #00b48a |
| 示例颜色 | ![#00d1a0](https://dummyimage.com/10/00b48a/white?text=+) #00d1a0 |

`,
  },
]
