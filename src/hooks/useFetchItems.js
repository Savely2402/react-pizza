import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { setItems, setIsLoading, setError } from '../redux/slices/itemsSlice'

export const useFetchItems = () => {
    const { items, isLoading, error } = useSelector((state) => state.items)
    const { sort, order } = useSelector((state) => state.sort)
    const { categoryId, searchValue } = useSelector((state) => state.filter)

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(setIsLoading(true))
        const url = new URL('https://6681539604acc3545a065f15.mockapi.io/items')

        url.searchParams.append('sortBy', sort.sortField)
        url.searchParams.append('order', order)
        if (searchValue) {
            url.searchParams.append('title', searchValue)
        }

        if (categoryId > 0) {
            url.searchParams.append('category', categoryId)
        }

        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((arr) => {
                if (Array.isArray(arr)) {
                    dispatch(setItems(arr))
                } else {
                    dispatch(setItems([]))
                }
            })
            .catch((err) => {
                console.log(err)
                dispatch(setError(err))
                dispatch(setItems([]))
            })
            .finally(() => dispatch(setIsLoading(false)))
    }, [dispatch, sort.sortField, order, categoryId, searchValue])

    return [items, isLoading, error]
}
