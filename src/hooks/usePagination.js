import React from 'react'

import { getPageCount } from './../utils/page.js'
import { useSelector } from 'react-redux'

export const usePagination = (items, limit) => {
    const activePage = useSelector((state) => state.pagination.activePage)

    const activePageItems = React.useMemo(
        () =>
            items.filter(
                (_, index) =>
                    index + 1 >= (activePage - 1) * limit + 1 &&
                    index + 1 <= activePage * limit
            ),
        [items, activePage, limit]
    )

    const pagesAmount = getPageCount(items.length, limit)

    const pagesArray = React.useMemo(
        () =>
            [...new Array(pagesAmount)].map((_, index) => ({
                pageNumber: index + 1,
                isActive: index + 1 === activePage,
            })),
        [pagesAmount, activePage]
    )

    return { activePageItems, pagesArray }
}
