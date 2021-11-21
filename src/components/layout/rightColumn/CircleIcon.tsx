import React from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

import { black } from '../../../configs/palette'

interface CircleIconProps {
  Icon: IconType
}

const CircleIcon: React.FC<CircleIconProps> = ({ Icon }) => (
  <Wrapper>
    <Icon size={'1.2rem'} />
  </Wrapper>
)

const Wrapper = styled.div`
  border: 0.15rem solid ${black};
  padding: 0.2rem;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  display: flex;
`

export default CircleIcon
