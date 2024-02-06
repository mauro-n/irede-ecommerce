import MeusPedidosAside from "../../components/MeusPedidosAside"
import PedidoCard from "../../components/PedidoCard"

const MeusPedidosPage = () => {
    return (
        <main className="flex flex-col md:flex-row md:gap-x-6 py-8 gap-y-8 px-4 md:w-4/5 mx-auto container">
            <MeusPedidosAside />
            <div className="bg-slate-100 px-6 py-4 rounded-md md:w-full">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-medium mb-4 md:text-stone-500 md:text-base">
                        Meus Pedidos
                    </h3>
                    <p className="text-stone-500">
                        Status meus pedidos
                    </p>
                </div>
                <hr className="hidden md:block bg-stone-700" />
                <PedidoCard />
                <hr className="bg-stone-500" />
                <PedidoCard />
            </div>
        </main>
    )
}

export default MeusPedidosPage
