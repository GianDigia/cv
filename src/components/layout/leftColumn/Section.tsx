import React, { useMemo } from 'react'
import styled from 'styled-components'

import { LeftColumnSection } from '../../../configs/info/types'
import Row from './Row'

const Section: React.FC<LeftColumnSection> = ({ items, title }) => {
  const rows = useMemo(
    () => items.map((item, i) => <Row key={i} {...item} />),
    [items]
  )

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Rows>{rows}</Rows>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 2rem 0;
`

const Title = styled.div`
  font-size: 1.5rem;
`

const Rows = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  margin: 1.5rem 0;
`

export default Section
