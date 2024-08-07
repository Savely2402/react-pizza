import React from 'react'
import { useModal } from '../../hooks/useModal.ts'
import { LoginModal } from '../LoginModal/LoginModal.tsx'
import loginSvg from '../../assets/img/login.svg'

export const HeaderLogin: React.FC = () => {
    const loginModalRef = React.useRef<HTMLDivElement>(null)
    const loginButtonRef = React.useRef<HTMLButtonElement>(null)

    const [openModal, setOpenModal] = useModal([loginModalRef, loginButtonRef])

    return (
        <>
            <button
                ref={loginButtonRef}
                className="header__login"
                onClick={() => setOpenModal(true)}
            >
                <img width="30" height="25" src={loginSvg} alt="Login" />

                <span className="loginText">Вход</span>
            </button>
            {openModal && <LoginModal loginModalRef={loginModalRef} />}
        </>
    )
}
