import React from 'react'

import { getPageCount } from '../utils/page.ts'
import { useAppSelector } from './hooks.ts'

interface PagesArray {
    pageNumber: number
    isActive: boolean
}

interface usePaginationResult {
    activePageItems: React.JSX.Element[]
    pagesArray: PagesArray[]
}

type UsePagination = (
    items: React.JSX.Element[],
    limit: number
) => usePaginationResult

export const usePagination: UsePagination = (items, limit) => {
    const activePage = useAppSelector((state) => state.filter.activePage)

    const activePageItems = React.useMemo<React.JSX.Element[]>(
        () =>
            items.filter(
                (_, index) =>
                    index + 1 >= (activePage - 1) * limit + 1 &&
                    index + 1 <= activePage * limit
            ),
        [items, activePage, limit]
    )

    const pagesAmount = getPageCount(items.length, limit)

    const pagesArray = React.useMemo<PagesArray[]>(
        () =>
            [...new Array(pagesAmount)].map((_, index) => ({
                pageNumber: index + 1,
                isActive: index + 1 === activePage,
            })),
        [pagesAmount, activePage]
    )

    return { activePageItems, pagesArray }
}
