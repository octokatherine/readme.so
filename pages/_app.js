import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import { appWithTranslation } from 'next-i18next'

import SEO from '../next-seo.config.js'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
