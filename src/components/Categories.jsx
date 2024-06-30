import React from 'react'

export const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0)

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    const onClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((obj, index) => (
                    <li
                        key={index}
                        onClick={() => onClick(index)}
                        className={activeIndex === index ? 'active' : ''}
                    >
                        {obj}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
