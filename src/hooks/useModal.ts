import React from 'react'

type UseModal = (
    modalRefs: React.RefObject<HTMLElement>[]
) => [boolean, React.Dispatch<React.SetStateAction<boolean>>]

export const useModal: UseModal = (modalRefs) => {
    const [openModal, setOpenModal] = React.useState<boolean>(false)

    React.useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const foundElements = modalRefs.some((ref) => {
                if (ref.current) {
                    return e.composedPath().includes(ref.current)
                }
                return false
            })

            if (!foundElements) {
                setOpenModal(false)
            }
        }
        window.addEventListener('click', handleClickOutside)
        return () => {
            return window.removeEventListener('click', handleClickOutside)
        }
    }, [openModal, setOpenModal, modalRefs])

    return [openModal, setOpenModal]
}
