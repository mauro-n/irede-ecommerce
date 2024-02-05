import logo from '../../assets/logo2.svg'
import shoppingCart from '../../assets/shoppingCartIcon.svg'
import DefaultBtn from '../DefaultBtn'
import { HamburguerBtn } from '../HamburguerBtn'
import { SearchBar } from '../SearchBar'

export const Navbar = () => {
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
                    <a className='text-white font-medium hidden md:block' href="#">
                        Cadastre-se
                    </a>
                    <div className='md:block hidden'>
                        <DefaultBtn
                            text='Entrar'
                        />
                    </div>
                    <button role='link'>
                        <img src={shoppingCart} className='h-9' alt="E-Rede Store" />
                    </button>
                </div>
            </div>
            <div className='md:hidden'>
                <SearchBar />
            </div>
            <nav className='hidden md:flex justify-center text-white font-medium gap-8'>
                <a href="/">
                    Home
                </a>
                <a href="/">
                    Produtos
                </a>
                <a href="/">
                    Categorias
                </a>
                <a href="/" className='text-orange-500'>
                    Meus Pedidos
                </a>
            </nav>
        </nav>
    )
}
