import styles from './styles.module.css'
import { useContext, useEffect, useRef } from 'react'
import { SidebarBtn } from '../SidebarBtn'
import { Context, contextContent } from '../../context'
import { useLocation } from 'react-router-dom'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
import SecondaryBtn from '../SecondaryBtn'

const DashSidebar = () => {
    const { context, setContext } = useContext(Context)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const firstBtnRef = useRef<HTMLButtonElement>(null)
    const location = useLocation()

    useEffect(() => {

    }, [])

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
            <div className='fixed top-0 left-0 w-screen h-screen bg-neutral-500 bg-opacity-70 z-40' hidden={context?.showSidebar ? false : true}>
            </div>
            <aside
                className={`${context?.showSidebar ? styles.show : styles.hide} transition-all fixed top-0 bg-white w-2/3 h-screen px-6 pt-8 rounded-md z-50`}
                ref={wrapperRef}
            >
                <h2 className='font-bold border-b-2 pb-2 border-stone-900 mb-1'>
                    Dashboard
                </h2>
                <SidebarBtn title='Home' active={location.pathname === '/'} to={'/'} />
                <SidebarBtn title='Produtos' />
                <SidebarBtn title='Categorias' />
                <SidebarBtn title='Meus pedidos' active={location.pathname === '/meus-pedidos'} to={'/meus-pedidos'} />
                <hr />
                {context && context.user ?
                    <div className='flex flex-col items-center gap-y-2 mt-2'>
                        <h3>Bem vindo(a) {context.user.name}!</h3>
                        <SecondaryBtn
                            text='Sair'
                        />
                    </div> :
                    <div className='flex justify-around pt-2'>
                        <a href="/signup">
                            Cadastre-se
                        </a>
                        <a href="/login">
                            <SecondaryBtn
                                text='Entrar'
                            />
                        </a>
                    </div>
                }

            </aside>
        </>
    )
}

export default DashSidebar