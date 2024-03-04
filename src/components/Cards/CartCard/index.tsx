import mockImg from '../../../assets/ProductMockImg.png'
import cartService from '../../../services/Cart'

interface CartCard extends React.HTMLAttributes<HTMLDivElement> {
    id: string,
    base_price?: string,
    qtd?: number,
    onRemoval?: () => void
}

const CartCard = ({ id, title, base_price, onRemoval, qtd, ...props }: CartCard) => {

    const handleSelfRemove = () => {
        cartService.removeById(id)
        onRemoval && onRemoval()
    }

    return (
        <article
            {...props}
            className='flex flex-col md:justify-between gap-y-1 py-5 relative'>
            <div className='flex justify-start items-center gap-x-6 w-full'>
                <img
                    src={mockImg}
                    alt="Um tênis branco da Nique com detalhes azuis"
                    className='w-1/3 max-w-16'
                />
                <div>
                    <h3 className={'font-bold'}>
                        {title}
                    </h3>
                    <p className='font-medium text-stone-500 md:text-sm md:-translate-y-1'>
                        Tênis
                    </p>
                    <p className='font-medium text-2xl md:text-base md:text-orange-500'>
                        R$ {base_price?.replace('.', ',')}
                    </p>
                </div>
                <div className='flex flex-col items-center absolute top-6 left-8 rounded-full w-6 bg-green-200'>
                    {qtd}
                </div>
            </div>
            <button
                onClick={handleSelfRemove}
                className='text-red-600 hover:underline'>
                remover
            </button>
        </article>
    )
}

export default CartCard
