import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // React StrictMode will re-run some React Hooks by default, which can cause some behavior that feels buggy -- like seeing our random cat pic update multiple times when we first load the app.
  // During my demo, I commented it out to avoid this.
  // For more info, see the docs:
  // https://react.dev/reference/react/StrictMode
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
