import { createBrowserRouter } from 'react-router-dom'
import { PageLayout } from '../layouts/main'
import MeusPedidosPage from '../views/main/MeusPedidosPage'
import HomePage from '../views/main/HomePage'
import LoginPage from '../views/auth/LoginPage'
import RegisterPage from '../views/auth/RegisterPage'
import CategoryPage from '../views/main/CategoryPage'
import routesEnum from '../enum/routes'
import DashboardPage from '../views/dashboard'
import DashboardLayout from '../layouts/dashboard'
import ProductPage from '../views/main/ProductPage'
import ProductsPage from '../views/main/ProductsPage'

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
            },
            {
                path: routesEnum.product,
                element: <ProductPage />
            },
            {
                path: routesEnum.products,
                element: <ProductsPage />
            },

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