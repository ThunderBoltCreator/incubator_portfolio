import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import App from './App'
import {appTheme} from './assets/styles/appTheme'
import {GlobalStyles} from './assets/styles/GlobalStyles'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
)
root.render(
   <React.StrictMode>
      <ThemeProvider theme={appTheme}>
         <App/>
         <GlobalStyles/>
      </ThemeProvider>
   </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
