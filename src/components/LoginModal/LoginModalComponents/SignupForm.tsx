import React from 'react'

import styles from '../LoginModal.module.scss'
import { LoginInput } from './LoginInput.tsx'

export const SignUpForm: React.FC = () => {
    return (
        <form className={styles.loginForm__form}>
            <LoginInput
                label="Email: "
                type="email"
                id="register-email"
                name="email"
            />
            <LoginInput
                label="Имя пользователя: "
                type="text"
                id="register-displayName"
                name="displayName"
            />
            <LoginInput
                label="Пароль: "
                type="password"
                id="register-password"
                name="password"
            />

            <div className={styles.submit_row}>
                <button className={styles.loginForm__button_submit}>
                    Зарегистрироваться
                </button>
            </div>
        </form>
    )
}
