import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Resources from './pages/Resources.jsx'
import About from './pages/About.jsx'
import FindHome from './pages/FindHome.jsx'
import HomeDetail from './pages/HomeDetail.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "resources",
    element: <Resources />, 
  },
  {
    path: "findHome",
    element: <FindHome />
  },
  {
    path: "about",
    element: <About />, 
  },
  {
    path: "homeDetail",
    element: <HomeDetail />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
