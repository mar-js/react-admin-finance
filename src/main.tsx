import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStateProvider } from 'providers'
import { App } from './App.tsx'
import 'styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>
)
