import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  padding: 44px 24px 24px 24px;
  background: #f9fafc;
  border-bottom-width: 1px;
  border-color: #dde3f0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-family: 'Nunito Semibold';
  color: #8fa7b3;
`

export const BackButton = styled(BorderlessButton)``

export const Close = styled(BorderlessButton)``