import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"
import Sidebar from "../Sidebar"
import Footer from "../Footer"

export const PageLayout = () => {
    return (
        <div className="relative">
            <Navbar />
            <Sidebar />
            <Outlet />
            <Footer />
        </div>
    )
}
