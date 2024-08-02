import { useAppSelector } from './hooks.ts'
import { selectDuplicatesCount } from '../redux/selectors.ts'

type UseDuplicatesCount = (id: number) => number

export const useDuplicatesCount: UseDuplicatesCount = (id) => {
    const duplicatesCount = useAppSelector((state) =>
        selectDuplicatesCount(state, id)
    )

    return duplicatesCount
}
