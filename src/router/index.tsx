import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import MeusPedidosPage from "../pages/MeusPedidosPage";
import HomePage from "./../pages/HomePage"
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/meus-pedidos',
                element: <MeusPedidosPage />
            }

        ]
    }, {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <RegisterPage />
    },
])

export default router