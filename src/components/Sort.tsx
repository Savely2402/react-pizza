import React from 'react'

import { setSort } from '../redux/slices/filterSlice.ts'
import { sortList, sortListType } from '../constants/sortList.ts'
import { useAppDispatch, useModal } from '../hooks/hooks.ts'

interface SortOrders {
    asc: string
    desc: string
}

interface SortProps {
    sort: {
        sortName: string
        sortField: string
        sortOrder: string
    }
}

interface SortPopupProps {
    sort: SortProps['sort']
    sortPopupRef: React.RefObject<HTMLDivElement>
    onClickSort: (SortProps: sortListType) => void
}

const SortPopup: React.FC<SortPopupProps> = ({
    sort,
    sortPopupRef,
    onClickSort,
}) => {
    return (
        <div className="sort__popup" ref={sortPopupRef}>
            <ul>
                {sortList.map((obj, index) => (
                    <li
                        key={index}
                        onClick={() => onClickSort(obj)}
                        className={
                            sort.sortName === obj.sortName ? 'active' : ''
                        }
                    >
                        {obj.sortName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const Sort: React.FC<SortProps> = React.memo(({ sort }) => {
    const sortLabelRef = React.useRef<HTMLSpanElement>(null)
    const sortPopupRef = React.useRef<HTMLDivElement>(null)

    const [openModal, setOpenModal] = useModal(sortLabelRef, sortPopupRef)

    const dispatch = useAppDispatch()

    const sortOrderSvgValues: SortOrders = {
        asc: 'M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z',
        desc: 'M0 1C0 0.83073 0.061849 0.68424 0.185547 0.56055C0.309245 0.43685 0.455729 0.375 0.625 0.375H9.375C9.54427 0.375 9.69075 0.43685 9.81445 0.56055C9.93815 0.68424 10 0.83073 10 1C10 1.16927 9.93815 1.31576 9.81445 1.43945L5.43945 5.81445C5.31576 5.93815 5.16927 6 5 6C4.83073 6 4.68424 5.93815 4.56055 5.81445L0.185547 1.43945C0.061849 1.31576 0 1.16927 0 1Z',
    }

    const onClickSort = (sortProps: sortListType) => {
        dispatch(setSort({ ...sort, ...sortProps }))
        setOpenModal(false)
    }

    const onClickSortOrder = () => {
        const newOrder: string = sort.sortOrder === 'asc' ? 'desc' : 'asc'
        dispatch(setSort({ ...sort, sortOrder: newOrder }))
        setOpenModal(false)
    }

    return (
        <div className="sort">
            <div className="sort__label">
                <div>
                    <svg
                        onClick={onClickSortOrder}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d={sortOrderSvgValues[sort.sortOrder]}
                            fill="#2C2C2C"
                        />
                    </svg>

                    <b>Сортировка по:</b>
                </div>
                <span
                    ref={sortLabelRef}
                    className="sort__name"
                    onClick={(e) => {
                        setOpenModal(!openModal)
                    }}
                >
                    {sort.sortName}
                </span>
            </div>
            {openModal && (
                <SortPopup
                    sort={sort}
                    sortPopupRef={sortPopupRef}
                    onClickSort={onClickSort}
                />
            )}
        </div>
    )
})

export default Sort
