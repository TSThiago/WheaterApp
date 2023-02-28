import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './Components/Store'
import { StorageProvider } from './Context/StorageContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StorageProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </StorageProvider>
  </React.StrictMode>,
)
