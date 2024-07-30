import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './redux/store.ts'

import './index.css'
import App from './App.tsx'
import { Home } from './pages/Home.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { Cart } from './pages/Cart.tsx'

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

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
