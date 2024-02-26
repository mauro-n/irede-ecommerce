import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import MeusPedidosPage from "../pages/MeusPedidosPage";
import HomePage from "./../pages/HomePage"
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CategoryPage from "../pages/CategoryPage";
import routesEnum from '../enum/routes'
import DashboardPage from "../pages/DashboardPage";
import DashboardLayout from "../components/DashboardLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                path: routesEnum.home,
                element: <HomePage />
            },
            {
                path: routesEnum.orders,
                element: <MeusPedidosPage />
            },
            {
                path: routesEnum.categories,
                element: <CategoryPage />
            }

        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <RegisterPage />
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
        ]
    },
])

export default router