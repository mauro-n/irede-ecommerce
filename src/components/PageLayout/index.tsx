import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"
import Sidebar from "../Sidebar"

export const PageLayout = () => {
    return (
        <div className="relative">
            <Navbar />
            <Sidebar />
            <main className="mx-auto px-4 py-8 container">
                <Outlet />
            </main>
        </div>
    )
}
