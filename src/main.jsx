import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import AppRouter from './router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HashRouter>
      <AppRouter /> 
    </HashRouter>
  </StrictMode>,
)
