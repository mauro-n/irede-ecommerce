import { useContext } from 'react'
import shoppingCart from '../../assets/shoppingCartIcon.svg'
import { Context, contextContent } from '../../context'

const ShoppingCartBtn = () => {
    const { context, setContext } = useContext(Context)

    const toggleModal = () => {
        if (!setContext) return
        setContext((prev: contextContent) => {
            return { ...prev, showSideCart: true }
        })
    }

    return (
        <button
            role='link'
            onClick={toggleModal}
        >
            <img src={shoppingCart} className='h-9' alt="E-Rede Store" />
        </button>
    )
}

export default ShoppingCartBtn
