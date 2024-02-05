interface DefaultBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
}

const DefaultBtn = ({ text, ...props }: DefaultBtn) => {
    return (
        <button
            {...props}
            className="bg-orange-500 text-white px-7 py-2 rounded-md font-medium"
        >
            {text}
        </button>
    )
}

export default DefaultBtn

