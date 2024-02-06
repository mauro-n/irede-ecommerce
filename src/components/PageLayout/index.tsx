import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"
import Sidebar from "../Sidebar"

export const PageLayout = () => {
    return (
        <div className="relative">
            <Navbar />
            <Sidebar />
            <Outlet />
        </div>
    )
}
