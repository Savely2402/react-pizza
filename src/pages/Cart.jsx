import React from 'react'
import { CartItem } from '../components/CartItem'
import { useSelector } from 'react-redux'
import { NotFoundCartBlock } from '../components/NotFoundCartBlock'
import { CartBottom } from '../components/CartBottom'
import { CartHeader } from '../components/CartHeader'

export const Cart = () => {
    const selectedItems = useSelector((state) => state.cart.selectedItems)
    const totalPrice = useSelector((state) => state.cart.totalPrice)
    const totalCount = useSelector((state) => state.cart.totalCount)

    console.log(selectedItems)

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
