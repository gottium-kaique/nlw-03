import React, { useRef, useState, FormEvent, ChangeEvent } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet-universal'
import { FiPlus } from 'react-icons/fi'
import { Wrapper, Form, InputBlock } from '../../styles/pages/create-orphanage'
import SideBar from '../../components/SideBar'
import happyMapIcon from '../../utils/map-icon'

import { LeafletMouseEvent } from 'leaflet'

import api from '../../services/api'
import { useRouter } from 'next/router'

const CreateOrphanage: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>()
  const openingHoursRef = useRef<HTMLInputElement>()
  const instructionsRef = useRef<HTMLTextAreaElement>()
  const aboutRef = useRef<HTMLTextAreaElement>()
  const whatsappRef = useRef<HTMLInputElement>()

  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [openOnWeekends, setOpenOnWeekends] = useState(false)

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const { push } = useRouter()

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat: latitude, lng: longitude } = event.latlng
    setPosition({
      latitude,
      longitude,
    })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const data = new FormData()
    const { latitude, longitude } = position

    data.append('name', nameRef.current.value)
    data.append('opening_hours', openingHoursRef.current.value)
    data.append('instructions', instructionsRef.current.value)
    data.append('about', aboutRef.current.value)
    data.append('open_on_weekends', String(openOnWeekends))
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('whatsapp', whatsappRef.current.value)

    images.forEach(image => {
      data.append('images', image)
    })

    console.log(await api.post('orphanages', data))

    push('/success')
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }

    const selectedImages = Array.from(event.target.files)

    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectedImagesPreview)
  }

  return (
    <Wrapper>
      <SideBar />

      <main>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input ref={nameRef} id="name" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="whatsapp">WhatsApp</label>
              <input type="tel" ref={whatsappRef} id="whatsapp" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} ref={aboutRef} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map(image => (
                  <img key={image} src={image} />
                ))}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input
                multiple
                type="file"
                id="image[]"
                onChange={handleSelectImages}
              />
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" ref={instructionsRef} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input id="opening_hours" ref={openingHoursRef} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={openOnWeekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>

                <button
                  type="button"
                  className={!openOnWeekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </InputBlock>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </Form>
      </main>
    </Wrapper>
  )
}

export default CreateOrphanage
