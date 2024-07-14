import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sort: { sortName: 'популярности', sortField: 'rating' },
    order: 'desc',
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setSortOrder: (state, action) => {
            state.order = action.payload
        },
    },
})

export const { setSort, setSortOrder } = sortSlice.actions

export default sortSlice.reducer
