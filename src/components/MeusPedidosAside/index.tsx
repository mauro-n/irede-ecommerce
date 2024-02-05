import { useState } from 'react'
import arrowDown from '../../assets/arrowIcon.svg'

export const MeusPedidosAside = () => {
    const [expanded, setExpanded] = useState(false)

    const handleToggleExpand = () => {
        setExpanded(prev => !prev)
    }

    return (
        <nav className={`${expanded ? 'pb-2' : 'pb-0'} bg-orange-500 rounded-lg md:w-1/3`}>
            <div
                className='relative flex justify-center items-center py-4'
                onClick={handleToggleExpand}
                role='button'
            >
                <h3 className='text-white font-medium text-2xl'>
                    Meus Pedidos
                </h3>
                <img src={arrowDown}
                    alt="botão para expandir a navegação"
                    className='absolute right-10 h-6 w-6'
                />
            </div>
            <div className={`bg-slate-100 px-2 mx-2 rounded-lg overflow-hidden ${expanded ? '' : 'h-0'}`}>
                oi
            </div>
        </nav>
    )
}

export default MeusPedidosAside
