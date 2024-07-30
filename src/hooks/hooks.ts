import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../redux/store'
import { useDuplicatesCount } from './useDuplicatesCount.ts'
import { useFetchItems } from './useFetchItems.ts'
import { useModal } from './useModal.ts'
import { usePagination } from './usePagination.ts'
import { useParseQueryParams } from './useQueryParams.ts'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export {
    useDuplicatesCount,
    useFetchItems,
    useModal,
    usePagination,
    useParseQueryParams,
}
