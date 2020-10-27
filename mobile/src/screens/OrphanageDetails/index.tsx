import React, { useEffect, useState } from 'react'
import { 
  View,
  ScrollView,
  Text,
  StyleSheet,
  Linking,
} from 'react-native'

import { Marker } from 'react-native-maps'
import { Feather, FontAwesome } from '@expo/vector-icons'
import mapMarkerImg from '../../assets/img/map-marker.png'
import { useRoute } from '@react-navigation/native'
import api from '../../services/api'

import { 
  Container, 
  ImagesContainer, 
  Image, 
  DetailsContainer,
  Title,
  Description,
  ScheduleContainer,
  Map,
  ContactButton,
  ContactButtonText,
  MapContainer,
  Separator,
  RoutesContainer,
  RoutesText,
} from './styles'

interface OrphanageDetailsRouteParams {
  id: number
}

interface Orphanage {
  id: number
  name: string
  latitude: number
  longitude: number
  about: string 
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: {
    id: number
    url: string
  }[]
  whatsapp: string
}

export default function OrphanageDetails() {
  const [orphanage, setOrphanage] = useState<Orphanage>()

  const route = useRoute()
  const params = route.params as OrphanageDetailsRouteParams

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`orphanages/${params.id}`)
      setOrphanage(data)
    })()
  }, [params])

  function handleOpenGoogleMapRoutes() {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`)
  }

  function handleWhatsapp () {
    Linking.openURL(
      `https://api.whatsapp.com/send?phone=${orphanage?.whatsapp}` +
      `&text=Olá,%20quero saber sobre ${orphanage?.name}`
    )
  }
  
  if (!orphanage) {
    return (
      <Container>
        <Description>Carregando...</Description>
      </Container>
    )
  }

  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {orphanage.images.map(image => (
            <Image 
              key={image.id}
              source={{ uri: image.url }} 
            />
          ))}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>
          {orphanage.about}
        </Description>
      
        <MapContainer>
          <Map 
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </Map>

          <RoutesContainer onPress={handleOpenGoogleMapRoutes}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>
      
        <Separator />

        <Title>Instruções para visita</Title>
        <Description>
          {orphanage.instructions}
        </Description>

        <ScheduleContainer>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>
              Segunda à Sexta {orphanage.opening_hours}
            </Text>
          </View>
          {orphanage.open_on_weekends ? (
            <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
              <Feather name="info" size={40} color="#39CC83" />
              <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>
                Atendemos fim de semana
              </Text>
            </View>
          ) : (
            <View style={[styles.scheduleItem, styles.scheduleItemRed]}>
              <Feather name="info" size={40} color="#ff6690" />
              <Text style={[styles.scheduleText, styles.scheduleTextRed]}>
                Não Atendemos fim de semana
              </Text>
          </View>
          )}
        </ScheduleContainer>

        <ContactButton onPress={handleWhatsapp}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>
            Entrar em contato
          </ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  scheduleItem: {
    width: '48%',
    padding: 20,
  },

  scheduleItemBlue: {
    backgroundColor: '#E6F7FB',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    borderRadius: 20,
  },

  scheduleItemGreen: {
    backgroundColor: '#EDFFF6',
    borderWidth: 1,
    borderColor: '#A1E9C5',
    borderRadius: 20,
  },

  scheduleItemRed: {
    backgroundColor: '#fef6f9',
    borderWidth: 1,
    borderColor: '#ffbcd4',
    borderRadius: 20,
  },

  scheduleText: {
    fontFamily: 'Nunito Semibold',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },

  scheduleTextBlue: {
    color: '#5C8599'
  },

  scheduleTextGreen: {
    color: '#37C77F'
  },

  scheduleTextRed: {
    color: '#ff6690'
  },
})