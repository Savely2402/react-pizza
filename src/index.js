import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Cart } from './pages/Cart'

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/cart', element: <Cart /> },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)
