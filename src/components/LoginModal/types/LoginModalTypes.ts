export interface LoginModalProps {
    loginModalRef: React.RefObject<HTMLDivElement>
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export enum ActiveFormType {
    LOGIN,
    SIGNUP,
    FORGOT_PASSWORD,
}

export interface FormConfigType {
    title: string
    body: React.ReactNode
    toggleText: string
}

export interface LoginFormProps {
    activeForm: ActiveFormType
    setActiveForm: React.Dispatch<React.SetStateAction<ActiveFormType>>
}

export interface LoginInputProps {
    label: string
    type: React.HTMLInputTypeAttribute
    id: string
    name: string
}
