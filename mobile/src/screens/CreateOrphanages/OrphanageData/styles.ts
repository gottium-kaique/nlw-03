import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
  flex: 1;
`

export const Title = styled.Text`
  color: '#5c8599';
  font-size: 24;
  font-family: 'Nunito Bold';
  margin-bottom: 32;
  padding-bottom: 24;
  border-bottom-width: 0.8;
  border-bottom-color: '#D3E2E6';
`

export const Label = styled.Text`
  color: '#8fa7b3';
  font-family: 'Nunito Semibold';
  margin-bottom: 8;
`

export const Input = styled.TextInput`
  background: '#fff';
  border-width: 1.4;
  border-color: '#d3e2e6';
  border-radius: 20;
  height: 56;
  padding: 18 24;
  margin-bottom: 16;
  text-align-vertical: 'top';
`

export const NextButton = styled(RectButton)`
  background: '#15c3d6';
  border-radius: 20;
  justify-content: 'center';
  align-items: 'center';
  height: 56;
  margin-top: 32;
`

export const NextButtonText = styled.Text`
  font-family: 'Nunito Extrabold';
  font-size: 16;
  color: '#FFF';
`

export const UploadedImages = styled.Image`
  height: 64;
  width: 64;
  border-radius: 20;
  margin-bottom: 32;
  margin-right: 8;
`

export const UploadedImagesContainer = styled.View`
  flex-direction: 'row';
`

export const SwitchContainer = styled.View`
  flex-direction: 'row';
  align-items: 'center';
  justify-content: 'space-between';
  margin-top: 16;
`

export const Comment = styled.Text`
  font-size: 11;
  color: '#8fa7b3';
`

export const ImagesInput = styled.TouchableOpacity`
  background: 'rgba(255, 255, 255, 0.5)';
  border-style: 'dashed';
  border-color: '#96D2F0';
  border-width: 1.4;
  border-radius: 20;
  height: 56;
  justify-content: 'center';
  align-items: 'center';
  margin-bottom: 32;
`