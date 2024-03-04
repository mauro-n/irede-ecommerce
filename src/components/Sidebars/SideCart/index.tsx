import { useContext, useEffect, useRef, useState } from 'react'
import { Context, contextContent } from '../../../store'
import useOutsideAlerter from '../../../hooks/useOutsideAlerter'
import styles from './styles.module.css'
import cartService from '../../../services/Cart'
import ProductCard from '../../Cards/ProductCard'
import CartCard from '../../Cards/CartCard'
import SecondaryBtn from '../../Buttons/SecondaryBtn'

const SideCart = () => {
    const { context, setContext } = useContext(Context)
    const [cartItems, setCartItems] = useState<ProductCard[]>([])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [errMsg, setErrMsg] = useState('')
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cart = cartService.getCart()
        if (cart) {
            setCartItems(cart)
        } else {
            setErrMsg('Seu carrinho está vazio!')
        }
    }, [context])

    useEffect(() => {
        handleCloseSidebar()
    }, [location])

    const handleRemoveCartItem = (id: string) => {
        setCartItems((prev): ProductCard[] => {
            const updatedCart: ProductCard[] = prev?.filter(el => el.id !== id)
            return updatedCart
        })
    }

    const handleCloseSidebar = () => {
        if (!setContext) return
        setContext((prev: contextContent) => {
            return { ...prev, showSideCart: false }
        })
    }

    useOutsideAlerter(wrapperRef, handleCloseSidebar)


    return (
        <div className="md:hidden">
            <div className='fixed top-0 left-0 w-screen h-screen bg-neutral-500 bg-opacity-70 z-40' hidden={context?.showSideCart ? false : true}>
            </div>
            <aside className={`${context?.showSideCart ? styles.show : styles.hide} transition-all fixed top-0 bg-white w-2/3 h-screen px-6 pt-8 rounded-md z-50`}
                ref={wrapperRef}
            >
                <h3 className="text-lg font-semibold">
                    Meu Carrinho
                </h3>
                <hr className="border border-black" />
                {cartItems && cartItems.map((el) => {
                    return (
                        <CartCard
                            id={el.id}
                            key={el.title}
                            title={el.title}
                            qtd={el.qtd}
                            base_price={el.base_price}
                            onRemoval={() => handleRemoveCartItem(el.id)}
                        />
                    )
                })}
                {cartItems.length > 0 ?
                    <>
                        <hr className="border border-stone-600 w-full" />
                        <h3 className="w-full flex gap-x-4 items-center py-4">
                            <span className="text-xl font-semibold">
                                Valor total:
                            </span>
                            <span className="text-xl text-blue-900 font-bold">
                                R$&nbsp;
                                {cartItems.reduce((acc, el) => {
                                    const val = Number(el.base_price)
                                    const qtd = Number(el.qtd)
                                    return acc + (val * qtd)
                                }, 0).toFixed(2)}
                            </span>
                        </h3>
                        <div className="flex justify-around w-full">
                            <button
                                className="text-stone-500 font-semibold hover:underline"
                            >
                                Esvaziar
                            </button>
                            <SecondaryBtn
                                text="Finalizar compra"
                            />
                        </div>
                    </> : <></>
                }
            </aside>
        </div>
    )
}

export default SideCart
