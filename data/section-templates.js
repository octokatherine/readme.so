export const sectionTemplates = [
  {
    slug: 'title-and-description',
    name: 'Title and Description',
    markdown: `
# Project Title

A brief description of what this project does and who it's for`,
  },
  {
    slug: 'installation',
    name: 'Installation',
    markdown: `
## Installation 

Install my-project with npm

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
    name: 'Run Locally',
    markdown: `
## Run Locally

Clone the project

\`\`\`bash
  git clone https://link-to-project
\`\`\`

Go to the project directory

\`\`\`bash
  cd my-project
\`\`\`

Install dependencies

\`\`\`bash
  npm install
\`\`\`

Start the server

\`\`\`bash
  npm run start
\`\`\`

  `,
  },
  {
    slug: 'screenshots',
    name: 'Screenshots',
    markdown: `
![App Screenshot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/thnlpymky4kq5n54t4np.png)
  `,
  },
  {
    slug: 'env-variables',
    name: 'Environment Variables',
    markdown: `
To run this project, you will need to add the following environment variables to your .env file

\`API_KEY\`

\`ANOTHER_API_KEY\`
  `,
  },
  {
    slug: 'featurs',
    name: 'Features',
    markdown: `
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform
  `,
  },
  {
    slug: 'usage-examples',
    name: 'Usage/Examples',
    markdown: `
## Usage/Examples

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

#### Get all items

\`\`\`http
  GET /api/items
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

#### Get item

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
    name: 'Contributing',
    markdown: `
## Contributing

Contributions are always welcome!

See \`contributing.md\` for ways to get started.

Please adhere to this project's \`code of conduct\`.
  `,
  },
  {
    slug: 'tests',
    name: 'Running Tests',
    markdown: `
## Running Tests

To run tests, run the following command

\`\`\`bash
  npm run test
\`\`\`
  `,
  },
  {
    slug: 'license',
    name: 'License',
    markdown: `
  ## License

[MIT](https://choosealicense.com/licenses/mit/)
  `,
  },
  {
    slug: 'badges',
    name: 'Badges',
    markdown: `
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
  `,
  },
  {
    slug: 'roadmap',
    name: 'Roadmap',
    markdown: `
## Roadmap

- Additional browser support

- Add more integrations
  `,
  },
  {
    slug: 'authors',
    name: 'Authors and Acknowledgement',
    markdown: `
## Authors and Acknowledgement

- [@katherinepeterson](https://www.github.com/katherinepeterson) for development and design.
  `,
  },
  {
    slug: 'support',
    name: 'Support',
    markdown: `
## Support

For support, email fake@fake.com or join our Slack channel.
  `,
  },
  {
    slug: 'feedback',
    name: 'Feedback',
    markdown: `

  `,
  },
  {
    slug: 'related',
    name: 'Related',
    markdown: `
## Related

Here are some related projects

[Awesome README](https://github.com/matiassingers/awesome-readme)
  `,
  },
  {
    slug: 'demo',
    name: 'Demo',
    markdown: `
## Demo

Insert gif or link to demo
  `,
  },
  {
    slug: 'tech',
    name: 'Tech',
    markdown: `
## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express
  `,
  },
  {
    slug: 'optimizations',
    name: 'Optimizations',
    markdown: `
## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility
  `,
  },
  {
    slug: 'lessons',
    name: 'Lessons',
    markdown: `
## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?
  `,
  },
  {
    slug: 'faq',
    name: 'FAQ',
    markdown: `
## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2
  `,
  },
  {
    slug: 'used-by',
    name: 'Used By',
    markdown: `
## Used By

This project is used by the following companies:

- Company 1
- Company 2
  `,
  },
  {
    slug: 'documentation',
    name: 'Documentation',
    markdown: `
## Documentation

[Documentation](https://linktodocumentation)
  `,
  },
  {
    slug: 'deployment',
    name: 'Deployment',
    markdown: `
## Deployment

To deploy this project run

\`\`\`bash
  npm run deploy
\`\`\`
  `,
  },
  {
    slug: 'appendix',
    name: 'Appendix',
    markdown: `
## Appendix

Any additional information goes here
  `,
  },
]
