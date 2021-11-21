import React from 'react'
import styled, { css } from 'styled-components'

import { isProdCVSite } from '../../../common/utils'
import { black } from '../../../configs/palette'

interface LinkProps {
  to?: string
  className?: string
}

const Link: React.FC<LinkProps> = ({ children, className, to }) => {
  if (!to) {
    return <NoLink>{children}</NoLink>
  }

  return (
    <Anchor
      className={className}
      href={to}
      target={'_blank'}
      rel='noopener noreferrer'
    >
      {children}
    </Anchor>
  )
}

const commonStyles = css`
  padding: 0.5em 0;
`

const toPrintStyles = css`
  @media print {
    color: ${black};
  }
`

const NoLink = styled.div`
  ${commonStyles}
`

const Anchor = styled.a`
  text-decoration: none;
  border-radius: 0.5em;
  color: inherit;
  cursor: pointer;

  ${commonStyles}

  transition: padding 100ms linear, background 100ms linear;

  padding: 0.5em 0;

  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(60, 60, 60, 1) 100%
  );
  background-position: 0% 100%;
  background-size: 200% 100%;

  &:hover {
    background-position: 100% 100%;
    padding: 0.5em;
  }

  ${isProdCVSite && toPrintStyles}
`

export default Link
