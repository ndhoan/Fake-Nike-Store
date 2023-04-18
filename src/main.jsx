import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/styles.css'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import Store from './pages/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position='top-center' reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>
)
