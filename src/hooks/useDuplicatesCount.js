import React from 'react'
import { useSelector } from 'react-redux'

export const useDuplicatesCount = (id) => {
    const selectedItems = useSelector((state) => state.cart.selectedItems)

    const duplicatesCount = React.useMemo(() => {
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
