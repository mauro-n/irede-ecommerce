
interface SecondaryBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
}

const SecondaryBtn = ({ text, ...props }: SecondaryBtn) => {
    return (
        <button
            {...props}
            className='bg-blue-900 text-white px-4 py-1 rounded-md hover:bg-blue-700'
        >
            {text}
        </button>
    )
}

export default SecondaryBtn
