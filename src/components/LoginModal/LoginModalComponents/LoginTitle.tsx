import React from 'react'

import styles from '../LoginModal.module.scss'
import { ModalComponentsState } from '../LoginModal'

interface LoginTitleProps {
    activeForm: ModalComponentsState
    onClick: () => void
}

export const LoginTitle: React.FC<LoginTitleProps> = ({
    activeForm,
    onClick,
}) => {
    return (
        <>
            <h2 className={styles.loginForm__title}>
                {activeForm.login ? 'Вход' : 'Регистрация'}
            </h2>
            <div className={styles.delimeter}>/</div>

            <button
                className={styles.loginForm__button_aside}
                onClick={onClick}
                type="button"
            >
                {activeForm.login ? 'Регистрация' : 'Вход'}
            </button>
        </>
    )
}
