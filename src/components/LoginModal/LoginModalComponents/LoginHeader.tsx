import React from 'react'

import styles from '../LoginModal.module.scss'

interface LoginHeaderProps {
    children: React.ReactNode
}

export const LoginHeader: React.FC<LoginHeaderProps> = ({ children }) => {
    return <div className={styles.loginForm__header}>{children}</div>
}
