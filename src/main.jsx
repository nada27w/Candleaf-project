import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router' 
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

createRoot(document.getElementById('root')).render(
  <Suspense >
    <RouterProvider router={appRouter} /> 
  </Suspense >,
)
