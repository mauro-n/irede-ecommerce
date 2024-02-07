import logo from '../../assets/logo2.svg'
import DefaultBtn from '../../components/DefaultBtn'

const RegisterPage = () => {
    return (
        <main className="flex flex-col-reverse justify-end pt-16 bg-blue-900 px-4 h-screen md:flex-row md:py-0 md:px-0">
            <div className='bg-white mb-52 md:w-1/2 md:bg-slate-100 md:h-full md:flex md:justify-center md:items-center px-4'>
                <form action="" className='py-8 flex flex-col items-center md:bg-white md:px-12'>
                    <h2 className='text-lg font-bold text-start w-full'>
                        Cadastre-se
                    </h2>
                    <div className='flex flex-col my-2 w-full'>
                        <label htmlFor="" className='font-bold'>
                            Nome: *
                        </label>
                        <input type="text"
                            className='py-1 px-2 bg-slate-100 rounded-md'
                            placeholder='Digite seu nome'
                        />
                    </div>
                    <div className='flex flex-col my-2 w-full'>
                        <label htmlFor="" className='font-bold'>
                            Email: *
                        </label>
                        <input type="text"
                            className='py-1 px-2 bg-slate-100 rounded-md'
                            placeholder='Digite seu e-mail'
                        />
                    </div>
                    <div className='flex flex-col my-2 w-full'>
                        <label htmlFor="" className='font-bold'>
                            Senha: *
                        </label>
                        <input type="text"
                            className='py-1 bg-slate-100 px-2 rounded-md'
                            placeholder='Digite sua senha'
                        />
                    </div>
                    <div className='my-2 w-full'>
                        <DefaultBtn
                            text='Cadastrar'
                            className='w-full'
                        />
                    </div>
                    <p>
                        Já possui cadastro? &nbsp;
                        <a href="" className='text-orange-500'>
                            Clique aqui
                        </a>
                    </p>
                </form>
            </div>
            <div className='bg-blue-900 flex justify-center my-8 md:w-1/2 md:flex-col md:items-center md:gap-4'>
                <h2 className='hidden md:block text-white text-xl'>
                    Sua nova experiência em <br /> compras online
                </h2>
                <img src={logo}
                    alt=""
                    className='md:w-56'
                />
            </div>
        </main>
    )
}

export default RegisterPage
