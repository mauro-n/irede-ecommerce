import { useEffect, useState } from 'react'
import MeusPedidosAside from '../../../components/Cards/MeusPedidosAside'
import PedidoCard from '../../../components/Cards/PedidoCard'
import Api from '../../../services/Api'
import { useNavigate } from 'react-router-dom'
import { anyObject } from '../../..'
import { Helmet } from 'react-helmet'

const MeusPedidosPage = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await Api.getDataAuth('/orders')
            if (response.status === 401) {
                navigate('/login')
            }
            const data = await response.json()
            setData(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <main className="flex flex-col md:flex-row md:gap-x-6 py-8 gap-y-8 px-4 md:w-4/5 mx-auto container">
            <Helmet>
                <title>Meus Pedidos</title>
            </Helmet>
            <MeusPedidosAside />
            <div className="bg-slate-100 px-6 py-4 rounded-md md:w-full">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-medium mb-4 md:text-stone-500 md:text-base">
                        Meus Pedidos
                    </h3>
                    <p className="text-stone-500">
                        Status
                    </p>
                </div>
                <hr className="hidden md:block bg-stone-700" />
                {/* This function calculates the total sum of orders value */}
                {data.length > 0 ? data.map((order: anyObject) => {
                    let total = 0
                    if (order.sale_items) {
                        total = order.sale_items.reduce((acc: number, curr: anyObject) => {
                            const qtd = parseFloat(curr.product_qtd)
                            const price = parseFloat(curr.product_curr_price)
                            const result = acc + (qtd * price)
                            return result
                        }, 0)
                    }

                    return (
                        <div key={order.id}>
                            <PedidoCard
                                id={order.id}
                                data={order.created_at}
                                items={order.sale_items}
                                total={total}
                                status={order.status}
                            />
                            <hr className="bg-stone-500" />
                        </div>
                    )
                }) : <></>}
            </div>
        </main>
    )
}

export default MeusPedidosPage
