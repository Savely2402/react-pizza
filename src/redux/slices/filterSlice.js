import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    searchValue: '',
    activePage: 1,
    sort: {
        sortName: 'популярности',
        sortField: 'rating',
        sortOrder: 'desc',
    },
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
        setActivePage(state, active) {
            state.activePage = active.payload
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        setFilters(state, action) {
            state.categoryId = Number(action.payload.categoryId)
            state.searchValue = action.payload.searchValue
            state.activePage = Number(action.payload.activePage)
            state.sort = action.payload.sort
        },
    },
})

export const {
    setCategoryId,
    setSearchValue,
    setActivePage,
    setSort,
    setFilters,
} = filterSlice.actions

export default filterSlice.reducer
