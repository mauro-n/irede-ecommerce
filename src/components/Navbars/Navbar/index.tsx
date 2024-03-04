import logo from '../../../assets/logo2.svg'
import ShoppingCartBtn from '../../Buttons/ShoppingCartBtn'
import DefaultBtn from '../../Buttons/DefaultBtn'
import { HamburguerBtn } from '../../Buttons/HamburguerBtn'
import { SearchBar } from '../../SearchBar'
import { Link, useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import CartDropdown from '../../CartDropdown'
import { Context, contextContent } from '../../../store'
import routesEnum from '../../../enum/routes'

export const Navbar = () => {
    const location = useLocation()
    const [cartDrop, setCartDrop] = useState(false)
    const { context, setContext } = useContext(Context)

    useEffect(() => {
        setCartDrop(false)
    }, [location])

    const toggleModal = () => {
        if (!setContext) return
        setContext((prev: contextContent) => {
            return { ...prev, showSidebar: true }
        })
    }

    return (
        <nav className='px-10 pt-12 pb-12 md:pb-4 bg-blue-900 flex flex-col gap-7'>
            <div className='flex justify-between gap-x-10'>
                <div className='md:hidden'>
                    <HamburguerBtn
                        onClick={toggleModal}
                        onKeyDown={(event) => { event.key === 'Enter' ? toggleModal() : null }}
                    />
                </div>
                <img src={logo} className='h-10 -translate-y-1' alt="E-Rede Store" />
                <div className='hidden md:block flex-1'>
                    <SearchBar />
                </div>
                <div className='flex items-center gap-x-8'>
                    {context && context.user ?
                        <div className='hidden md:block'>
                            <img src="" alt="" />
                            <p className='text-white'>
                                Bem vindo(a)<br />{context.user.name}!
                            </p>
                        </div> :
                        <div className='flex items-center gap-x-4'>
                            <a className='text-white font-medium hidden md:block' href="/signup">
                                Cadastre-se
                            </a>
                            <a className='md:block hidden' href="/login">
                                <DefaultBtn
                                    text='Entrar'
                                />
                            </a>
                        </div>
                    }

                    <div
                        onClick={() => {
                            setCartDrop((prev) => !prev)
                        }}
                    >
                        <ShoppingCartBtn />
                    </div>
                    <div className='relative'>
                        {cartDrop &&
                            <CartDropdown
                                onClose={() => { setCartDrop(false) }}
                            />
                        }
                    </div>
                </div>
            </div>
            <div className='md:hidden'>
                <SearchBar />
            </div>
            <nav className='hidden md:flex justify-center text-white font-medium gap-8'>
                <Link to={routesEnum.home} className={location.pathname === routesEnum.home ? 'text-orange-500' : ''}>
                    Home
                </Link>
                <Link to={routesEnum.products} className={location.pathname === routesEnum.products ? 'text-orange-500' : ''}>
                    Produtos
                </Link>
                <Link to={routesEnum.categories} className={location.pathname === routesEnum.categories ? 'text-orange-500' : ''}>
                    Categorias
                </Link>
                <Link className={location.pathname === routesEnum.orders ? 'text-orange-500' : ''} to={routesEnum.orders}>
                    Meus Pedidos
                </Link>
                {
                    context?.user?.role === 'admin' ?
                        <Link className={location.pathname === routesEnum.dashboard ? 'text-orange-500' : ''} to={routesEnum.dashboard}>
                            Dashboard
                        </Link> : <></>
                }
            </nav>
        </nav>
    )
}
