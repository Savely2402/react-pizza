import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock'

import { Pagination } from '../components/Pagination'
import { usePagination } from '../hooks/usePagination'
import { useFetchItems } from '../hooks/useFetchItems'
import { useModal } from '../hooks/useModal'
import { categories } from '../constants/categories'

export const Home = () => {
    const [activePage, setActivePage] = React.useState(1)

    const [items, isLoading, _] = useFetchItems()

    const [openModal, setOpenModal] = useModal()

    const skeletons = [...new Array(6)].map((_, index) => (
        <Skeleton key={index} />
    ))
    const limit = 4

    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
    const { activePageItems } = usePagination(pizzas, limit, activePage)

    React.useEffect(() => {
        setActivePage(1)
    }, [items])

    return (
        <div className="container">
            <div className="content__top">
                <Categories categories={categories} />
                <Sort openModal={openModal} setOpenModal={setOpenModal} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? (
                    skeletons
                ) : items.length !== 0 ? (
                    activePageItems
                ) : (
                    <h1>Нет товаров</h1>
                )}
            </div>
            <Pagination
                items={items}
                limit={limit}
                activePage={activePage}
                setActivePage={setActivePage}
            />
        </div>
    )
}
