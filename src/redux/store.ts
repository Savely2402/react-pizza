import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import filterReducer from './slices/filterSlice.ts'
import itemsReducer from './slices/itemsSlice.ts'
import cartReducer from './slices/cartSlice.ts'

const persistConfig = {
    key: 'cart',
    storage,
    whitelist: ['selectedItems', 'totalPrice', 'totalCount'],
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)

const reducers = combineReducers({
    filter: filterReducer,
    items: itemsReducer,
    cart: persistedCartReducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

export const persistor = persistStore(store)

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
