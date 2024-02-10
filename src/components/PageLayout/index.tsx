import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"
import Sidebar from "../Sidebar"
import Footer from "../Footer"
import SideCart from "../SideCart"

export const PageLayout = () => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />
            <Sidebar />
            <SideCart />
            <Outlet />
            <Footer />
        </div>
    )
}
