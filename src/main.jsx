import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import AppRouter from '@/router/index';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HashRouter>
      <AppRouter /> {/* Cambia App por AppRouter */}
    </HashRouter>
  </StrictMode>,
)
