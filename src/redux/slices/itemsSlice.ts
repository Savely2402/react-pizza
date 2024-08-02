import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface FetchItemsParams {
    sort: {
        sortField: string
        sortOrder: string
    }
    searchValue: string
    categoryId: number
}

export const fetchItems = createAsyncThunk<ItemType[], FetchItemsParams>(
    'items/fetchItems',
    async (params) => {
        const { sort, searchValue, categoryId } = params

        const url = new URL('https://6681539604acc3545a065f15.mockapi.io/items')

        url.searchParams.append('sortBy', sort.sortField)
        url.searchParams.append('order', sort.sortOrder)
        if (searchValue) {
            url.searchParams.append('title', searchValue)
        }

        if (categoryId > 0) {
            url.searchParams.append('category', String(categoryId))
        }
        const { data } = await axios.get<ItemType[]>(String(url))

        console.log(data)

        return data
    }
)

export interface ItemType {
    id: number
    imageUrl: string
    title: string
    types: number[]
    sizes: number[]
    price: number
    category: number
    rating: number
}

interface ItemsState {
    items: ItemType[]
    isLoading: boolean
    error: string
}

const initialState: ItemsState = {
    items: [],
    isLoading: true,
    error: '',
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<ItemType[]>) => {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, (state) => {
            state.isLoading = true
            state.items = []
        })
        builder.addCase(
            fetchItems.fulfilled,
            (state, action: PayloadAction<ItemType[]>) => {
                state.error = ''
                state.items = action.payload
                state.isLoading = false
            }
        )
        builder.addCase(fetchItems.rejected, (state) => {
            state.error = 'Error: '
            state.items = []
            state.isLoading = false
        })
    },
})

export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer
