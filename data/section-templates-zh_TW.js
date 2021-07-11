export const zh_TW = [
  {
    slug: 'title-and-description',
    name: '標題與描述',
    markdown: `
# 專案標題

簡要描述專案的標題與使用者

`,
  },
  {
    slug: 'installation',
    name: '安裝',
    markdown: `
## 安裝

使用 npm 安裝 \`my-project\`

\`\`\`bash
  npm install my-project
  cd my-project
\`\`\`
    `,
  },
  {
    slug: 'logo',
    name: '標誌',
    markdown: `
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

    `,
  },
  {
    slug: 'run-locally',
    name: '本地執行',
    markdown: `
## 本地執行

克隆這個專案

\`\`\`bash
  git clone https://link-to-project
\`\`\`

進入專案目錄

\`\`\`bash
  cd my-project
\`\`\`

安裝依賴項

\`\`\`bash
  npm install
\`\`\`

啟動服務

\`\`\`bash
  npm run start
\`\`\`

  `,
  },
  {
    slug: 'screenshots',
    name: '截圖',
    markdown: `
## 截圖

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

  `,
  },
  {
    slug: 'env-variables',
    name: '環境變數',
    markdown: `
## 環境變數

想要執行這個專案你需要新增如下環境變數到 .env 文件

\`API_KEY\`

\`ANOTHER_API_KEY\`

  `,
  },
  {
    slug: 'features',
    name: '特性',
    markdown: `
## 特性

- 明亮/暗色 模式切換
- 實時預覽
- 全螢幕模式
- 跨平台

  `,
  },
  {
    slug: 'usage-examples',
    name: '用法/範例',
    markdown: `
## 用法/範例

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
    name: 'API 參考',
    markdown: `
## API 參考

#### 取得所有元素

\`\`\`http
  GET /api/items
\`\`\`

| Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

#### 取得一個元素

\`\`\`http
  GET /api/items/$\{id}
\`\`\`

| Parameter | Type | Description |
| :-------- | :------- | :----------------------------- --- |
| \`id\` | \`string\` | **Required**. Id of item to fetch |

#### add(num1, num2)

取得兩數相加之和

  `,
  },
  {
    slug: 'contributing',
    name: '貢獻',
    markdown: `
## 貢獻

一直歡迎新的共享

查看 \`contributing.md\` 來開始.

請保持這個專案的 \`行為守則\`.

  `,
  },
  {
    slug: 'tests',
    name: '進行測試',
    markdown: `
## 進行測試

使用一下命令進行測試

\`\`\`bash
  npm run test
\`\`\`

  `,
  },
  {
    slug: 'license',
    name: '許可證',
    markdown: `
## 許可證

[MIT](https://choosealicense.com/licenses/mit/)

  `,
  },
  {
    slug: 'badges',
    name: '徽章',
    markdown: `
## 徽章

新增從什麼地方來的徽章,比如: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/ master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  `,
  },
  {
    slug: 'roadmap',
    name: '路線圖',
    markdown: `
## 路線圖

- 補充瀏覽器支援

- 新增更多套件

  `,
  },
  {
    slug: 'authors',
    name: '作者',
    markdown: `
## 作者

- [@katherinepeterson](https://www.github.com/katherinepeterson)

  `,
  },
  {
    slug: 'acknowledgement',
    name: '致謝',
    markdown: `
## 致謝

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

  `,
  },
  {
    slug: 'support',
    name: '支援',
    markdown: `
## 支援

發送 email 到 fake@fake.com 或者加入我們的 Slack 頻道來獲得支援

  `,
  },
  {
    slug: 'feedback',
    name: '反饋',
    markdown: `
## 反饋

如果你有什麼反饋請使用 fake@fake.com 聯絡我們

  `,
  },
  {
    slug: 'related',
    name: '關聯',
    markdown: `
## 關聯

這裡有一些關聯專案

[Awesome README](https://github.com/matiassingers/awesome-readme)

  `,
  },
  {
    slug: 'demo',
    name: '示範',
    markdown: `
## 示範

插入一個用於示範的動態圖或連結

  `,
  },
  {
    slug: 'tech',
    name: '技術',
    markdown: `
## 相關技術

**客戶端:** React, Redux, TailwindCSS

**服務端:** Node, Express

  `,
  },
  {
    slug: 'optimizations',
    name: '優化',
    markdown: `
## 優化

你在專案裡進行了什麼優化麼? 比如: 重構, 性能改進, 可訪問性優化

  `,
  },
  {
    slug: 'lessons',
    name: '經驗教訓',
    markdown: `
## 得到的經驗教訓

你從打包這個專案中獲得了什麼經驗教學麼? 你遇到了哪些挑戰,你又是怎麼克服他們的?

  `,
  },
  {
    slug: 'faq',
    name: '常見問題',
    markdown: `
## 常見問題

#### 問題 1

答案 1

#### 問題 2

答案 2

  `,
  },
  {
    slug: 'used-by',
    name: '使用者',
    markdown: `
## 使用者

這個專案被如下公司使用:

- 公司 1
- 公司 2

  `,
  },
  {
    slug: 'documentation',
    name: '文件',
    markdown: `
## 文件

[文件](https://linktodocumentation)

  `,
  },
  {
    slug: 'deployment',
    name: '部署',
    markdown: `
## 部署

執行如下命令部署專案

\`\`\`bash
  npm run deploy
\`\`\`

  `,
  },
  {
    slug: 'appendix',
    name: '附錄',
    markdown: `
## 附錄

在這裡新增附錄資訊

  `,
  },
]
