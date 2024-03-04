interface DefaultBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string,
    bgColor?: string | boolean
}

const DefaultBtn = ({ text, className, bgColor, ...props }: DefaultBtn) => {
    return (
        <button
            {...props}
            className={`${bgColor ? bgColor : 'bg-orange-500'} text-white px-7 py-2 rounded-md font-medium ${className}`}
        >
            {text}
        </button>
    )
}

export default DefaultBtn

