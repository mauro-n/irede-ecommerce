import { useContext, useEffect, useState } from "react"
import { Context } from "../../context"
import styles from './styles.module.css'
import cartService from "../../services/cartService"
import ProductCard from "../ProductCard"
import CartCard from "../CartCard"
import DefaultBtn from "../DefaultBtn"
import SecondaryBtn from "../SecondaryBtn"

interface CartDropdown {
    onClose?: Function
}

const CartDropdown = ({ onClose }: CartDropdown) => {
    const { context, } = useContext(Context)
    const [cartItems, setCartItems] = useState<ProductCard[]>([])

    useEffect(() => {
        const cart = cartService.getCart()
        if (cart.length > 0) {
            setCartItems(cart)
        }
    }, [context])

    const handleClose = () => {
        if (onClose) {
            onClose()
        }
    }

    const handleRemoveCartItem = (id: string) => {
        setCartItems((prev): ProductCard[] => {
            const updatedCart: ProductCard[] = prev?.filter(el => el.id !== id)
            return updatedCart
        })
    }

    return (
        <div className="hidden md:block absolute top-8 right-2 z-50 min-w-96">
            <aside className={`${context?.showSideCart ? styles.show : styles.hide} bg-white px-6 py-4 rounded-md z-50 flex flex-col items-center`}
            >
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">
                        Meu Carrinho
                    </h3>
                </div>
                <hr className="border border-stone-600 w-full" />
                <div className="w-full">
                    {cartItems.length > 0 ?
                        cartItems.map((el) => {
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
                        })
                        : <div className="flex flex-col items-center py-3 gap-y-3">
                            <p>
                                Seu carrinho está vazio!
                            </p>
                            <DefaultBtn
                                onClick={handleClose}
                                text="fechar"
                            />
                        </div>
                    }
                </div>
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

export default CartDropdown
