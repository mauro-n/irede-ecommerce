import { useContext, useEffect, useRef, useState } from 'react'
import shoppingCart from '../../../assets/shoppingCartIcon.svg'
import Cart from '../../../services/Cart'
import { Context } from '../../../store'

interface ShoppingCartFloatingBtn extends React.HTMLAttributes<HTMLDivElement> {
}


const ShoppingCartFloatingBtn = ({ ...props }: ShoppingCartFloatingBtn) => {
    const [show, setShow] = useState(false)
    const cartRef = useRef<HTMLDivElement>(null)
    const [cartItems, setCartItems] = useState(0)
    const { context } = useContext(Context)

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        const cart = Cart.getCart()
        if (cart.length > 0) {
            const total = cart.reduce((acc, curr) => {
                const qtd = curr.qtd || 0
                return acc + qtd
            }, 0)

            setCartItems(total)
        }
    }, [context])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            {...props}
            ref={cartRef}
            className={`fixed z-50 right-10 top-6 bg-green-400 px-4 py-4 rounded-full transition-all cursor-pointer ${show ? 'opacity-100' : 'hidden'}`}
        >
            <img src={shoppingCart} className='h-9' alt="E-Rede Store" />
            <div className='relative'>
                <div className='absolute top-0 -right-4 rounded-full px-2 bg-blue-700 text-white'>
                    {cartItems}
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartFloatingBtn
