import React from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { setItems, setIsLoading, setError } from '../redux/slices/itemsSlice'

export const useFetchItems = (isSearch) => {
    const { items, isLoading, error } = useSelector((state) => state.items)
    const { sort, categoryId, searchValue } = useSelector(
        (state) => state.filter
    )

    const dispatch = useDispatch()

    React.useEffect(() => {
        if (!isSearch.current) {
            dispatch(setIsLoading(true))
            const url = new URL(
                'https://6681539604acc3545a065f15.mockapi.io/items'
            )

            url.searchParams.append('sortBy', sort.sortField)
            url.searchParams.append('order', sort.sortOrder)
            if (searchValue) {
                url.searchParams.append('title', searchValue)
            }

            if (categoryId > 0) {
                url.searchParams.append('category', categoryId)
            }

            axios
                .get(url)
                .then((res) => {
                    const arr = res.data
                    dispatch(setItems(Array.isArray(arr) ? arr : []))
                })
                .catch((err) => {
                    dispatch(setError(err.message))
                    dispatch(setItems([]))
                })
                .finally(() => {
                    dispatch(setIsLoading(false))
                })
        }

        isSearch.current = false
        // eslint-disable-next-line
    }, [sort.sortField, sort.sortOrder, categoryId, searchValue])

    return [items, isLoading, error]
}
