import mobileBanner from '../../assets/mobileBanner.png'
import DefaultBtn from '../../components/DefaultBtn'
import ProductCard from '../../components/ProductCard'
import desktopBanner from '../../assets/bannerDesktop.png'

const HomePage = () => {
    return (
        <main>
            <section>
                <div className="relative">
                    <div className='md:hidden'>
                        <img
                            src={mobileBanner}
                            alt=""
                            className='w-full'
                        />
                        <div className='flex absolute bottom-4 justify-center w-full'>
                            <DefaultBtn
                                className='w-4/5'
                                text='Aproveitar Oferta'
                            />
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img
                            src={desktopBanner}
                            alt=""
                            className='w-full'
                        />
                    </div>
                </div>
            </section>
            <section className='px-4 py-4 md:w-4/5 mx-auto container'>
                <h2 className='text-3xl text-blue-900 font-bold'>
                    Destaques
                </h2>
                <div className='flex flex-col items-center gap-5 py-10'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>
        </main>
    )
}

export default HomePage
