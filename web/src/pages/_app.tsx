import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'

import 'leaflet/dist/leaflet.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
