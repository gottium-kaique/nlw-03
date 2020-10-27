import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiClock, FiInfo, FiArrowLeft } from 'react-icons/fi'
import { Map, Marker, TileLayer } from 'react-leaflet-universal'
import MapMarkerImg from '../../assets/images/map-marker.svg'

import { Wrapper, OrphanageDetails } from '../../styles/pages/orphanage'
import { useRouter } from 'next/router'

import happyMapIcon from '../../utils/map-icon'

import api from '../../services/api'

interface OrphenageDetails {
  name: string
  instructions: string
  about: string
  opening_hours: string
  open_on_weekends: number
  latitude: number
  longitude: number
  whatsapp: string
  images: Array<{
    id: number
    url: string
  }>
}

const Orphanage: React.FC = () => {
  const [orphanage, setOrphanage] = useState<OrphenageDetails>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const { back, push } = useRouter()

  let id: number

  if (process.browser) {
    id = Number(location.href.split('orphanages/')[1])
  }

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get(`orphanages/${id}`)

      console.log(data)

      setOrphanage(data)
    })()
  }, [id])

  function handleWhatsaap() {
    push(
      `https://api.whatsapp.com/send?phone=${orphanage.whatsapp}` +
        `&text=Olá,%20quero saber sobre ${orphanage.name}`,
    )
  }

  if (!orphanage) {
    return <h1>Loading...</h1>
  }

  return (
    <Wrapper>
      <aside>
        <MapMarkerImg />
        <footer>
          <button type="button" onClick={back}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
      <main>
        <OrphanageDetails>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <div className="images">
            {orphanage.images.map((image, index) => {
              return (
                <button
                  onClick={() => setActiveImageIndex(index)}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  key={image.id}
                >
                  <img src={image.url} alt={orphanage.name} />
                </button>
              )
            })}
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                />
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={`https://www.google.com/maps/dir/?api=16&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#ff6690" />
                  Não Atendemos <br />
                  fim de semana
                </div>
              )}
            </div>

            <button
              type="button"
              className="contact-button"
              onClick={handleWhatsaap}
            >
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </OrphanageDetails>
      </main>
    </Wrapper>
  )
}

export default Orphanage
