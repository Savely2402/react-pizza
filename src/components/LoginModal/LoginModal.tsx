import React from 'react'
import { createPortal } from 'react-dom'
import styles from './LoginModal.module.scss'

import crossSvg from '../../assets/img/cross.svg'
import { ForgotPasswordForm } from './LoginModalComponents/ForgotPasswordForm.tsx'
import { LoginForm } from './LoginModalComponents/LoginForm.tsx'
import { SignUpForm } from './LoginModalComponents/SignupForm.tsx'
import {
    ActiveFormType,
    FormConfigType,
    LoginModalProps,
} from './types/LoginModalTypes.ts'

export const LoginModal: React.FC<LoginModalProps> = ({
    loginModalRef,
    setOpenModal,
}) => {
    const [activeForm, setActiveForm] = React.useState<ActiveFormType>(
        ActiveFormType.LOGIN
    )

    const toggleActiveForm = () => {
        setActiveForm(
            activeForm === ActiveFormType.LOGIN
                ? ActiveFormType.SIGNUP
                : ActiveFormType.LOGIN
        )
    }

    const onClickCloseModal = () => {
        setOpenModal(false)
    }

    const formConfig: Record<ActiveFormType, FormConfigType> = {
        [ActiveFormType.LOGIN]: {
            title: 'Вход',
            body: (
                <LoginForm
                    activeForm={activeForm}
                    setActiveForm={setActiveForm}
                />
            ),
            toggleText: 'Регистрация',
        },
        [ActiveFormType.SIGNUP]: {
            title: 'Регистрация',
            body: <SignUpForm />,
            toggleText: 'Вход',
        },
        [ActiveFormType.FORGOT_PASSWORD]: {
            title: 'Восстановление пароля',
            body: <ForgotPasswordForm />,
            toggleText: '',
        },
    }

    const currentForm = formConfig[activeForm]

    return (
        <>
            {createPortal(
                <div className={styles.loginModal}>
                    <div
                        className={`${styles.loginModal__content} ${styles.loginForm}`}
                        ref={loginModalRef}
                    >
                        <img
                            onClick={onClickCloseModal}
                            className={styles.crossSvg}
                            src={crossSvg}
                            alt="cross"
                        />

                        <div className={styles.loginForm__header}>
                            <h2 className={styles.loginForm__title}>
                                {currentForm.title}
                            </h2>

                            {activeForm !== ActiveFormType.FORGOT_PASSWORD && (
                                <>
                                    <div className={styles.delimeter}>/</div>

                                    <button
                                        className={
                                            styles.loginForm__button_aside
                                        }
                                        onClick={toggleActiveForm}
                                        type="button"
                                    >
                                        {currentForm.toggleText}
                                    </button>
                                </>
                            )}
                        </div>

                        <div className={styles.loginForm__body}>
                            {currentForm.body}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}
