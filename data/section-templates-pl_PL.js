export const pl_PL = [
  {
    slug: 'title-and-description',
    name: 'Tytuł i opis',
    markdown: `
# Tytuł projektu

Krótki opis do czego służy ten projekt i jak powinno się go używać

`,
  },
  {
    slug: 'installation',
    name: 'Instalacja',
    markdown: `
## Instalacja

Zainstaluj my-project za pomocą npm'a

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
    name: 'Uruchom lokalnie',
    markdown: `
## Uruchom lokalnie

Sklonuj ten projekt

\`\`\`bash
  git clone https://link-do-projektu
\`\`\`

Przejdź do katalogu z projektem

\`\`\`bash
  cd my-project
\`\`\`

Zainstaluj zależności (dependencies) z npm'a

\`\`\`bash
  npm install
\`\`\`

Wystartuj serwer

\`\`\`bash
  npm run start
\`\`\`

`,
  },
  {
    slug: 'screenshots',
    name: 'Zrzuty ekranu',
    markdown: `
## Zrzuty ekranu

![App Screenshot](https://via.placeholder.com/468x300?text=Zdjecie+Aplikacji)

`,
  },
  {
    slug: 'env-variables',
    name: 'Zmienne środowiskowe',
    markdown: `
## Zmienne środowiskowe

By uruchomić ten projekt będziesz musiał dodać następujące zmienne środowiskowe do swojego pliku .env

\`API_KEY\`

\`ANOTHER_API_KEY\`

`,
  },
  {
    slug: 'features',
    name: 'Funkcjonalność',
    markdown: `
## Funkcjonalność

- Jasny/ciemny motyw
- Podgląd na żywo
- Tryb pełnoekranowy
- Międzyplatformowość

`,
  },
  {
    slug: 'usage-examples',
    name: 'Zastosowanie/Przykłady',
    markdown: `
## Zastosowanie/Przykłady

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
    name: 'Odniesienia API',
    markdown: `
## Odniesienia API

#### Pobierz wszystkie produkty

\`\`\`http
  GET /api/produkty
\`\`\`

| Parametr | Typ     | Opis                |
| :-------- | :------- | :------------------------- |
| \`klucz_api\` | \`string\` | **Wymagane**. Twój klucz API |

#### Get item

\`\`\`http
  GET /api/items/$\{id}
\`\`\`

| Parametr | Typ     | Opis                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **Wymagane**. Id przedmiotu do pobrania |

#### add(num1, num2)

Pobiera dwie cyfry i zwraca ich sumę.

`,
  },
  {
    slug: 'contributing',
    name: 'Współdziałanie',
    markdown: `
## Współdziałanie

Kontrybutorzy są zawsze miło widziani!

Sprawdź \`contributing.md\` by dowiedzieć się jak zacząć.

Prosimy o stosowanie się do \`zasad postępowania\` projektu.

`,
  },
  {
    slug: 'tests',
    name: 'Przeprowadzanie testów',
    markdown: `
## Przeprowadzanie testów

Aby przeprowadzić test, wpisz następujące komendy

\`\`\`bash
  npm run test
\`\`\`

`,
  },
  {
    slug: 'license',
    name: 'Licencja',
    markdown: `
## Licencja

[MIT](https://choosealicense.com/licenses/mit/)

`,
  },
  {
    slug: 'badges',
    name: 'Odznaki',
    markdown: `
## Odznaki

Dodaj odznakę, na przykład ze strony: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

`,
  },
  {
    slug: 'roadmap',
    name: 'Planowane aktualizacje',
    markdown: `
## Planowane aktualizacje

- Wsparcie dodatkowych przeglądarek

- Dodanie większej integralności

`,
  },
  {
    slug: 'authors',
    name: 'Autorzy',
    markdown: `
## Autorzy

- [@katherinepeterson](https://www.github.com/octokatherine)

`,
  },
  {
    slug: 'acknowledgement',
    name: 'Podziękowania',
    markdown: `
## Podziękowania

 - [Awesome README Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

`,
  },
  {
    slug: 'support',
    name: 'Wsparcie',
    markdown: `
## Wsparcie

Aby otrzymać wsparcie wyślij mail'a na fake@fake.com lub dołącz do naszego kanału na Slack'u.

`,
  },
  {
    slug: 'feedback',
    name: 'Opinia',
    markdown: `
## Opinia

Jeśli masz jakąkolwiek opinie, proszę podziel się nią z nami wysyłając mail'a na fake@fake.com

`,
  },
  {
    slug: 'related',
    name: 'Powiązane',
    markdown: `
## Powiązane

Lista kilku powiązanych projektów

[Awesome README](https://github.com/matiassingers/awesome-readme)

`,
  },
  {
    slug: 'demo',
    name: 'Demo',
    markdown: `
## Demo

Wstaw gif'a lub linka do wersji demo

`,
  },
  {
    slug: 'tech',
    name: 'Techniczne zastosowania',
    markdown: `
## Techniczne zastosowania

**Klient:** React, Redux, TailwindCSS

**Serwer:** Node, Express

`,
  },
  {
    slug: 'optimizations',
    name: 'Optymalizacja',
    markdown: `
## Optymalizacja

Jakich optymalizacji dokonał*ś w swoim kodzie? Np. refaktoryzacja, usprawnienie wydajności, dostępność

`,
  },
  {
    slug: 'lessons',
    name: 'Nauka',
    markdown: `
## Nauka

Czego sie nauczyłeś podczas tworzenia tego projektu? Co sprawiło Ci trudność i jak sobie z tym poradziłeś?

`,
  },
  {
    slug: 'faq',
    name: 'FAQ',
    markdown: `
## FAQ

#### Pytanie 1

Odpowiedź 1

#### Pytanie 2

Odpowiedź 2

`,
  },
  {
    slug: 'used-by',
    name: 'Używane przez',
    markdown: `
## Używane przez

Ten projekt jest używany przez następujące firmy:

- Firma 1
- Firma 2

`,
  },
  {
    slug: 'documentation',
    name: 'Dokumentacja',
    markdown: `
## Dokumentacja

[Dokumentacja](https://linkdodokumentacji)

`,
  },
  {
    slug: 'deployment',
    name: 'Wdrażanie',
    markdown: `
## Wdrażanie

Użyj następującej komendy aby wdrożyć ten projekt

\`\`\`bash
  npm run deploy
\`\`\`

`,
  },
  {
    slug: 'appendix',
    name: 'Dodatkowo',
    markdown: `
## Dodatkowo

Wpisz tu jakiekolwiek dodatkowe informacje

`,
  },
  {
    slug: 'github-profile-intro',
    name: 'Profil GitHub - Przedstawienie',
    markdown: `
# Cześć, jestem Katarzyna! 👋

`,
  },
  {
    slug: 'github-profile-about-me',
    name: 'Profil GitHub - O mnie',
    markdown: `
## 🚀 O mnie
Jestem full stack developerem...

`,
  },
  {
    slug: 'github-profile-skills',
    name: 'Profil GitHub - Umiejętności',
    markdown: `
## 🛠 Umiejętności
Javascript, HTML, CSS...

`,
  },
  {
    slug: 'github-profile-links',
    name: 'Profil GitHub - Linki',
    markdown: `
## 🔗 Linki
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherinempeterson.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

`,
  },
  {
    slug: 'github-profile-other',
    name: 'Profil GitHub - Reszta',
    markdown: `
## Reszta powszechnych sekcji na profilu GitHub'a
👩‍💻 Aktualnie pracuję nad...

🧠 Aktualnie uczę się...

👯‍♀️ Szukam chętnych do współpracy nad...

🤔 Szukam pomocy z...

💬 Zapytaj mnie o...

📫 Jak sie ze mną skontaktować...

😄 Zaimki...

⚡️ Ciekawostka...

`,
  },
  {
    slug: 'colorreference',
    name: 'Odnośniki użytych kolorów',
    markdown: `## Odnośniki użytych kolorów

| Kolor             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Przykładowy kolor | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Przykładowy kolor | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Przykładowy kolor | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Przykładowy kolor | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

`,
  },
]
