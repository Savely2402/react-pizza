import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    async (params, thunkAPI) => {
        console.log(thunkAPI)
        const { sort, searchValue, categoryId } = params

        const url = new URL('https://6681539604acc3545a065f15.mockapi.io/items')

        url.searchParams.append('sortBy', sort.sortField)
        url.searchParams.append('order', sort.sortOrder)
        if (searchValue) {
            url.searchParams.append('title', searchValue)
        }

        if (categoryId > 0) {
            url.searchParams.append('category', categoryId)
        }
        const { data } = await axios.get(url)

        return data
    }
)

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, (state) => {
            state.isLoading = true
            state.items = []
        })
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchItems.rejected, (state) => {
            state.error = 'Error: '
            state.items = []
            state.isLoading = false
        })
    },
})

export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer
