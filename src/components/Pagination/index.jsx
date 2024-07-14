import React from 'react'

import styles from './Pagination.module.scss'
import { usePagination } from '../../hooks/usePagination'

import { setActivePage } from '../../redux/slices/paginationSlice'
import { useDispatch } from 'react-redux'

export const Pagination = ({ items, limit }) => {
    const dispatch = useDispatch()
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
