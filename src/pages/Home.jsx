import React from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock'

export const Home = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('https://6681539604acc3545a065f15.mockapi.io/items')
            .then((res) => {
                return res.json()
            })
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
    }, [])
    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? (
                    [...new Array(6)].map((_, index) => (
                        <Skeleton key={index} />
                    ))
                ) : items ? (
                    items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
                ) : (
                    <h1>Нет товаров</h1>
                )}
            </div>
        </>
    )
}
