import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  aside {
    width: 440px;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .leaflet-container {
    z-index: 5;
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #15c3d6;
    box-shadow: 17px 27px 41px rgba(23, 142, 166, 0.16);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
`

export const Description = styled.p`
  line-height: 28px;
  margin-top: 24px;
`

export const CreateOrphanage = styled.a`
  position: absolute;
  right: 40px;
  bottom: 40px;
  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  z-index: 10;

  &:hover {
    background: #17d6db;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  line-height: 24px;
  strong {
    font-weight: 800;
  }
`
