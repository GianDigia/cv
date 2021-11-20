import React, { useMemo } from 'react'
import styled from 'styled-components'

import { RightColumnSection } from '../../../configs/info/types'
import CircleIcon from './CircleIcon'
import Row from './Row'

const Section: React.FC<RightColumnSection> = ({ icon, items, title }) => {
  const rows = useMemo(
    () =>
      items
        .filter((item) => !item.hidden)
        .map((item, i) => <Row key={i} {...item} />),
    [items]
  )

  return (
    <Wrapper>
      <Header>
        <CircleIcon Icon={icon}></CircleIcon>
        <Title>{title}</Title>
      </Header>
      <Rows>{rows}</Rows>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 1rem 0;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Title = styled.div`
  font-size: 1.5rem;
`

const Rows = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.2rem;
  margin: 0.2rem 0;
`

export default Section
