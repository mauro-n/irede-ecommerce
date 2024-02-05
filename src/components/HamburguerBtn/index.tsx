import { useContext } from 'react'
import hamBtn from '../../assets/hamburguerBtn.svg'
import { Context, contextContent } from '../../context'

export const HamburguerBtn = () => {
    const { context, setContext } = useContext(Context)

    const toggleModal = () => {
        if (!setContext) return
        setContext((prev: contextContent) => {
            return { ...prev, showSidebar: true }
        })
    }

    return (
        <div
            role='button'
            onClick={toggleModal}
            tabIndex={0}
            onKeyDown={(event) => { event.key === 'Enter' ? toggleModal() : null }}
            className='relative'>
            <img src={hamBtn} className='h-8' alt="Menu de opções" />
        </div>
    )
}
