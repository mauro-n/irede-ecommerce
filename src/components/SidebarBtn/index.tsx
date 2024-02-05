import { useRef, useEffect, useContext } from 'react'
import { Context } from '../../context'
import { useNavigate } from 'react-router-dom'

interface SidebarBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    active?: boolean,
    to?: string
}

export const SidebarBtn = ({ title, active, to = '#', ...props }: SidebarBtn) => {
    const ref = useRef<HTMLButtonElement>(null)
    const { context } = useContext(Context)
    const navigate = useNavigate()


    useEffect(() => {
        if (context.showSidebar === true && active) {
            ref.current && ref.current.focus()
        }
    }, [context])

    return (
        <button {...props}
            ref={ref}
            className={`${active ? 'text-orange-600 bg-slate-100' : 'text-stone-500'} w-full rounded-md py-2 font-medium`}
            role='link'
            onClick={() => { navigate(to) }}
        >
            {title}
        </button>
    )
}
