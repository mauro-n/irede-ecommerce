import { useState } from 'react'
import PedidoItem from '../PedidoItem'
import { orderStatus } from '../../../enum/orders'
import { anyObject } from '../../..'

interface PedidoCard extends React.HTMLAttributes<HTMLDivElement> {
    total: number,
    qtd?: number,
    data: string,
    items: anyObject[],
    status: string
}

const PedidoCard = ({ id, total, items, status, data, ...props }: PedidoCard) => {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => {
        setExpanded((prev) => !prev)
    }
    return (
        <div>
            <article
                {...props}
                className={`flex flex-col md:flex-row md:justify-between gap-y-2 p-4 cursor-pointer ${!expanded && 'hover:bg-slate-200'}`}
                onClick={() => { toggleExpanded() }}
            >
                <div className='flex justify-start items-center gap-x-6 md:w-2/3 sm:w-3/4'>
                    <div>
                        <h3 className={'font-medium text-2xl md:text-base'}>
                            Pedido: #{id}
                        </h3>
                        <p className='font-medium text-stone-500 md:text-sm md:-translate-y-1'>
                            {new Date(data).toLocaleDateString()}
                        </p>
                        <p className='font-medium text-2xl md:text-base md:text-orange-500'>
                            Total: R$ {String(total.toFixed(2)).replace('.', ',')}
                        </p>
                    </div>
                </div>
                <div className='min-w-1/2 flex flex-col justify-center items-end gap-y-2'>
                    <p className='text-2xl text-stone-500 md:hidden'>
                        Status:
                    </p>
                    {status === orderStatus.pendingPayment ?
                        <p className='text-sm font-medium text-end leading-4'>
                            Aguardando pagamento
                        </p> :
                        <></>
                    }
                    {status === orderStatus.complete ?
                        <p className='text-sm font-medium text-green-700 text-end leading-4'>
                            Entregue
                        </p> :
                        <></>
                    }
                    {status === orderStatus.transit ?
                        <p className='text-sm font-medium text-green-700 text-end leading-4'>
                            Em trânsito
                        </p> :
                        <></>
                    }
                    <button
                        className='underline'
                    >
                        {expanded ? 'Esconder' : 'Ver detalhes'}
                    </button>
                </div>
            </article>
            <div className={`overflow-y-hidden ${expanded ? 'h-auto' : 'h-0'}`}>
                {items.length > 0 ?
                    items.map((item, id) => {
                        return (
                            <PedidoItem
                                key={id}
                                title={item.product.title}
                                qtd={item.product_qtd}
                                price={item.product_curr_price}
                            />
                        )
                    }) : <></>}
            </div>
        </div>
    )
}

export default PedidoCard
