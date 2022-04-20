import React from 'react'
import styled, { css } from 'styled-components'

import { isProdCVSite } from '../../common/utils'
import { data } from '../../configs/info/data'
import { black, white } from '../../configs/palette'
import profilePicture from '../../img/profile.jpg'
import Section from './leftColumn/Section'

const Divider = styled.div`
  height: 0.0625em;
  background: ${white};
  margin: 1rem 0;
  opacity: 0.5;
`

const sections = data.leftColumn.sections.map((section, i) => (
  <>
    {i !== 0 && <Divider />}
    <Section key={i} {...section} />
  </>
))

const LeftColumn: React.FC = () => (
  <Wrapper>
    <Img src={profilePicture} />
    {sections}
  </Wrapper>
)

const toPrintStyles = css`
  @media print {
    background: ${white};
    color: ${black};
    border-right: 1px solid ${black};
  }
`

const Wrapper = styled.div`
  flex: 3 1 0;

  background: ${black};
  color: ${white};

  ${isProdCVSite && toPrintStyles}

  padding: 1rem;
`

const Img = styled.img`
  border-radius: 50%;
  max-width: 75%;
  margin: auto;
  display: block;
`

export default LeftColumn
