import { useContext, useEffect, useState } from 'react'
import { Context } from '../../store'
import styles from './styles.module.css'
import cartService from '../../services/Cart'
import ProductCard from '../Cards/ProductCard'
import CartCard from '../Cards/CartCard'
import DefaultBtn from '../Buttons/DefaultBtn'
import SecondaryBtn from '../Buttons/SecondaryBtn'
import { Link, useNavigate } from 'react-router-dom'
import Api from '../../services/Api'
import Cart from '../../services/Cart'

interface CartDropdown {
    onClose?: () => void
}

const CartDropdown = ({ onClose }: CartDropdown) => {
    const { context, setContext } = useContext(Context)
    const [cartItems, setCartItems] = useState<ProductCard[]>([])
    const [hasCheckout, setHasCheckout] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const cart = cartService.getCart()
        if (cart.length > 0) {
            setCartItems(cart)
        }
    }, [context])

    const handleClose = () => {
        onClose && onClose()
    }

    const handleRemoveCartItem = (id: string) => {
        setCartItems((prev): ProductCard[] => {
            const updatedCart: ProductCard[] = prev?.filter(el => el.id !== id)
            return updatedCart
        })
    }

    const handleCheckout = async () => {
        try {
            const cart = cartService.getCart()
            const itemsF = cart.map((el) => {
                return { id: el.id, qtd: el.qtd, currPrice: el.base_price }
            })
            const response = await Api.postJsonAuth('/orders', {
                items: itemsF
            })

            if (response.status === 201) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setHasCheckout(true)
                Cart.clear()
                setContext && setContext(() => {
                    return {}
                })
                setCartItems([])
            } else if (response.status === 401) {
                navigate('/login?to=cart')
            }
        } catch (err) {
            navigate('/login')
            console.log(err)
        }
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
                    {hasCheckout &&
                        <div className="bg-green-200 rounded-lg p-3 my-4">
                            <p>Pedido realizado com sucesso!</p>
                            <Link to={'/meus-pedidos'} className="underline cursor-pointer font-semibold">
                                Verificar pedidos
                            </Link>
                        </div>
                    }

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
                                onClick={() => handleCheckout()}
                            />
                        </div>
                    </> : <></>
                }
            </aside>
        </div>
    )
}

export default CartDropdown
