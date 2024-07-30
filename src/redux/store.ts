import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './slices/filterSlice.ts'
import itemsReducer from './slices/itemsSlice.ts'
import cartReducer from './slices/cartSlice.ts'

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        items: itemsReducer,
        cart: cartReducer,
    },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
