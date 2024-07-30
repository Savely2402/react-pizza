export type sortListType = {
    sortName: string
    sortField: string
}

export const sortList: sortListType[] = [
    { sortName: 'популярности', sortField: 'rating' },
    { sortName: 'цене', sortField: 'price' },
    { sortName: 'алфавиту', sortField: 'title' },
]
