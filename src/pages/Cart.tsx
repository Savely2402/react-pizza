import React from 'react'
import { CartItem } from '../components/CartItem/index.tsx'
import { NotFoundCartBlock } from '../components/NotFoundCartBlock.tsx'
import { CartBottom } from '../components/CartBottom.tsx'
import { CartHeader } from '../components/CartHeader.tsx'
import { useAppSelector } from '../hooks/hooks.ts'

export const Cart: React.FC = () => {
    const selectedItems = useAppSelector((state) => state.cart.selectedItems)
    const totalPrice = useAppSelector((state) => state.cart.totalPrice)
    const totalCount = useAppSelector((state) => state.cart.totalCount)

    return (
        <div className="container container--cart">
            <div className="cart">
                <CartHeader />
                <div className="cart__items">
                    {selectedItems.length ? (
                        <>
                            {selectedItems.map((obj, index) => (
                                <CartItem
                                    key={index}
                                    {...obj.item}
                                    quantity={obj.quantity}
                                />
                            ))}
                            <CartBottom
                                totalCount={totalCount}
                                totalPrice={totalPrice}
                            />
                        </>
                    ) : (
                        <NotFoundCartBlock />
                    )}
                </div>
            </div>
        </div>
    )
}
