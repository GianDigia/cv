import React from 'react'
import styled from 'styled-components'

import { DatesType } from '../../../configs/info/types'

const Dates: React.FC<DatesType> = ({ from, to }) => {
  const text = from === to ? from : `${from} - ${to || 'Now'}`

  return <Wrapper>{text}</Wrapper>
}

const Wrapper = styled.div`
  ::after {
    content: '|';
    margin: 0 0.3rem;
  }
`

export default Dates
