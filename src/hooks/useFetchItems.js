import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../redux/slices/itemsSlice'

export const useFetchItems = (isSearch) => {
    const { items, isLoading, error } = useSelector((state) => state.items)
    const { sort, categoryId, searchValue } = useSelector(
        (state) => state.filter
    )

    const dispatch = useDispatch()

    React.useEffect(() => {
        const fetchData = async () => {
            if (!isSearch.current) {
                dispatch(fetchItems({ sort, categoryId, searchValue }))
            }

            isSearch.current = false
        }

        fetchData()

        // eslint-disable-next-line
    }, [sort.sortField, sort.sortOrder, categoryId, searchValue])

    return [items, isLoading, error]
}
