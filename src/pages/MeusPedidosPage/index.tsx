import MeusPedidosAside from "../../components/MeusPedidosAside"
import PedidoCard from "../../components/PedidoCard"

const MeusPedidosPage = () => {
    return (
        <div className="flex flex-col md:flex-row md:gap-x-6 gap-y-8">
            <MeusPedidosAside />
            <div className="bg-slate-100 px-6 py-4 rounded-md md:w-full">
                <h3 className="text-2xl font-medium mb-4">
                    Meus Pedidos
                </h3>
                <hr className="hidden md:block bg-stone-500" />
                <PedidoCard />
                <hr className="bg-stone-500" />
                <PedidoCard />
            </div>
        </div>
    )
}

export default MeusPedidosPage
