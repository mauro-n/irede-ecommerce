import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbars/Navbar'
import Sidebar from '../components/Sidebars/Sidebar'
import Footer from '../components/Footers/Footer'
import SideCart from '../components/Sidebars/SideCart'
import { useContext, useEffect } from 'react'
import Auth from '../services/Auth'
import { Context } from '../store'
import { anyObject } from '..'
import ShoppingCartFloatingBtn from '../components/Buttons/ShoppingCartFloatingBtn'
import { Helmet } from 'react-helmet'


export const PageLayout = () => {
    const { setContext } = useContext(Context)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        const user = Auth.currentUser()
        setContext && setContext((prev: anyObject) => {
            return {
                ...prev,
                user: user
            }
        })
    }

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="relative overflow-hidden">
            <Helmet>
                <title>E-rede Ecommerce</title>
            </Helmet>
            <Navbar />
            <Sidebar />
            <SideCart />
            <ShoppingCartFloatingBtn
                onClick={handleScrollTop}
            />
            <Outlet />
            <Footer />
        </div>
    )
}
