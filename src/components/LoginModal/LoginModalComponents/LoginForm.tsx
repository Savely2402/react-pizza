import React from 'react'

import styles from '../LoginModal.module.scss'

import { LoginInput } from './LoginInput.tsx'

import { ActiveFormType, LoginFormProps } from '../types/LoginModalTypes.ts'

export const LoginForm: React.FC<LoginFormProps> = ({
    activeForm,
    setActiveForm,
}) => {
    const onClickForgotPassword = () => {
        setActiveForm(ActiveFormType.FORGOT_PASSWORD)
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
