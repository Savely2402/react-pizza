import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import './scss/app.scss'
import Header from './components/Header/Header.tsx'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default App
