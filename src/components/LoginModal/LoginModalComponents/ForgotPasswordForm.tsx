import React from 'react'

import styles from '../LoginModal.module.scss'
import { LoginInput } from './LoginInput.tsx'

export const ForgotPasswordForm: React.FC = () => {
    return (
        <form className={styles.loginForm__form}>
            <LoginInput
                label="Email:"
                type="email"
                id="register-email"
                name="email"
            />

            <div className={styles.loginForm__submit_row}>
                <button className={styles.loginForm__button_submit}>
                    Восстановить пароль
                </button>
            </div>
        </form>
    )
}
