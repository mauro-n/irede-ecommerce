import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"
import Sidebar from "../Sidebar"

export const PageLayout = () => {
    return (
        <div className="relative">
            <Navbar />
            <Sidebar />
            <main className="md:w-4/5 mx-auto container">
                <Outlet />
            </main>
        </div>
    )
}
