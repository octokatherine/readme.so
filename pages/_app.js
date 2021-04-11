import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import App, { Container } from 'next/app'

import SEO from '../next-seo.config.js'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Container>
    )
  }
}
