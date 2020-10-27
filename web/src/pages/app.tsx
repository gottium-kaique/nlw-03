/* eslint @typescript-eslint/no-var-requires: 'off' */

import React, { useEffect, useState } from 'react'
import {
  Wrapper,
  Title,
  Description,
  CreateOrphanage,
  Footer,
} from '../styles/pages/app'

import { FiArrowRight } from 'react-icons/fi'
import { useRouter } from 'next/router'

import MapMarkerImg from '../assets/images/map-marker.svg'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal'
import { Icon } from 'leaflet'

import api from '../services/api'

interface Orphanage {
  id: number
  latitude: number
  longitude: number
  name: string
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  const { push } = useRouter()
  let mapIcon: Icon

  if (process.browser) {
    const { icon } = require('leaflet')
    mapIcon = icon({
      iconUrl: './map-marker.svg',
      iconSize: [58, 68],
      iconAnchor: [29, 68],
      popupAnchor: [170, 2],
    })
  }

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get('orphanages')
      setOrphanages(data)
    })()
  }, [])

  return (
    <Wrapper>
      <aside>
        <header>
          <MapMarkerImg />
          <Title>Escolha um orfanato no mapa.</Title>
          <Description>
            Muitas crianças estão esperando sua visita :)
          </Description>
        </header>

        <Footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </Footer>
      </aside>

      <Map
        center={[-23.5411169, -46.6415725]}
        zoom={15}
        style={{ width: '100%', height: '100vh' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              position={[orphanage.latitude, orphanage.longitude]}
              icon={mapIcon}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <a href="#" onClick={() => push(`orphanages/${orphanage.id}`)}>
                  <FiArrowRight size={20} color="#fff" />
                </a>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <CreateOrphanage href="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>
    </Wrapper>
  )
}

export default OrphanagesMap
