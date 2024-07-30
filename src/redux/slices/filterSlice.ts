import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
    categoryId: number
    searchValue: string
    activePage: number
    sort: {
        sortName: string
        sortField: string
        sortOrder: string
    }
}

export const initialState: FilterState = {
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
        setCategoryId(state, action: PayloadAction<FilterState['categoryId']>) {
            state.categoryId = action.payload
        },
        setSearchValue(
            state,
            action: PayloadAction<FilterState['searchValue']>
        ) {
            state.searchValue = action.payload
        },
        setActivePage(state, action: PayloadAction<FilterState['activePage']>) {
            state.activePage = action.payload
        },
        setSort(state, action: PayloadAction<FilterState['sort']>) {
            state.sort = action.payload
        },
        setFilters(state, action: PayloadAction<FilterState>) {
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
