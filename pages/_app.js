import '../styles/globals.css'
import App, { Container } from 'next/app';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config.js';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Container>
    );
  }
}
