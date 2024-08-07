import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from '../../assets/img/pizza-logo.svg'

export const HeaderLogo: React.FC = () => {
    return (
        <Link to={'/'}>
            <div className="header__logo">
                <img width="38" src={logoSvg} alt="Pizza logo" />
                <div>
                    <h1>React Pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
        </Link>
    )
}
