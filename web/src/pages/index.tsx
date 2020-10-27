import React from 'react'
import {
  Wrapper,
  ContentWrapper,
  Title,
  Description,
  Location,
  EnterApp,
} from '../styles/pages/landing'

import { FiArrowRight } from 'react-icons/fi'

import LogoImg from '../assets/images/logo.svg'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <LogoImg />
        <main>
          <Title>Leve felicidade para o mundo!</Title>
          <Description>
            Visite orfanatos e mude o dia de muitas crianças.
          </Description>
        </main>
        <Location>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </Location>
        <EnterApp href="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </EnterApp>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Home
