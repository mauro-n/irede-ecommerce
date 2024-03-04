import { useLocation, useNavigate, useParams } from 'react-router-dom'
import DefaultBtn from '../../../components/Buttons/DefaultBtn'
import { useEffect, useState } from 'react'
import routes from '../../../enum/routes'
import Api from '../../../services/Api'
import ProductCard from '../../../components/Cards/ProductCard'
import Cart from '../../../services/Cart'

const ProductPage = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { productId } = useParams()
    const [data, setData] = useState<ProductCard>()
    const [itemInCart, setItemInCart] = useState(false)
    const [qtd, setQtd] = useState(1)

    if (!productId) {
        navigate(routes.products)
    }

    const getData = async () => {
        try {
            const response = await Api.getData(`/products/${productId}`)
            const data = await response.json()
            setData(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getData()
    }, [pathname])

    const handleClickPurchase = () => {
        if (itemInCart) { return }
        data && Cart.updateCart(data, qtd)
        setItemInCart(true)
    }

    return (
        <main className="min-h-0 md:min-h-screen px-4 py-4 md:w-3/4 mx-auto container">
            <section className="flex flex-col md:flex-row p-6 bg-slate-100 justify-around items-center md:items-start gap-y-6 md:gap-y-0">
                <div>
                    <img src={data && data.img} alt={data && data.title} className="md:w-56 md:object-cover md:h-56" />
                    <div className="hidden md:block">
                        <p className="text-blue-900 font-semibold text-lg">
                            Quantidade disponível:
                        </p>
                        <p>{data && data.qtd_stock} itens disponíveis</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-y-8">
                    <div>
                        <h2 className="text-3xl text-blue-900 font-semibold">
                            {data && data.title}
                        </h2>
                        <p>Relógio</p>
                        <p className="grow">
                            {data && data.description}
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-6">
                        <div className="flex flex-row md:flex-col">
                            <h4>
                                Quantidade:
                            </h4>
                            <input
                                type="number"
                                min={1}
                                max={20}
                                value={qtd}
                                onChange={(e) => { setQtd(parseInt(e.target.value)) }}
                            />
                        </div>
                        <DefaultBtn
                            className="w-full"
                            onClick={handleClickPurchase}
                            bgColor={itemInCart && 'bg-green-500'}
                            text={itemInCart ? 'Item adicionado no carrinho' : 'Comprar'}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductPage
