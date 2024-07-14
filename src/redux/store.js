import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './slices/filterSlice'
import sortReducer from './slices/sortSlice'
import itemsReducer from './slices/itemsSlice'
import paginationReducer from './slices/paginationSlice'

export default configureStore({
    reducer: {
        filter: filterReducer,
        sort: sortReducer,
        items: itemsReducer,
        pagination: paginationReducer,
    },
})
