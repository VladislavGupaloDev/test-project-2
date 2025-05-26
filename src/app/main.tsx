import { App } from './App'
import { StoreProvider } from './providers/StoreProvider/StoreProvider'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const element = document.getElementById('root')!

const root = createRoot(element)

root.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
)
