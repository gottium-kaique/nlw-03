import React from 'react'
import { Container, Title, BackButton, Close } from './styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

interface HeaderProps {
  title: string
  showCancel?: boolean
}

const Header: React.FC <HeaderProps> = ({ title, showCancel=true }) => {
  const navigation = useNavigation()

  function handleGoBackToAppHomePage () {
    navigation.navigate('OrphanagesMap')
  }

  return (
    <>
      <Container>
        <BackButton onPress={navigation.goBack}>
          <Feather name="arrow-left" size={24} color="#15b6d6" />
        </BackButton>
        <Title>
          {title}
        </Title>
        {showCancel 
        ? (
        <Close onPress={handleGoBackToAppHomePage}>
          <Feather name="x" size={24} color="#ff669d" />
        </Close>
        ) : (
          <View />
        )}
      </Container>
    </>
  )
}

export default Header