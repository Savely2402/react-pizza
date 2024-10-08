import React from 'react'

import styles from '../LoginModal.module.scss'
import { LoginInputProps } from '../types/LoginModalTypes'

export const LoginInput: React.FC<LoginInputProps> = ({
    label,
    type,
    id,
    name,
}) => {
    return (
        <div className={styles.loginForm__form_control}>
            <label className={styles.loginForm__label} htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                className={styles.loginForm__input}
                id={id}
                name={name}
            />
        </div>
    )
}
