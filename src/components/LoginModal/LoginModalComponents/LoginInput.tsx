import React from 'react'

import styles from '../LoginModal.module.scss'

interface LoginInputProps {
    label: string
    type: React.HTMLInputTypeAttribute
    id: string
    name: string
}

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
