import React from 'react'
import { useRouter } from 'next/router'
import MapMarkerImg from '../../assets/images/map-marker.svg'
import { FiArrowLeft } from 'react-icons/fi'
import { Wrapper } from './styles'

const SideBar: React.FC = () => {
  const { back } = useRouter()
  return (
    <Wrapper>
      <MapMarkerImg />
      <footer>
        <button type="button" onClick={back}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Wrapper>
  )
}

export default SideBar
