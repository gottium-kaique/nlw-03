import { useColorScheme } from 'react-native'

export interface ThemeInterface {
  background: string
  textColor: string
}

function getTheme() {
  const scheme = useColorScheme()
  const theme = {
    background: scheme === 'dark' ? '#333' : '#fff',
    textColor: scheme === 'dark' ? '#fff' : '#333'
  }

  return theme
}

export default getTheme