export const zh_TW = [
  {
    slug: 'title-and-description',
    name: '標題與描述',
    markdown: `
# 專案標題

簡單的描述專案內容以及是為誰而做的。

`,
  },
  {
    slug: 'installation',
    name: '安裝',
    markdown: `
## 安裝

使用 npm 安裝 my-project

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
    name: '在本地端執行',
    markdown: `
## 在本地端執行

Clone 這個專案

\`\`\`bash
  git clone https://link-to-project
\`\`\`

進入專案目錄

\`\`\`bash
  cd my-project
\`\`\`

安裝相依套件

\`\`\`bash
  npm install
\`\`\`

啟動伺服器

\`\`\`bash
  npm run start
\`\`\`

`,
  },
  {
    slug: 'screenshots',
    name: '截圖畫面',
    markdown: `
## 截圖畫面

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

`,
  },
  {
    slug: 'env-variables',
    name: '環境變數',
    markdown: `
## 環境變數

在執行專案前，你需要新增下列環境變數至你的 .env 檔

\`API_KEY\`

\`ANOTHER_API_KEY\`

`,
  },
  {
    slug: 'features',
    name: '特色',
    markdown: `
## 特色

- 亮/暗模式切換
- 動態預覽
- 全螢幕模式
- 跨平台支援

`,
  },
  {
    slug: 'usage-examples',
    name: '使用方法/範例',
    markdown: `
## 使用方法/範例

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
    name: 'API Reference',
    markdown: `
## API Reference

#### 獲取所有 items

\`\`\`http
  GET /api/items
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

#### 獲取單一 item

\`\`\`http
  GET /api/items/$\{id}
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

`,
  },
  {
    slug: 'contributing',
    name: '貢獻',
    markdown: `
## 貢獻

所有的貢獻都很歡迎!

開始之前，請先閱讀 \`contributing.md\`。

請遵守本專案的 \`行為守則\`。

`,
  },
  {
    slug: 'tests',
    name: '執行測試',
    markdown: `
## 執行測試

請執行下面的指令來執行測試

\`\`\`bash
  npm run test
\`\`\`

`,
  },
  {
    slug: 'license',
    name: '授權許可',
    markdown: `
## 授權許可

[MIT](https://choosealicense.com/licenses/mit/)

`,
  },
  {
    slug: 'badges',
    name: '徽章',
    markdown: `
## 徽章

從某個地方來新增徽章，像是：[shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

`,
  },
  {
    slug: 'roadmap',
    name: '路線圖',
    markdown: `
## 路線圖

- 額外的瀏覽器支援

- 增加更多的功能

`,
  },
  {
    slug: 'authors',
    name: '作者',
    markdown: `
## 作者

- [@katherinepeterson](https://www.github.com/octokatherine)

`,
  },
  {
    slug: 'acknowledgement',
    name: '感謝',
    markdown: `
## 感謝

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

`,
  },
  {
    slug: 'support',
    name: '支持',
    markdown: `
## 支持

若您想要支持我們，可以寄信至 fake@fake.com 或是加入我們的 slack 頻道。

`,
  },
  {
    slug: 'feedback',
    name: '回饋',
    markdown: `
## 回饋

如果您有任何回饋，可以寄信至 fake@fake.com。

`,
  },
  {
    slug: 'related',
    name: '相關專案',
    markdown: `
## 相關專案

以下是一些相關的專案

[Awesome README](https://github.com/matiassingers/awesome-readme)

`,
  },
  {
    slug: 'demo',
    name: '展示',
    markdown: `
## 展示

插入 gif 或是連結來展示您的專案

`,
  },
  {
    slug: 'tech',
    name: '使用到的技術',
    markdown: `
## 使用到的技術

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

`,
  },
  {
    slug: 'optimizations',
    name: '優化',
    markdown: `
## 優化

您對您的程式碼執行了什麼優化? 舉例：重構，效能提升，網頁親和力

`,
  },
  {
    slug: 'lessons',
    name: '學習到的知識',
    markdown: `
## 學習到的知識

您在建造這個專案時學習到了什麼，遇到了什麼困難，並且是如何克服這些困難的?

`,
  },
  {
    slug: 'faq',
    name: '問與答',
    markdown: `
## 問與答

#### 問題 1

回答 1

#### 問題 2

回答 2

`,
  },
  {
    slug: 'used-by',
    name: '誰在使用',
    markdown: `
## 誰在使用

這個專案有以下幾間公司在使用：

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
    name: '部屬',
    markdown: `
## 部屬

請執行以下指令來部屬這項專案

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

任何額外的資訊都可以放在這裡

`,
  },
  {
    slug: 'github-profile-intro',
    name: 'Github 簡介 - 介紹',
    markdown: `
# 你好, 我是 Katherine! 👋

`,
  },
  {
    slug: 'github-profile-about-me',
    name: 'Github 簡介 - 關於我',
    markdown: `
## 🚀 關於我
我是一個全端開發者...

`,
  },
  {
    slug: 'github-profile-skills',
    name: 'Github 簡介 - 技能樹',
    markdown: `
## 🛠 技能樹
Javascript, HTML, CSS...

`,
  },
  {
    slug: 'github-profile-links',
    name: 'Github 簡介 - 連結',
    markdown: `
## 🔗 連結
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherinempeterson.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

`,
  },
  {
    slug: 'github-profile-other',
    name: 'Github 簡介 - 其他',
    markdown: `
## 其他常見的 Github 簡介
👩‍💻 我目前工作的地方是...

🧠 我現在正在學習...

👯‍♀️ 我正在尋找合作...

🤔 我需要幫助...

💬 向我詢問...

📫 如何聯絡我...

😄 代名詞...

⚡️ 有趣的事實...

`,
  },
  {
    slug: 'colorreference',
    name: 'Color Reference',
    markdown: `## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

`,
  },
]
