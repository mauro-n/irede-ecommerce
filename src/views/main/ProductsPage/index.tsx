import { useEffect, useState } from 'react'
import CategoryFilter from '../../../components/Cards/CategoryFilter'
import ProductCard from '../../../components/Cards/ProductCard'
import Api from '../../../services/Api'
import urls from '../../../enum/urls'
import { category } from '../../..'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ProductsPage = () => {
    const [data, setData] = useState<category[]>()
    const [products, setProducts] = useState<ProductCard[]>()
    const [params] = useSearchParams()
    const location = useLocation()

    useEffect(() => {
        getData()
        getProducts()
    }, [])

    useEffect(() => {
        getProducts()
    }, [location])

    const getData = async () => {
        const response = await Api.getData(urls.categories)
        const data = await response.json()
        setData(data)
    }

    const getProducts = async () => {
        const response = await Api.getData(`${urls.products}?categoryId=${params.get('cat') || 'all'}`)
        const data = await response.json()
        setProducts(data)
    }

    return (
        <main className="min-h-screen px-4 py-4 md:w-4/5 items-center md:items-start mx-auto flex flex-col md:flex-row gap-6 container">
            <Helmet>
                <title>Produtos</title>
            </Helmet>
            <div className="w-full md:w-1/5">
                <CategoryFilter
                    categories={data && data}
                    activeId={params.get('cat')}
                />
            </div>
            <div className="w-full flex gap-x-4 flex-wrap justify-center md:justify-start">
                {Array.isArray(products) && products?.map((el) => {
                    return (
                        <ProductCard
                            key={el.id}
                            id={el.id}
                            title={el.title}
                            base_price={el.base_price}
                            img={el.img}
                            categories={el.categories}
                            qtd={1}
                        />
                    )
                })}
            </div>
        </main>
    )
}

export default ProductsPage