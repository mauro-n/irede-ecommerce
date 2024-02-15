import mockImg from '../../assets/ProductMockImg.png'

interface PedidoCard extends React.HTMLAttributes<HTMLDivElement> {
    base_price?: string,
    qtd?: number,
    short?: boolean
}

const PedidoCard = ({ title, base_price, short = false, ...props }: PedidoCard) => {
    return (
        <article
            {...props}
            className='flex flex-col md:flex-row md:justify-between gap-y-2 py-4'>
            <div className='flex justify-start items-center gap-x-6 md:w-2/3 sm:w-3/4'>
                <img
                    src={mockImg}
                    alt="Um tênis branco da Nique com detalhes azuis"
                    className='w-1/3 max-w-16'
                />
                <div>
                    <h3 className={`font-medium ${short ? 'text-base' : 'text-2xl'}  md:text-base`}>
                        {title}
                    </h3>
                    <p className='font-medium text-stone-500 md:text-sm md:-translate-y-1'>
                        Tênis
                    </p>
                    <p className='font-medium text-2xl md:text-base md:text-orange-500'>
                        R$ {base_price?.replace('.', ',')}
                    </p>
                </div>
            </div>
            {!short &&
                <div className='flex justify-between items-center'>
                    <p className='text-2xl text-stone-500 md:hidden'>
                        Status:
                    </p>
                    <p className='text-3xl md:text-base text-green-700 font-medium'>
                        Finalizado
                    </p>
                </div>
            }

        </article>
    )
}

export default PedidoCard
