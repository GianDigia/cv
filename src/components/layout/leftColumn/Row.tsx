import React from 'react'
import styled from 'styled-components'

import { LeftSectionRow } from '../../../configs/info/types'
import { grey } from '../../../configs/palette'
import ExternalLink from './Link'

const iconWidth = '1.4rem'

const Row: React.FC<LeftSectionRow> = ({ icon: Icon, link, title, value }) => (
  <ExternalLink to={link}>
    <Wrapper>
      <IconWrapper>
        <Icon size={iconWidth} />
      </IconWrapper>

      <Info>
        <div>{title}</div>
        <Value>{value}</Value>
      </Info>
    </Wrapper>
  </ExternalLink>
)

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  border-radius: 0.5em;
`

const IconWrapper = styled.div`
  min-width: ${iconWidth};
`

const Info = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.2rem;
`

const Value = styled.div`
  color: ${grey};
`

export default Row
