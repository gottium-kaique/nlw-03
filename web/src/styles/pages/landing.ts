import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 680px;
  max-width: 1100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  background: url("./landing.svg") no-repeat 80% center;
  main {
    max-width: 350px;
  }
`

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`

export const Description = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`

export const Location = styled.div`
  position: absolute;
  right: 0;
  font-size: 24px;
  line-height: 34px;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: right;
  strong {
    font-weight: 800;
  }
`

export const EnterApp = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 80px;
  width: 80px;
  background: #ffd666;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s;

  &:hover {
    background: #96feff;
  }
`