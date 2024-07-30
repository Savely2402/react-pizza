import React from 'react'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'
import { sortList } from '../constants/sortList.ts'
import { useAppSelector, useAppDispatch } from './hooks.ts'
import { setFilters } from '../redux/slices/filterSlice.ts'

type UseQueryParams = (isMounted: React.MutableRefObject<boolean>) => void

export const useQueryParams: UseQueryParams = (isMounted) => {
    const { categoryId, searchValue, activePage, sort } = useAppSelector(
        (state) => state.filter
    )
    const navigate = useNavigate()

    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortField: sort.sortField,
                sortOrder: sort.sortOrder,
                categoryId,
                searchValue,
                activePage,
            })

            navigate(`?${queryString}`)
        }

        isMounted.current = true
        // eslint-disable-next-line
    }, [
        navigate,
        sort.sortField,
        sort.sortOrder,
        categoryId,
        activePage,
        searchValue,
    ])
}

interface QueryParamsType {
    sortField: string
    sortOrder: string
    categoryId: number
    searchValue: string
    activePage: 1
}

type UseParseQueryParams = (
    isSearch: React.MutableRefObject<boolean>,
    isMounted: React.MutableRefObject<boolean>
) => void

export const useParseQueryParams: UseParseQueryParams = (
    isSearch,
    isMounted
) => {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(
                window.location.search.substring(1)
            ) as unknown as QueryParamsType

            const foundSort = sortList.find(
                (obj) => obj.sortField === params.sortField
            )

            const sort = {
                sortName: foundSort?.sortName || '',
                sortField: foundSort?.sortField || '',
                sortOrder: params.sortOrder,
            }

            dispatch(setFilters({ ...params, sort }))
            isSearch.current = true
        }
        // eslint-disable-next-line
    }, [])

    useQueryParams(isMounted)
}
