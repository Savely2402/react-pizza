import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../redux/slices/filterSlice'
import qs from 'qs'
import { sortList } from '../constants/sortList'

export const useQueryParams = (isMounted) => {
    const { categoryId, searchValue, activePage, sort } = useSelector(
        (state) => state.filter
    )

    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    return React.useEffect(() => {
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

export const useParseQueryParams = (isSearch, isMounted) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))

            const sort = {
                ...sortList.find((obj) => obj.sortField === params.sortField),
                sortOrder: params.sortOrder,
            }

            dispatch(setFilters({ ...params, sort }))

            isSearch.current = true
        }
        // eslint-disable-next-line
    }, [])

    useQueryParams(isMounted)
}
