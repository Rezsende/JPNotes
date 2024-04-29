import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import GlobalStyled from './style/global'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme ={theme}>
      <GlobalStyled/>
       <div>
        <h1>ola mundo </h1>
       </div>
    </ThemeProvider>
  </React.StrictMode>,
)
