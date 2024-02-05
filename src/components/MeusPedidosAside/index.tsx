import { useState } from 'react'
import { NavLink } from "react-router-dom";
import arrowDown from '../../assets/arrowIcon.svg'

export const MeusPedidosAside = () => {
    const [expanded, setExpanded] = useState(false)

    const handleToggleExpand = () => {
        setExpanded(prev => !prev)
    }

    return (
        <nav className={`${expanded ? 'pb-2' : 'pb-0'} bg-orange-500 md:bg-slate-100 rounded-lg md:w-1/3 h-fit`}>
            <div
                className='relative flex justify-center items-center py-4 md:pointer-events-none md:justify-start md:px-4'
                onClick={handleToggleExpand}
                role='button'
            >
                <h3 className='text-white font-medium text-2xl md:text-sm md:font-semibold md:text-orange-500'>
                    Meus Pedidos
                </h3>
                <img src={arrowDown}
                    alt="botão para expandir a navegação"
                    className='absolute right-10 h-6 w-6 md:hidden'
                />
            </div>
            <hr className='hidden md:block border-black mx-4' />
            <div className={`bg-slate-100 px-2 md:py-2 gap-y-2 mx-2 flex-col rounded-lg overflow-hidden ${!expanded && 'h-0'} md:h-auto`}>
                <NavLink
                    to="/messages"
                    className={() => 'text-stone-500'}
                >
                    Minhas informações
                </NavLink>
            </div>
        </nav>
    )
}

export default MeusPedidosAside
