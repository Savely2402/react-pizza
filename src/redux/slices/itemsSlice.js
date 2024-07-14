import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    isLoading: true,
    error: null,
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.status = action.payload
        },
    },
})

export const { setItems, setIsLoading, setError } = itemsSlice.actions

export default itemsSlice.reducer
