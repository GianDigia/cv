import React from 'react'
import styled from 'styled-components'

import { data } from '../../configs/info/data'
import { white } from '../../configs/palette'
import Section from './rightColumn/Section'

const { sections, subtitle, title } = data.rightColumn
const mappedSections = sections.map((section, i) => (
  <Section key={i} {...section} />
))

const RightColumn: React.FC = () => (
  <Wrapper>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    {mappedSections}
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 7 1 0;

  background: ${white};

  padding: 1rem;
`

const Title = styled.div`
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  margin-top: 4rem;
`

const Subtitle = styled.div`
  font-size: 1.2rem;
`

export default RightColumn
