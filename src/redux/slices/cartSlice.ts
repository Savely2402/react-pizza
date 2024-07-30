import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isDeepEqual } from '../../utils/deepEqual.ts'

interface CartItemType {
    item: {
        id: number
        title: string
        price: number
        imageUrl: string
        size: number
        type: string
    }
    quantity: number
}

interface CartState {
    selectedItems: CartItemType[]
    totalPrice: number
    totalCount: number
}

const initialState: CartState = {
    selectedItems: [],
    totalPrice: 0,
    totalCount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItemType['item']>) {
            const foundObjIndex = state.selectedItems.findIndex((obj) =>
                isDeepEqual(obj.item, action.payload)
            )

            foundObjIndex !== -1
                ? (state.selectedItems[foundObjIndex].quantity += 1)
                : state.selectedItems.push({
                      item: action.payload,
                      quantity: 1,
                  })

            state.totalPrice += action.payload.price
            state.totalCount += 1
        },
        removeOneItem(state, action: PayloadAction<CartItemType['item']>) {
            const foundObjIndex = state.selectedItems.findIndex((obj) =>
                isDeepEqual(obj.item, action.payload)
            )

            const foundItem = state.selectedItems[foundObjIndex]

            foundItem.quantity === 1
                ? state.selectedItems.splice(foundObjIndex, 1)
                : (foundItem.quantity -= 1)

            state.totalPrice -= action.payload.price
            state.totalCount -= 1
        },
        removeAllItemsOfType(
            state,
            action: PayloadAction<CartItemType['item']>
        ) {
            const foundObjIndex = state.selectedItems.findIndex((obj) =>
                isDeepEqual(obj.item, action.payload)
            )

            const foundItem = state.selectedItems[foundObjIndex]

            state.totalPrice -= foundItem.item.price * foundItem.quantity
            state.totalCount -= foundItem.quantity

            state.selectedItems.splice(foundObjIndex, 1)
        },
        clearCart(state) {
            state.selectedItems = []

            state.totalPrice = 0
            state.totalCount = 0
        },
    },
})

export const { addItem, removeOneItem, removeAllItemsOfType, clearCart } =
    cartSlice.actions

export default cartSlice.reducer
