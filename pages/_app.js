import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import { appWithTranslation } from 'next-i18next'

import SEO from '../next-seo.config.js'
import NextNProgress from 'nextjs-progressbar'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress color="#10b981" height={4} />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
