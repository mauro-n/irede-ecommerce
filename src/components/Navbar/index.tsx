import logo from '../../assets/logo2.svg'
import ShoppingCartBtn from '../ShoppingCartBtn'
import DefaultBtn from '../DefaultBtn'
import { HamburguerBtn } from '../HamburguerBtn'
import { SearchBar } from '../SearchBar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import CartDropdown from '../CartDropdown'

export const Navbar = () => {
    const location = useLocation()
    const [cartDrop, setCartDrop] = useState(false)

    return (
        <nav className='px-10 pt-12 pb-12 md:pb-4 bg-blue-900 flex flex-col gap-7'>
            <div className='flex justify-between gap-x-10'>
                <div className='md:hidden'>
                    <HamburguerBtn />
                </div>
                <img src={logo} className='h-10 -translate-y-1' alt="E-Rede Store" />
                <div className='hidden md:block flex-1'>
                    <SearchBar />
                </div>
                <div className='flex items-center gap-x-8'>
                    <a className='text-white font-medium hidden md:block' href="/signup">
                        Cadastre-se
                    </a>
                    <a className='md:block hidden' href="/login">
                        <DefaultBtn
                            text='Entrar'
                        />
                    </a>
                    <div
                        onClick={() => setCartDrop(prev => !prev)}
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
                <a href="/"
                    className={location.pathname === '/' ? 'text-orange-500' : ''}
                >
                    Home
                </a>
                <a href="/products"
                    className={location.pathname === '/products' ? 'text-orange-500' : ''}
                >
                    Produtos
                </a>
                <a href="/categorias"
                    className={location.pathname === '/categorias' ? 'text-orange-500' : ''}
                >
                    Categorias
                </a>
                <a href="/meus-pedidos"
                    className={location.pathname === '/meus-pedidos' ? 'text-orange-500' : ''}
                >
                    Meus Pedidos
                </a>
            </nav>
        </nav>
    )
}
