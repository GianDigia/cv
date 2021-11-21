import React from 'react'
import styled, { css } from 'styled-components'

import { isProdCVSite } from '../../../common/utils'
import { black } from '../../../configs/palette'

interface LinkProps {
  to: string
  className?: string
}

const Link: React.FC<LinkProps> = ({ children, className, to }) => (
  <Anchor
    className={className}
    href={to}
    target={'_blank'}
    rel='noopener noreferrer'
  >
    {children}
  </Anchor>
)

const toPrintStyles = css`
  @media print {
    color: ${black} !important;
  }
`

const Anchor = styled.a`
  text-decoration: none;
  margin-left: 0.4em;

  color: #757575;

  &:hover {
    color: #2c2cdb;
  }

  transition: color 150ms linear;

  ${isProdCVSite && toPrintStyles}
`

export default Link
