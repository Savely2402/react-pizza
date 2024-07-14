import React from 'react'

import styles from './Pagination.module.scss'
import { usePagination } from '../../hooks/usePagination'

export const Pagination = ({ items, limit, activePage, setActivePage }) => {
    const { pagesArray } = usePagination(items, limit, activePage)

    return (
        <ul className={styles.root}>
            <span>{'<'}</span>
            {pagesArray.map(({ pageNumber, isActive }) => (
                <li
                    className={
                        isActive
                            ? `${styles.page} ${styles.page__active} `
                            : styles.page
                    }
                    onClick={() => setActivePage(pageNumber)}
                    key={pageNumber}
                >
                    {pageNumber}
                </li>
            ))}
            <span>{'>'}</span>
        </ul>
    )
}
