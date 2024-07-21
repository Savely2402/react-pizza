import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './slices/filterSlice'
import itemsReducer from './slices/itemsSlice'
import cartReducer from './slices/cartSlice'

export default configureStore({
    reducer: {
        filter: filterReducer,
        items: itemsReducer,
        cart: cartReducer,
    },
})
