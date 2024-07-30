import React from 'react'
import { fetchItems } from '../redux/slices/itemsSlice.ts'
import { useAppDispatch, useAppSelector } from './hooks.ts'
import { ItemType } from '../redux/slices/itemsSlice.ts'

type UseFetchItems = (
    isSearch: React.MutableRefObject<boolean>
) => [ItemType[], boolean, string]

export const useFetchItems: UseFetchItems = (isSearch) => {
    const { items, isLoading, error } = useAppSelector((state) => state.items)
    const { sort, categoryId, searchValue } = useAppSelector(
        (state) => state.filter
    )

    const dispatch = useAppDispatch()

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
