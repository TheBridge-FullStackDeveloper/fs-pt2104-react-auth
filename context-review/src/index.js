import React from 'react'
import ReactDOM from 'react-dom'
import StoreProvider from 'components/provider'

import Home from 'pages'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Home />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
