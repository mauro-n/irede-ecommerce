import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import MeusPedidosPage from "../pages/MeusPedidosPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <>home page</>
            },
            {
                path: '/meus-pedidos',
                element: <MeusPedidosPage />
            }

        ]
    }
])

export default router