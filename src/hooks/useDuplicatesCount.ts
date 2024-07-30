import React from 'react'
import { useAppSelector } from './hooks.ts'

export const useDuplicatesCount: (id: number) => number = (id) => {
    const selectedItems = useAppSelector((state) => state.cart.selectedItems)

    const duplicatesCount = React.useMemo<number>(() => {
        return (
            selectedItems.length &&
            selectedItems
                .filter((obj) => obj.item.id === id)
                .reduce((accumulator, obj) => (accumulator += obj.quantity), 0)
        )
        // eslint-disable-next-line
    }, [selectedItems])

    return duplicatesCount
}
