export const tr_TR = [
  {
    slug: 'title-and-description',
    name: 'Başlık ve Açıklama',
    markdown: `
# Proje Başlığı

Bu projenin ne yaptığı ve kimin için olduğu hakkında kısa bir açıklama

`,
  },
  {
    slug: 'installation',
    name: 'Yükleme',
    markdown: `
## Yükleme 

benim-projem'i npm kullanarak yükleyin

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
    name: 'Bilgisayarınızda Çalıştırın',
    markdown: `
## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

\`\`\`bash
  git clone https://link-to-project
\`\`\`

Proje dizinine gidin

\`\`\`bash
  cd my-project
\`\`\`

Gerekli paketleri yükleyin

\`\`\`bash
  npm install
\`\`\`

Sunucuyu çalıştırın

\`\`\`bash
  npm run start
\`\`\`

  `,
  },
  {
    slug: 'screenshots',
    name: 'Ekran Görüntüleri',
    markdown: `
## Ekran Görüntüleri

![Uygulama Ekran Görüntüsü](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

  `,
  },
  {
    slug: 'env-variables',
    name: 'Ortam Değişkenleri',
    markdown: `
## Ortam Değişkenleri

Bu projeyi çalıştırmak için aşağıdaki ortam değişkenlerini .env dosyanıza eklemeniz gerekecek

\`API_KEY\`

\`ANOTHER_API_KEY\`

  `,
  },
  {
    slug: 'features',
    name: 'Özellikler',
    markdown: `
## Özellikler

- Açık/koyu mod geçişi
- Canlı ön izleme
- Tam ekran modu
- Tüm platformlara destek

  `,
  },
  {
    slug: 'usage-examples',
    name: 'Kullanım/Örnekler',
    markdown: `
## Kullanım/Örnekler

\`\`\`javascript
import Component from 'benim-projem'

function App() {
  return <Component />
}
\`\`\`

  `,
  },
  {
    slug: 'api',
    name: 'API Kullanımı',
    markdown: `
## API Kullanımı

#### Tüm öğeleri getir

\`\`\`http
  GET /api/items
\`\`\`

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Gerekli**. API anahtarınız. |

#### Öğeyi getir

\`\`\`http
  GET /api/items/$\{id}
\`\`\`

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **Gerekli**. Çağrılacak öğenin anahtar değeri |

#### add(num1, num2)

İki sayı alır ve toplamı döndürür.

  `,
  },
  {
    slug: 'contributing',
    name: 'Katkı',
    markdown: `
## Katkı

Katkılara her zaman açığız!

Başlamak \`Contributor.md\'ye bakın.

Lütfen bu projenin \`davranış kurallarına\` uyun.

  `,
  },
  {
    slug: 'tests',
    name: 'Testler',
    markdown: `
## Testler

Testleri çalıştırmak için aşağıdaki komutu çalıştırın

\`\`\`bash
  npm run test
\`\`\`

  `,
  },
  {
    slug: 'license',
    name: 'Lisans',
    markdown: `
## Lisans

[MIT](https://choosealicense.com/licenses/mit/)

  `,
  },
  {
    slug: 'badges',
    name: 'Rozetler',
    markdown: `
## Rozetler

[shields.io](https://shields.io/) Gibi bir yerden rozetler ekleyin.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  `,
  },
  {
    slug: 'roadmap',
    name: 'Yol haritası',
    markdown: `
## Yol haritası

- Ek tarayıcı desteği

- Daha fazla entegrasyon ekleme

  `,
  },
  {
    slug: 'authors',
    name: 'Yazarlar ve Teşekkür',
    markdown: `
## Yazarlar ve Teşekkür

- [@katherinepeterson](https://www.github.com/octokatherine) tasarım ve geliştirme için.

  `,
  },
  {
    slug: 'support',
    name: 'Destek',
    markdown: `
## Destek

Destek için fake@fake.com adresine e-posta gönderin veya Slack kanalımıza katılın.

  `,
  },
  {
    slug: 'feedback',
    name: 'Geri Bildirim',
    markdown: `
## Geri Bildirim

Herhangi bir geri bildiriminiz varsa, lütfen fake@fake.com adresinden bize ulaşın.

  `,
  },
  {
    slug: 'related',
    name: 'İlişkili Projeler',
    markdown: `
## İlişkili Projeler

İşte bazı ilgili projeler

[Awesome README](https://github.com/matiassingers/awesome-readme)

  `,
  },
  {
    slug: 'demo',
    name: 'Demo',
    markdown: `
## Demo

Demoya gif veya bağlantı ekleyin

  `,
  },
  {
    slug: 'tech',
    name: 'Teknoloji',
    markdown: `
## Kullanılan Teknolojiler

**İstemci:** React, Redux, TailwindCSS

**Sunucu:** Node, Express

  `,
  },
  {
    slug: 'optimizations',
    name: 'Optimizasyon',
    markdown: `
## Optimizasyon

Kodunuzda hangi optimizasyonları yaptınız? Örneğin. yeniden düzenleyiciler, performans iyileştirmeleri, erişilebilirlik

  `,
  },
  {
    slug: 'lessons',
    name: 'Çıkarılan Dersler',
    markdown: `
## Çıkarılan Dersler

Bu projeyi inşa ederken neler öğrendiniz? Ne tür zorluklarla karşılaştınız ve bunları nasıl aştınız?

  `,
  },
  {
    slug: 'faq',
    name: 'SSS',
    markdown: `
## Sık Sorulan Sorular

#### Soru 1

Cevap 1

#### Soru 2

Cevap 2

  `,
  },
  {
    slug: 'used-by',
    name: 'Kullananlar',
    markdown: `
## Kullananlar

Bu proje aşağıdaki şirketler tarafından kullanılmaktadır:

- Şirket 1
- Şirket 2

  `,
  },
  {
    slug: 'documentation',
    name: 'Belgelendirme',
    markdown: `
## Belgelendirme

[Belgelendirme](https://linktodocumentation)

  `,
  },
  {
    slug: 'deployment',
    name: 'Dağıtım',
    markdown: `
## Dağıtım

Bu projeyi dağıtmak için çalıştırın

\`\`\`bash
  npm run deploy
\`\`\`

  `,
  },
  {
    slug: 'appendix',
    name: 'Ekler',
    markdown: `
## Ekler

Herhangi bir ek bilgi buraya gelir

  `,
  },
  {
    slug: 'colorreference',
    name: 'Renk Referansı',
    markdown: `## Renk Referansı

| Renk             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| örnek renk | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| örnek renk | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| örnek renk | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| örnek renk | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 | `,
  },
]
