import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { LanguageProvider } from './i18n'

const Router = import.meta.env.VITE_GITHUB_PAGES === 'true' ? HashRouter : BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><LanguageProvider><Router><App /></Router></LanguageProvider></React.StrictMode>,
)
