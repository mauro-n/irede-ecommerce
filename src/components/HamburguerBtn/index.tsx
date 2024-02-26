import hamBtn from '../../assets/hamburguerBtn.svg'
interface HamburguerBtn extends React.HTMLAttributes<HTMLDivElement> { }

export const HamburguerBtn = ({ ...props }: HamburguerBtn) => {
    return (
        <div
            {...props}
            role='button'
            tabIndex={0}
            className='relative'>
            <img src={hamBtn} className='h-8' alt="Menu de opções" />
        </div>
    )
}
