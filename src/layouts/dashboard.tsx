import { Outlet } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import Auth from '../services/Auth'
import { Context } from '../store'
import { anyObject } from '..'
import DashNavbar from '../components/Navbars/DashNavbar'
import DashSidebar from '../components/Sidebars/DashSidebar'
import DashFooter from '../components/Footers/DashFooter'


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
