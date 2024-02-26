import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import { useContext, useEffect } from "react"
import Auth from "../../services/Auth"
import { Context } from "../../context"
import { anyObject } from "../.."
import DashNavbar from "../DashNavbar"
import DashSidebar from "../DashSidebar"
import DashFooter from "../DashFooter"


const DashboardLayout = () => {
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

    return (
        <div className="relative overflow-hidden">
            <DashNavbar />
            <DashSidebar />
            <Outlet />
            <DashFooter />
        </div>
    )
}

export default DashboardLayout
