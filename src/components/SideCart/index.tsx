import { useContext, useEffect, useRef } from "react"
import PedidoCard from "../PedidoCard"
import { Context, contextContent } from "../../context"
import useOutsideAlerter from "../../hooks/useOutsideAlerter"
import styles from './styles.module.css'

const SideCart = () => {
    const { context, setContext } = useContext(Context)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        handleCloseSidebar()
    }, [location])

    const handleCloseSidebar = () => {
        if (!setContext) return
        setContext((prev: contextContent) => {
            return { ...prev, showSideCart: false }
        })
    }

    useOutsideAlerter(wrapperRef, handleCloseSidebar)


    return (
        <>
            <div className='absolute top-0 left-0 w-screen h-screen bg-neutral-500 bg-opacity-70 z-40' hidden={context?.showSideCart ? false : true}>
            </div>
            <aside className={`${context?.showSideCart ? styles.show : styles.hide} transition-all absolute top-0 bg-white w-2/3 h-screen px-6 pt-8 rounded-md z-50`}
                ref={wrapperRef}
            >
                <h3 className="text-lg font-semibold">
                    Meu Carrinho
                </h3>
                <hr className="border border-black" />
                <PedidoCard short />
            </aside>
        </>
    )
}

export default SideCart
