import { Link, useNavigate } from 'react-router-dom'
import { anyObject } from '../..'
import routes from '../../enum/routes'

interface ProductCard extends React.HTMLAttributes<HTMLDivElement> {
    id: string,
    base_price: string,
    qtd?: number,
    img: string,
    categories: anyObject[],
    qtd_stock?: number,
    description?: string
}

const ProductCard = ({ id, title, base_price, categories, img, ...props }: ProductCard) => {
    const action = props.onClick as unknown as Function
    const navigate = useNavigate()

    const handleButtonClick = () => {
        if (action) {
            action()
        }
    }
    return (
        <article
            className='w-36 md:w-32 shadow-md h-80 flex flex-col justify-start cursor-pointer'
            onClick={() => { navigate(`${routes.products}/${id}`) }}
        >
            <img
                src={img}
                alt=""
                className='w-32 h-32 max-h-32 min-h-32 object-cover'
            />
            <div className='bg-zinc-50 px-2 py-4 rounded-b-md h-full flex flex-col'>
                <div className='grow-1'>
                    <h4 className='text-blue-900 text-lg leading-4 font-bold hover:underline'>
                        {title}
                    </h4>
                    <Link to={'/'} className='-my-1 hover:underline'>
                        {categories[0].title}
                    </Link>
                    <p >
                    </p>
                    <p className='text-orange-500 text-lg font-bold'>
                        R$ {base_price.replace('.', ',')}
                    </p>
                </div>
                <button
                    onClick={() => handleButtonClick()}
                    className='bg-blue-900 text-white px-4 py-1 rounded-md mt-auto hover:bg-blue-700'
                >
                    Comprar
                </button>
            </div>
        </article >
    )
}

export default ProductCard
