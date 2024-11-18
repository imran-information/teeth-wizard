import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './routers/Router.jsx'
import AuthProvider from './components/provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider provider={<RouterProvider router={router}></RouterProvider>}></AuthProvider>
  </StrictMode>,
)
