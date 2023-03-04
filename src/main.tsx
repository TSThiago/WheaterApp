import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/styles/index.scss'
import { Provider } from 'react-redux'
import store from './store'
import { StorageProvider } from './store/context/StorageContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StorageProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </StorageProvider>
  </React.StrictMode>,
)
