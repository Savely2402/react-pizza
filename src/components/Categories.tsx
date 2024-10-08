import React from 'react'

import { setCategoryId } from '../redux/slices/filterSlice.ts'
import { useAppDispatch, useAppSelector } from '../hooks/hooks.ts'
import { categories } from '../constants/categories.ts'

export const Categories: React.FC = React.memo(() => {
    const categoryId = useAppSelector((state) => state.filter.categoryId)
    const dispatch = useAppDispatch()

    const onClick = (index: number) => {
        dispatch(setCategoryId(index))
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((obj, index) => (
                    <li
                        key={index}
                        onClick={() => onClick(index)}
                        className={categoryId === index ? 'active' : ''}
                    >
                        {obj}
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default Categories
