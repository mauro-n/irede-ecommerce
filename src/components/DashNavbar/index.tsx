import { HamburguerBtn } from '../HamburguerBtn'
import { Link, useLocation } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Context, contextContent } from '../../context'
import routesEnum from '../../enum/routes'

const DashNavbar = () => {
    const location = useLocation()
    const { context, setContext } = useContext(Context)

    useEffect(() => {

    }, [location])

    const toggleModal = () => {
        if (!setContext) return
        setContext((prev: contextContent) => {
            return { ...prev, showSidebar: true }
        })
    }

    return (
        <nav className='px-10 py-6 md:pb-4 bg-blue-900 flex flex-col gap-7 md:hidden'>
            <div className='flex justify-between gap-x-10'>
                <div className='md:hidden'>
                    <HamburguerBtn
                        onClick={() => toggleModal()}
                    />
                </div>
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

export default DashNavbar
