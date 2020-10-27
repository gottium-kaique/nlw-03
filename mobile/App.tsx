import React from 'react'
import Routes from './src/routes'
import { 
  Nunito_600SemiBold, 
  Nunito_700Bold, 
  Nunito_800ExtraBold 
} from '@expo-google-fonts/nunito'

import { ThemeProvider } from 'styled-components'

import { useFonts } from 'expo-font'

import theme from './src/theme'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'Nunito Semibold': Nunito_600SemiBold,
    'Nunito Bold': Nunito_700Bold,
    'Nunito Extrabold': Nunito_800ExtraBold,
  })

  if (!fontsLoaded) {
    return null
  }
  
  return (
    <ThemeProvider theme={theme()}>
      <Routes />
    </ThemeProvider>
  )
}

export default App