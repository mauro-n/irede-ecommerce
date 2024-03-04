import mockImg from '../../../assets/ProductMockImg.png'

interface PedidoItem extends React.HTMLAttributes<HTMLDivElement> {
    total?: number,
    qtd?: string,
    data?: string,
    price?: string
}

const PedidoItem = ({ title, qtd, price, ...props }: PedidoItem) => {

    return (
        <div
            {...props}
            className='flex flex-col md:flex-row md:justify-between gap-y-2 p-4 cursor-pointer rounded-md hover:bg-slate-200'>
            <div className='flex justify-start items-center gap-x-4 md:w-2/3 sm:w-3/4'>
                <img
                    src={mockImg}
                    alt=""
                    className='w-12'
                />
                <section>
                    <h3 className={'font-medium text-sm'}>
                        {title}
                    </h3>
                    <p>
                        Quantidade: {qtd}
                    </p>
                </section>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-base font-medium'>
                    R$ {price}
                </p>
            </div>
        </div>
    )
}

export default PedidoItem
