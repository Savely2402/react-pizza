import { createSelector } from '@reduxjs/toolkit'

export const selectSelectedItems = (state) => state.cart.selectedItems

export const selectDuplicatesCount = createSelector(
    [selectSelectedItems, (_, id) => id],
    (selectedItems, id) => {
        return selectedItems
            .filter((obj) => obj.item.id === id)
            .reduce((accumulator, obj) => (accumulator += obj.quantity), 0)
    }
)
