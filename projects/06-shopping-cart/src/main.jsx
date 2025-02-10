import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { FiltersProvider } from './context/filters.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
