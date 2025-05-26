import { App } from './App'
import { StoreProvider } from './providers/StoreProvider/StoreProvider'
import { createRoot } from 'react-dom/client'

const element = document.getElementById('root')!

const root = createRoot(element)

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
)
