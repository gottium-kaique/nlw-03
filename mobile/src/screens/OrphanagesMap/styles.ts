import styled from 'styled-components/native'
import MapView from 'react-native-maps'
import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export const Wrapper = styled.View`
  flex: 1;
  background: ${props => props.theme.background};
`

export const Map = styled(MapView)`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`

export const CalloutText = styled.Text`
  color: #0089a5;
  font-family: 'Nunito Bold';
  font-size: 14px;
`

export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  padding: 0 20px;
  background-color: 'rgba(255, 255, 255, 0.8)';
  border-radius: 16px;
  justify-content: center;
`

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;
  background: #fff;
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  elevation: 3;
`

export const FooterText = styled.Text`
  color: #8fa7b3;
  font-family: 'Nunito Bold';
`

export const CreateOrphanageButton = styled(RectButton)`
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
  background: #15c3d6;
`