export interface CartBottomProps {
    totalCount: number
    totalPrice: number
}

export interface CartItemProps {
    id: number
    title: string
    price: number
    imageUrl: string
    size: number
    type: string
    quantity?: number
}
