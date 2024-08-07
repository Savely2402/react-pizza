import React from 'react'
import Search from './Search/index.tsx'
import { HeaderLogin } from './HeaderComponents/HeaderLogin.tsx'
import { HeaderCart } from './HeaderComponents/HeaderCart.tsx'
import { HeaderLogo } from './HeaderComponents/HeaderLogo.tsx'

export const Header: React.FC = React.memo(() => {
    return (
        <div className="header">
            <div className="container">
                <HeaderLogo />
                <Search />
                <HeaderCart />
                <HeaderLogin />
            </div>
        </div>
    )
})

export default Header
