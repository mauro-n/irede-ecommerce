import styles from './styles.module.css'
import { useContext, useEffect, useRef } from 'react'
import { SidebarBtn } from '../SidebarBtn'
import { Context, contextContent } from '../../context'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    const { context, setContext } = useContext(Context)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const firstBtnRef = useRef<HTMLButtonElement>(null)
    const location = useLocation()

    useEffect(() => {
        if (context?.showSidebar === false) return
        firstBtnRef.current && firstBtnRef.current.focus()
    }, [context])

    useEffect(() => {
        handleCloseSidebar()
    }, [location])

    const handleCloseSidebar = () => {
        if (!setContext) return
        setContext((prev: contextContent) => {
            return { ...prev, showSidebar: false }
        })
    }

    useOutsideAlerter(wrapperRef, handleCloseSidebar)

    return (
        <>
            <div className='absolute top-0 left-0 w-screen h-screen bg-neutral-500 bg-opacity-70 z-40' hidden={context?.showSidebar ? false : true}>
            </div>
            <aside
                className={`${context?.showSidebar ? styles.show : styles.hide} transition-all absolute top-0 bg-white w-2/3 h-screen px-6 pt-8 rounded-md z-50`}
                ref={wrapperRef}
            >
                <h2 className='font-bold border-b-2 pb-2 border-stone-900 mb-1'>
                    Páginas
                </h2>
                <SidebarBtn title='Home' active to={'/'} />
                <SidebarBtn title='Produtos' />
                <SidebarBtn title='Categorias' />
                <SidebarBtn title='Meus pedidos' to={'/meus-pedidos'} />
            </aside>
        </>
    )
}

export default Sidebar