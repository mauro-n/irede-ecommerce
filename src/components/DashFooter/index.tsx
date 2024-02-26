import logo from '../../assets/logo2.svg'

const DashFooter = () => {
    return (
        <footer className="bg-blue-900 text-white px-4 py-6 flex flex-col gap-y-7 text-xs h-32 w-screen">
            <div className="flex flex-row gap-6">
                <div>
                    <img src={logo} className='min-w-28 max-w-28' alt="" />
                </div>
                <p className='text-xs'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In optio error cum modi saepe?
                </p>
            </div>
            <p className='text-center'>
                2023 Irede
            </p>
        </footer>
    )
}

export default DashFooter
