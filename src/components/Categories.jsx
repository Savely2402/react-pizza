import React from 'react'

import { setCategoryId } from '../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Categories = ({ categories }) => {
    const categoryId = useSelector((state) => state.filter.categoryId)
    const dispatch = useDispatch()

    const onClick = (index) => {
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
}

export default Categories
