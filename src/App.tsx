import React from 'react'
import styled from 'styled-components'

import LeftColumn from './components/layout/LeftColumn'
import RightColumn from './components/layout/RightColumn'

const App: React.FC = () => (
  <A4>
    <Document>
      <LeftColumn />
      <RightColumn />
    </Document>
  </A4>
)

const A4 = styled.div`
  width: 100vw;
  height: 141.2vw;
`

const Document = styled.div`
  display: flex;

  min-height: 100%;
`

export default App
