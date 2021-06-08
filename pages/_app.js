import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import { appWithTranslation } from 'next-i18next'

import SEO from '../next-seo.config.js'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="katherinecodes"
        data-description="Support me on Buy me a coffee!"
        data-message=""
        data-color="#FFDD00"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
    </>
  )
}

export default appWithTranslation(MyApp)
