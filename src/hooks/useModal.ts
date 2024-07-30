import React from 'react'

type UseModal = (
    sortLabelRef: React.RefObject<HTMLSpanElement>,
    sortPopupRef: React.RefObject<HTMLDivElement>
) => [boolean, React.Dispatch<React.SetStateAction<boolean>>]

export const useModal: UseModal = (sortLabelRef, sortPopupRef) => {
    const [openModal, setOpenModal] = React.useState<boolean>(false)

    React.useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const foundElements = e
                .composedPath()
                .filter(
                    (elem) =>
                        elem === sortLabelRef.current ||
                        elem === sortPopupRef.current
                )

            if (!foundElements.length) {
                setOpenModal(false)
            }
        }
        window.addEventListener('click', handleClickOutside)
        return () => {
            return window.removeEventListener('click', handleClickOutside)
        }
    }, [openModal, setOpenModal, sortLabelRef, sortPopupRef])

    return [openModal, setOpenModal]
}
