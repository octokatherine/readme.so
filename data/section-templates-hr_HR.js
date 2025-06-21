export const hr_HR = [
    {
      slug: 'title-and-description',
      name: 'Naslov i opis',
      markdown: `
  # Naslov projekta
  
  Kratak opis onoga što projekt radi i kome je namijenjen
  
  `,
    },
    {
      slug: 'installation',
      name: 'Instalacija',
      markdown: `
  ## Instalacija
  
  Instalirajte my-project pomoću npm-a
  
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
      name: 'Pokretanje lokalno',
      markdown: `
  ## Pokretanje lokalno
  
  Klonirajte projekt
  
  \`\`\`bash
    git clone https://link-na-projekt
  \`\`\`
  
  Uđite u direktorij projekta
  
  \`\`\`bash
    cd my-project
  \`\`\`
  
  Instalirajte ovisnosti
  
  \`\`\`bash
    npm install
  \`\`\`
  
  Pokrenite poslužitelj
  
  \`\`\`bash
    npm run start
  \`\`\`
  
  `,
    },
    {
      slug: 'screenshots',
      name: 'Snimke zaslona',
      markdown: `
  ## Snimke zaslona
  
  ![Snimka aplikacije](https://dummyimage.com/468x300?text=App+Screenshot+Here)
  
  `,
    },
    {
      slug: 'env-variables',
      name: 'Varijable okruženja',
      markdown: `
  ## Varijable okruženja
  
  Za pokretanje ovog projekta potrebno je dodati sljedeće varijable okruženja u svoj .env
  
  \`API_KEY\`
  
  \`ANOTHER_API_KEY\`
  
  `,
    },
    {
      slug: 'features',
      name: 'Značajke',
      markdown: `
  ## Značajke
  
  - Tamna i svijetla tema
  - Pregled u stvarnom vremenu
  - Način cijelog zaslona
  - Višestruka platforma
  
  `,
    },
    {
      slug: 'usage-examples',
      name: 'Primjeri korištenja',
      markdown: `
  ## Primjeri korištenja
  
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
      name: 'API dokumentacija',
      markdown: `
  ## API dokumentacija
  
  #### Dohvati sve stavke
  
  \`\`\`http
    GET /api/items
  \`\`\`
  
  | Parametar    | Tip        | Opis                                |
  | :----------- | :--------- | :---------------------------------- |
  | \`api_key\`  | \`string\` | **Obavezno**. Vaš API ključ         |
  
  #### Dohvati jednu stavku
  
  \`\`\`http
    GET /api/items/$\{id}
  \`\`\`
  
  | Parametar    | Tip        | Opis                                  |
  | :----------- | :--------- | :------------------------------------ |
  | \`id\`       | \`string\` | **Obavezno**. ID stavke koju želite  |
  
  #### add(num1, num2)
  
  Prima dva broja i vraća njihov zbroj.
  
  `,
    },
    {
      slug: 'contributing',
      name: 'Doprinos',
      markdown: `
  ## Doprinos
  
  Doprinosi su uvijek dobrodošli!
  
  Pogledajte \`contributing.md\` za informacije o početku.
  
  Molimo slijedite \`kodeks ponašanja\` ovog projekta.
  
  `,
    },
    {
      slug: 'tests',
      name: 'Pokretanje testova',
      markdown: `
  ## Pokretanje testova
  
  Za pokretanje testova, pokrenite sljedeću naredbu
  
  \`\`\`bash
    npm run test
  \`\`\`
  
  `,
    },
    {
      slug: 'license',
      name: 'Licenca',
      markdown: `
  ## Licenca
  
  [MIT](https://choosealicense.com/licenses/mit/)
  
  `,
    },
    {
      slug: 'badges',
      name: 'Značke',
      markdown: `
  ## Značke
  
  Dodajte značke s nekog mjesta, poput: [shields.io](https://shields.io/)
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
  [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
  
  `,
    },
    {
      slug: 'roadmap',
      name: 'Plan razvoja',
      markdown: `
  ## Plan razvoja
  
  - Poboljšati podršku za preglednike
  
  - Dodati više integracija
  
  `,
    },
    {
      slug: 'authors',
      name: 'Autori',
      markdown: `
  ## Autori
  
  - [@octokatherine](https://www.github.com/octokatherine)
  
  `,
    },
    {
      slug: 'acknowledgement',
      name: 'Zahvale',
      markdown: `
  ## Zahvale
  
   - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
   - [Awesome README](https://github.com/matiassingers/awesome-readme)
   - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
  
  `,
    },
    {
      slug: 'support',
      name: 'Podrška',
      markdown: `
  ## Podrška
  
  Za podršku, pošaljite e-mail na fake@fake.com ili se pridružite našem Slack kanalu.
  
  `,
    },
    {
      slug: 'feedback',
      name: 'Povratne informacije',
      markdown: `
  ## Povratne informacije
  
  Ako imate bilo kakve povratne informacije, javite nam se putem fake@fake.com
  
  `,
    },
    {
      slug: 'related',
      name: 'Povezano',
      markdown: `
  ## Povezano
  
  Pogledajte neke povezane projekte
  
  [Awesome README](https://github.com/matiassingers/awesome-readme)
  
  `,
    },
    {
      slug: 'demo',
      name: 'Demo',
      markdown: `
  ## Demo
  
  Dodajte gif ili poveznicu s demonstracijom
  
  `,
    },
    {
      slug: 'tech',
      name: 'Tehnologije korištene',
      markdown: `
  ## Tehnologije korištene
  
  **Front-end:** React, Redux, TailwindCSS
  
  **Back-end:** Node, Express
  
  `,
    },
    {
      slug: 'optimizations',
      name: 'Optimizacije',
      markdown: `
  ## Optimizacije
  
  Koje ste optimizacije napravili u svom kodu? Npr. refaktoring, poboljšanja performansi, pristupačnost itd.
  
  `,
    },
    {
      slug: 'lessons',
      name: 'Lekcije',
      markdown: `
  ## Lekcije
  
  Što ste naučili gradeći ovaj projekt? Koje ste izazove imali i kako ste ih riješili?
  
  `,
    },
    {
      slug: 'faq',
      name: 'Često postavljana pitanja',
      markdown: `
  ## Često postavljana pitanja
  
  #### Pitanje 1
  
  Odgovor 1
  
  #### Pitanje 2
  
  Odgovor 2
  
  `,
    },
    {
      slug: 'used-by',
      name: 'Koriste',
      markdown: `
  ## Koriste
  
  Ovaj projekt koriste sljedeće tvrtke:
  
  - Tvrtka 1
  - Tvrtka 2
  
  `,
    },
    {
      slug: 'documentation',
      name: 'Dokumentacija',
      markdown: `
  ## Dokumentacija
  
  [Dokumentacija](https://link-na-dokumentaciju)
  
  `,
    },
    {
      slug: 'deployment',
      name: 'Deploy',
      markdown: `
  ## Deploy
  
  Za pokretanje deploya ovog projekta, pokrenite
  
  \`\`\`bash
    npm run deploy
  \`\`\`
  
  `,
    },
    {
      slug: 'appendix',
      name: 'Dodatak',
      markdown: `
  ## Dodatak
  
  Dodajte sve dodatne informacije ovdje
  
  `,
    },
    {
      slug: 'github-profile-intro',
      name: 'GitHub profil - Uvod',
      markdown: `
  # Bok, ja sam Katherine! 👋
  
  `,
    },
    {
      slug: 'github-profile-about-me',
      name: 'GitHub profil - O meni',
      markdown: `
  ## 🚀 O meni
  Ja sam full-stack developer...
  
  `,
    },
    {
      slug: 'github-profile-skills',
      name: 'GitHub profil - Vještine',
      markdown: `
  ## 🛠 Vještine
  Javascript, HTML, CSS...
  
  `,
    },
    {
      slug: 'github-profile-links',
      name: 'GitHub profil - Poveznice',
      markdown: `
  ## 🔗 Poveznice
  [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
  [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
  [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
  
  `,
    },
    {
      slug: 'github-profile-other',
      name: 'GitHub profil - Ostalo',
      markdown: `
  ## Ostale česte sekcije u GitHub profilima
  👩‍💻 Trenutno radim na...
  
  🧠 Učim...
  
  👯‍♀️ Želim surađivati na...
  
  🤔 Trebam pomoć s...
  
  💬 Pitajte me o...
  
  📫 Kako me kontaktirati...
  
  😄 Zamjenice...
  
  ⚡️ Zanimljivosti...
  
  `,
    },
    {
      slug: 'colorreference',
      name: 'Dokumentacija boja',
      markdown: `## Dokumentacija boja
  
  | Boja              | Hex kod                                                    |
  | ----------------- | ---------------------------------------------------------- |
  | Primjer boje      | ![#0a192f](https://dummyimage.com/10/0a192f/white?text=+) #0a192f |
  | Primjer boje      | ![#f8f8f8](https://dummyimage.com/10/f8f8f8/white?text=+) #f8f8f8 |
  | Primjer boje      | ![#00b48a](https://dummyimage.com/10/00b48a/white?text=+) #00b48a |
  | Primjer boje      | ![#00d1a0](https://dummyimage.com/10/00b48a/white?text=+) #00d1a0 |
  
  `,
    },
  ];
  