import React from 'react'
import { createPortal } from 'react-dom'
import styles from './LoginModal.module.scss'

import { LoginHeader } from './LoginModalComponents/LoginHeader.tsx'
import { ForgotPasswordForm } from './LoginModalComponents/ForgotPasswordForm.tsx'
import { LoginTitle } from './LoginModalComponents/LoginTitle.tsx'
import { LoginForm } from './LoginModalComponents/LoginForm.tsx'
import { SignUpForm } from './LoginModalComponents/SignupForm.tsx'

interface LoginModalProps {
    loginModalRef: React.RefObject<HTMLDivElement>
}

export interface ModalComponentsState {
    login: boolean
    forgot_password: boolean
}

export const LoginModal: React.FC<LoginModalProps> = ({ loginModalRef }) => {
    const [activeForm, setActiveForm] = React.useState<ModalComponentsState>({
        login: true,
        forgot_password: false,
    })

    const toggleActiveForm = () => {
        setActiveForm({
            ...activeForm,
            login: !activeForm.login,
        })
    }

    return (
        <>
            {createPortal(
                <div className={styles.loginModal}>
                    <div
                        className={`${styles.loginModal__content} ${styles.loginForm}`}
                        ref={loginModalRef}
                    >
                        {activeForm.forgot_password ? (
                            <>
                                <LoginHeader>
                                    <h2 className={styles.loginForm__title}>
                                        Восстановление пароля
                                    </h2>
                                </LoginHeader>
                                <div className={styles.loginForm__body}>
                                    <ForgotPasswordForm />
                                </div>
                            </>
                        ) : (
                            <>
                                <LoginHeader>
                                    <LoginTitle
                                        activeForm={activeForm}
                                        onClick={toggleActiveForm}
                                    />
                                </LoginHeader>

                                <div className={styles.loginForm__body}>
                                    {activeForm.login ? (
                                        <LoginForm
                                            activeForm={activeForm}
                                            setActiveForm={setActiveForm}
                                        />
                                    ) : (
                                        <SignUpForm />
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}
