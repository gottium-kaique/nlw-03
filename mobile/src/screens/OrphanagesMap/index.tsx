import React, { useState } from 'react'
import { 
  Wrapper, 
  Map, 
  CalloutText, 
  CalloutContainer,
  Footer,
  FooterText,
  CreateOrphanageButton,
 } from './styles'

import { StatusBar } from 'expo-status-bar'
import { 
  PROVIDER_GOOGLE, 
  Marker, 
  Callout 
} from 'react-native-maps'

import mapMarker from '../../assets/img/map-marker.png'
import { Feather } from '@expo/vector-icons'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import api from '../../services/api'

interface Orphanage {
  id: number
  name: string
  latitude: number
  longitude: number
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
  const navigation = useNavigation()

  function handleNavigateToOrphanageDetails (id: number) {
    navigation.navigate('OrphanageDetails', {
      id,
    })
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition')
  }

  useFocusEffect(() => {
    (async () => {
      const { data } = await api.get('orphanages')

      setOrphanages(data)
    })()
  })

  return (
    <Wrapper>
      <StatusBar style="auto" />
      <Map 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -23.5447202,
          longitude: -46.8737419,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} 
      >
        {orphanages.map(orphanage => {
          return (
          <Marker 
            key={orphanage.id}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }} 
            calloutAnchor={{
              x: 2.8,
              y: 0.9,
            }}
            icon={mapMarker} 
          >
          <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
            <CalloutContainer>
              <CalloutText>{orphanage.name}</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
          )
        })}
      </Map>

      <Footer>
        <FooterText>
          {orphanages.length} Orfanatos Encontrados
        </FooterText>
        <CreateOrphanageButton 
          onPress={handleNavigateToCreateOrphanage} 
        >
          <Feather name="plus" size={20} color ="#fff" />
        </CreateOrphanageButton>
      </Footer>
      
    </Wrapper>
  )
}

export default OrphanagesMap