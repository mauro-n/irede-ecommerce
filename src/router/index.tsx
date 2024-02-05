import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import MeusPedidosPage from "../pages/MeusPedidosPage";
import HomePage from "./../pages/HomePage"

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
    }
])

export default router