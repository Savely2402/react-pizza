import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activePage: 1,
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setActivePage: (state, active) => {
            state.activePage = active.payload
        },
    },
})

export const { setActivePage } = paginationSlice.actions

export default paginationSlice.reducer
