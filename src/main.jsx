import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'   // 👈 change here
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>   {/* 👈 change here */}
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </HashRouter>
  </StrictMode>
)