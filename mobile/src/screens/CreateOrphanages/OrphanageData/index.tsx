import React, { useState } from 'react'
import { 
  StyleSheet,
  Switch,
  TouchableOpacity, 
} from 'react-native'

import { 
  Container, 
  Title, 
  Label, 
  Input, 
  NextButton,
  NextButtonText,
  UploadedImages,
  UploadedImagesContainer,
  SwitchContainer,
  ImagesInput,
} from './styles'

import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import api from '../../../services/api'

interface OrphanageRouteParams {
  position: {
    latitude: number
    longitude: number
  }
}

export default function OrphanageData() {
  const [name, setName] = useState('')
  const [instructions, setInstructions] = useState('')
  const [about, setAbout] = useState('')
  const [openingHours, setOpeningHours] = useState('')
  const [openOnWeekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<string[]>([])
  
  const route = useRoute()
  const params = route.params as OrphanageRouteParams

  const navigation = useNavigation()

  async function handleCreateOrphanage() {
    const { latitude, longitude } = params.position

    const data = new FormData()

    data.append('name', name)
    data.append('instructions', instructions)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('about', about)
    data.append('opening_hours', openingHours)
    data.append('open_on_weekends', String(openOnWeekends))

    images.forEach((image, index) => {
      data.append('images', {
        name: `${image}_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any)
    })

    await api.post('orphanages', data)
    navigation.navigate('OrphanagesMap')
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync()

    if (status !== "granted") {
      alert("Eita precisamos de acesso ás suas fotos.")
      return 
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })

    if (result.cancelled) return

    const { uri: image } = result
    setImages([...images, image])
  }

  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input
        value={name}
        onChangeText={setName}
      />

      <Title>Sobre</Title>
      <Input
        style={{ height: 110 }}
        value={about}
        onChangeText={setAbout}
        multiline
      />

      <Label>Whatsapp</Label>
      <Input placeholder="Whatsapp" />

      <Label>Fotos</Label>
      <UploadedImagesContainer>
        {images.map(image => (
          <UploadedImages 
            key={image}
            source={{uri: image}} 
          />
        ))}
      </UploadedImagesContainer>
      <ImagesInput
        onPress={handleSelectImages}
      >
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input
        style={{ height: 110 }}
        value={instructions}
        onChangeText={setInstructions}
        multiline
      />

      <Label>Horario de visitas</Label>
      <Input
        value={openingHours}
        onChangeText={setOpeningHours}
      />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch 
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={openOnWeekends}
          onValueChange={setOpenOnWeekends}
        />
      </SwitchContainer>

      <NextButton onPress={handleCreateOrphanage}>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  )
}