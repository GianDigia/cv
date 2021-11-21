import React from 'react'
import styled from 'styled-components'

import { RightSectionRow } from '../../../configs/info/types'
import { black } from '../../../configs/palette'
import Dates from './Dates'

const Row: React.FC<RightSectionRow> = ({
  dates,
  description,
  notes,
  title,
}) => (
  <div>
    <Title>
      {dates && <Dates {...dates} />}
      {title}
    </Title>
    <Notes>{notes}</Notes>
    <Description>{description}</Description>
  </div>
)

const Title = styled.div`
  font-weight: 500;
  * {
    display: inline;
  }
`

const Notes = styled.div`
  font-weight: 300;
  font-size: 0.9rem;
  font-style: italic;
  color: ${black};
`

const Description = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: ${black};
  text-align: justify;
`

export default Row
