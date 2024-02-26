import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"
import Sidebar from "../Sidebar"
import Footer from "../Footer"
import SideCart from "../SideCart"
import { useContext, useEffect } from "react"
import Auth from "../../services/Auth"
import { Context } from "../../context"
import { anyObject } from "../.."
import ShoppingCartFloatingBtn from "../ShoppingCartFloatingBtn"


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
