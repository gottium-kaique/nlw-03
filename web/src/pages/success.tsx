import React, { useState, useEffect } from 'react'
import { Wrapper, Title, Time } from '../styles/pages/success'
import SuccessImg from '../assets/images/success.png'

import { useRouter } from 'next/router'

const Success: React.FC = () => {
  const { push } = useRouter()
  const [time, setTime] = useState(3)

  useEffect(() => {
    if (time == 0) {
      push('/app')
      return
    }

    setTimeout(() => {
      setTime(time - 1)
    }, 1000)
  }, [time])

  return (
    <Wrapper>
      <img src={SuccessImg} />
      <Title>Sucesso!</Title>
      <Time>Você vai ser redirecionado em {time} segundos.</Time>
    </Wrapper>
  )
}

export default Success
