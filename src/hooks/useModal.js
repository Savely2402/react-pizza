import React from 'react'

export const useModal = () => {
    const [openModal, setOpenModal] = React.useState(false)

    React.useEffect(() => {
        function closeModalWindow() {
            setOpenModal(false)
        }

        window.addEventListener('click', closeModalWindow)

        return () => {
            window.removeEventListener('click', closeModalWindow)
        }
    }, [])

    return [openModal, setOpenModal]
}
