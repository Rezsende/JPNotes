import React from 'react'
import ReactDOM from 'react-dom/client'


import GlobalStyled from './style/global'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme.js'
import {Details} from './Details/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme ={theme}>
      <GlobalStyled/>
      <Details/>
    </ThemeProvider>
  </React.StrictMode>,
)
