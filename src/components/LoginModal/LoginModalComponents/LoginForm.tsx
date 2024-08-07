import React from 'react'

import styles from '../LoginModal.module.scss'
import { ModalComponentsState } from '../LoginModal.tsx'
import { LoginInput } from './LoginInput.tsx'

interface LoginFormProps {
    activeForm: {
        login: boolean
        forgot_password: boolean
    }
    setActiveForm: React.Dispatch<React.SetStateAction<ModalComponentsState>>
}

export const LoginForm: React.FC<LoginFormProps> = ({
    activeForm,
    setActiveForm,
}) => {
    const onClickForgotPassword = () => {
        setActiveForm({ ...activeForm, forgot_password: true })
    }

    return (
        <form className={styles.loginForm__form}>
            <LoginInput
                label="Email: "
                type="email"
                id="register-email"
                name="email"
            />
            <LoginInput
                label="Пароль: "
                type="password"
                id="register-password"
                name="password"
            />

            <div className={styles.loginForm__submit_row}>
                <button className={styles.loginForm__button_submit}>
                    Войти
                </button>
                <button
                    onClick={onClickForgotPassword}
                    className={`${styles.loginForm__button_aside} ${styles.loginForm__forgot}`}
                >
                    Забыли пароль?
                </button>
            </div>
        </form>
    )
}
