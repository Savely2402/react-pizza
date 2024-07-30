import React from 'react'

import styles from './Pagination.module.scss'
import { usePagination } from '../../hooks/usePagination.ts'
import { setActivePage } from '../../redux/slices/filterSlice.ts'
import { useAppDispatch } from '../../hooks/hooks.ts'

interface PaginationProps {
    items: React.JSX.Element[]
    limit: number
}

export const Pagination: React.FC<PaginationProps> = ({ items, limit }) => {
    const dispatch = useAppDispatch()
    const { pagesArray } = usePagination(items, limit)

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
                    onClick={() => dispatch(setActivePage(pageNumber))}
                    key={pageNumber}
                >
                    {pageNumber}
                </li>
            ))}
            <span>{'>'}</span>
        </ul>
    )
}
