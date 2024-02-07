import productImg from '../../assets/ProductMockImg.png'

const ProductCard = () => {
    return (
        <article className='w-36 md:w-32 shadow-md'>
            <div>
                <img
                    src={productImg}
                    alt=""
                    className='w-full'
                />
            </div>
            <div className='bg-zinc-50 px-2 py-4 rounded-b-md'>
                <h4 className='text-blue-900 text-lg font-bold'>
                    Nique Air Surf
                </h4>
                <p className='-my-1'>
                    Tênis
                </p>
                <p className='text-orange-500 text-lg font-bold'>
                    R$ 200,00
                </p>
                <button
                    className='bg-blue-900 text-white px-4 py-1 rounded-md'
                >
                    Comprar
                </button>
            </div>
        </article>
    )
}

export default ProductCard
