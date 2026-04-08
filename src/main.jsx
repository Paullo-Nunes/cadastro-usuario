import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './GlobalStyles.js'
import App from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>,
)
