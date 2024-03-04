import mobileBanner from '../../../assets/mobileBanner.png'
import DefaultBtn from '../../../components/Buttons/DefaultBtn'
import ProductCard from '../../../components/Cards/ProductCard'
import desktopBanner from '../../../assets/bannerDesktop.png'
import { useContext, useEffect, useState } from 'react'
import cartService from '../../../services/Cart'
import Api from '../../../services/Api'
import { Context } from '../../../store'
import { anyObject } from '../../..'

const HomePage = () => {
    const [products, setProducts] = useState<ProductCard[]>()
    const { setContext } = useContext(Context)

    useEffect(() => {
        getData('/products')
    }, [])

    const getData = async (url: string) => {
        try {
            const response = await Api.getData(url)
            const data = await response.json()
            setProducts(data)
        } catch (err) {
            console.log('Connection Error')
        }
    }

    const handleAddToCart = (obj: ProductCard) => {
        setContext && setContext((prev: anyObject) => {
            return { ...prev }
        })
        cartService.updateCart(obj)
    }

    return (
        <main>
            <section>
                <div className="relative">
                    <div className='md:hidden'>
                        <img
                            loading='eager'
                            src={mobileBanner}
                            alt="Banner"
                            className='w-full'
                        />
                        <div className='flex absolute bottom-4 justify-center w-full'>
                            <DefaultBtn
                                className='w-4/5'
                                text='Aproveitar Oferta'
                            />
                        </div>
                    </div>
                    <div className='hidden md:block relative'>
                        <img
                            src={desktopBanner}
                            alt=""
                            className='w-full'
                        />
                        <div className='flex absolute bottom-24 right-36 justify-center'>
                            <DefaultBtn
                                text='Aproveitar Oferta'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-4 py-4 md:w-4/5 mx-auto container'>
                <h2 className='text-3xl text-blue-900 font-bold'>
                    Destaques
                </h2>
                <div className='flex flex-row justify-center md:justify-start flex-wrap items-center gap-5 py-10 md:flex-row'>
                    {products && products.map((el, i) => {
                        return (
                            <ProductCard
                                id={el.id}
                                key={i}
                                title={el.title}
                                base_price={el.base_price}
                                img={el.img}
                                onClick={() => handleAddToCart(el)}
                                categories={el.categories}
                                qtd={1}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default HomePage
