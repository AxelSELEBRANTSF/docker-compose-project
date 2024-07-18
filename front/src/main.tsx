import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import User from "./User/page.tsx"
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserList from './components/listUser.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/create_user",
    element: <User/>
  }, 
  {
    path: "list_user",
    element: <UserList/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
