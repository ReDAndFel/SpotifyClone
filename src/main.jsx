import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SongProvider } from './hooks/SongProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <SongProvider>
            <App />
        </SongProvider>
    </BrowserRouter>
)
