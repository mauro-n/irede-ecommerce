import productImg from '../../assets/ProductMockImg.png'

interface ProductCard extends React.HTMLAttributes<HTMLDivElement> {
    id: string,
    base_price: string,
    qtd?: number
}

const ProductCard = ({ title, base_price, ...props }: ProductCard) => {
    const action = props.onClick as unknown as Function

    const handleButtonClick = () => {
        if (action) {
            action()
        }
    }
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
                    {title}
                </h4>
                <p className='-my-1'>
                    Tênis
                </p>
                <p className='text-orange-500 text-lg font-bold'>
                    R$ {base_price.replace('.', ',')}
                </p>
                <button
                    onClick={() => handleButtonClick()}
                    className='bg-blue-900 text-white px-4 py-1 rounded-md'
                >
                    Comprar
                </button>
            </div>
        </article >
    )
}

export default ProductCard
