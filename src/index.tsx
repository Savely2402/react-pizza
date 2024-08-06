import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store.ts'

import './index.css'
import App from './App.tsx'
import { Home } from './pages/Home.tsx'
import { NotFound } from './pages/NotFound.tsx'

const Cart = React.lazy(() =>
    import(/*webpackChunkName: "Cart"*/ './pages/Cart.tsx').then((module) => ({
        default: module.Cart,
    }))
)

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            {
                path: '/cart',
                element: (
                    <Suspense fallback={<div>Загрузка ...</div>}>
                        <Cart />
                    </Suspense>
                ),
            },
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
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>
)
