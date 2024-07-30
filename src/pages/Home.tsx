import React from 'react'

import Categories from '../components/Categories.tsx'
import Sort from '../components/Sort.tsx'
import Skeleton from '../components/PizzaBlock/Skeleton.tsx'
import PizzaBlock from '../components/PizzaBlock/index.tsx'

import { Pagination } from '../components/Pagination/index.tsx'
import { usePagination } from '../hooks/usePagination.ts'
import { useFetchItems } from '../hooks/useFetchItems.ts'
import { categories } from '../constants/categories.ts'
import { setActivePage } from '../redux/slices/filterSlice.ts'
import { useDispatch } from 'react-redux'
import { useParseQueryParams } from '../hooks/useQueryParams.ts'

export const Home = () => {
    const isSearch = React.useRef<boolean>(false)
    const isMounted = React.useRef<boolean>(false)

    const dispatch = useDispatch()

    useParseQueryParams(isSearch, isMounted)
    const [items, isLoading, error] = useFetchItems(isSearch)

    const skeletons = [...new Array(6)].map((_, index) => (
        <Skeleton key={index} />
    ))
    const limit = 4

    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
    const { activePageItems } = usePagination(pizzas, limit)

    React.useEffect(() => {
        dispatch(setActivePage(1))
    }, [dispatch, items.length])

    return (
        <div className="container">
            {error ? (
                <div className="content__error-info">
                    <h1> Произошла ошибка :(</h1>
                    <p>
                        Не удалось загрузить пиццы...Повторите попытку позднее.
                    </p>
                </div>
            ) : (
                <>
                    <div className="content__top">
                        <Categories categories={categories} />
                        <Sort />
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
                    <Pagination items={pizzas} limit={limit} />
                </>
            )}
        </div>
    )
}
