import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './GlobalStyles.js'
// import App from './pages/Home'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider />
    <GlobalStyles />
  </StrictMode>,
)
