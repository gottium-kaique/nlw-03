import styled from 'styled-components/native'
import { Dimensions, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
  flex: 1;
`

export const ImagesContainer = styled.View`
  height: 240;
`

export const Image = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 240;
  resize-mode: 'cover';
`

export const DetailsContainer = styled.View`
  padding: 24;
`

export const Title = styled.Text`
  color: '#4D6F80';
  font-size: 30;
  font-family: 'Nunito Bold';
`

export const Description = styled.Text`
  font-family: 'Nunito Semibold';
  color: '#5c8599';
  line-height: 24;
  margin-top: 16;
`

export const ScheduleContainer = styled.View`
  margin-top: 24;
  flex-direction: 'row';
  justify-content: 'space-between';
`

export const Map = styled(MapView)`
  width: '100%';
  height: 150;
`

export const ContactButton = styled(RectButton)`
  background: '#3CDC8C';
  border-radius: 20;
  flex-direction: 'row';
  justify-content: 'center';
  align-items: 'center';
  height: 56;
  margin-top: 40;
`

export const ContactButtonText = styled.Text`
  font-family: 'Nunito Extrabold';
  color: '#FFF';
  font-size: 16;
  margin-left: 16;
`

export const MapContainer = styled.View`
  border-radius: 20;
  overflow: 'hidden';
  border-width: 1.2;
  border-color: '#B3DAE2';
  margin-top: 40;
  background: '#E6F7FB';
`

export const Separator = styled.View`
  height: 0.8;
  width: '100%';
  background: '#D3E2E6';
  margin: 40 0;
`

export const RoutesContainer = styled(TouchableOpacity)`
  padding: 16;
  align-items: 'center';
  justify-content: 'center';
`

export const RoutesText = styled.Text`
  font-family: 'Nunito Bold';
  color: '#0089a5';
`