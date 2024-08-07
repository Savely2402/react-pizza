import React, { useState } from 'react'
import { addItem } from '../../redux/slices/cartSlice.ts'
import { useDuplicatesCount } from '../../hooks/useDuplicatesCount.ts'
import { useAppDispatch } from '../../hooks/hooks.ts'
import { ItemType } from '../../redux/slices/itemsSlice.ts'

export const PizzaBlock: React.FC<ItemType> = ({
    id,
    title,
    price,
    imageUrl,
    sizes,
    types,
    rating,
}) => {
    const typeNames: string[] = ['тонкое', 'традиционное']
    const dispatch = useAppDispatch()

    const [activeType, setActiveType] = React.useState<number>(0)
    const [activeSize, setActiveSize] = useState<number>(0)

    const duplicatesCount = useDuplicatesCount(id)

    const itemToHandle = {
        id,
        title,
        imageUrl,
        type: typeNames[activeType],
        size: sizes[activeSize],
        price,
    }

    const onClickAddItem = () => {
        dispatch(addItem(itemToHandle))
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            {[...new Array(rating)].map((_, i) => (
                <svg
                    key={i}
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 2L14.09 8.26L20 9.27L15.5 14.14L16.18 20.02L12 17.77L7.82 20.02L8.5 14.14L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                    />
                </svg>
            ))}

            <div className="pizza-block__selector">
                <ul>
                    {types.map((type) => (
                        <li
                            key={type}
                            onClick={() => setActiveType(type)}
                            className={activeType === type ? 'active' : ''}
                        >
                            {typeNames[type]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, index) => (
                        <li
                            key={index}
                            onClick={() => setActiveSize(index)}
                            className={activeSize === index ? 'active' : ''}
                        >
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <button
                    className="button button--outline button--add"
                    onClick={onClickAddItem}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{duplicatesCount}</i>
                </button>
            </div>
        </div>
    )
}

export default PizzaBlock
