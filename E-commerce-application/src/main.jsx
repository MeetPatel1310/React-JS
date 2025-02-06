import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Redux/Store.js'
import { Provider } from 'react-redux'
import Content from './Components/Hero_section-content/Content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  </StrictMode>,
)
