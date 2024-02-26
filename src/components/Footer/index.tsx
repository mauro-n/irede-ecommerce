import logo from '../../assets/logo2.svg'
import socials from '../../assets/socials.png'

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white px-4 py-6 flex flex-col gap-y-7 text-xs h-72 w-screen">
            <div className="flex flex-col gap-y-7 md:flex-row md:gap-x-12 md:px-20">
                <div className="flex flex-row gap-6 md:w-3/12">
                    <div>
                        <img src={logo} className='min-w-28 max-w-28' alt="" />
                        <img src={socials} className='mt-8 ml-0 w-28' alt="" />
                    </div>
                    <p className='text-xs'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In optio error cum modi saepe?
                    </p>
                </div>
                <nav className='flex flex-wrap gap-8 md:gap-x-16'>
                    <div className='flex flex-col'>
                        <h5 className='font-semibold'>
                            Informações
                        </h5>
                        <a href="">Lorem ipsum dolor</a>
                        <a href="">Lorem ipsum dolor</a>
                        <a href="">Lorem ipsum dolor</a>
                        <a href="">Lorem ipsum dolor</a>
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='font-semibold'>
                            Informações
                        </h5>
                        <a href="">Lorem ipsum dolor</a>
                        <a href="">Lorem ipsum dolor</a>
                        <a href="">Lorem ipsum dolor</a>
                        <a href="">Lorem ipsum dolor</a>
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='font-semibold'>
                            Localização
                        </h5>
                        <a href="">
                            Rua Martinho Rodrigues, 331
                        </a>
                        <a href="">
                            Bairro de Fátima, Fortaleza-CE
                        </a>
                    </div>
                </nav>
            </div>
            <hr className='border-white mt-12 mb-6' />
            <p className='text-center'>
                2023 Irede
            </p>
        </footer>
    )
}

export default Footer
