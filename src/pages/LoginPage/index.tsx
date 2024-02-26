import Api from '../../services/Api'
import Auth from '../../services/Auth'
import DefaultBtn from '../../components/DefaultBtn'
import logo from '../../assets/logo2.svg'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context'
import { anyObject } from '../..'

const LoginPage = () => {
    type loginData = {
        [key: string]: string
    }
    const [data, setData] = useState<loginData>()
    const [error, setError] = useState('')
    const { setContext } = useContext(Context)
    const navigate = useNavigate()

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!data?.email || !data?.pw) {
            setError("Por favor preencha todos os campos")
            return
        }

        try {
            const response = await Api.postJsonData('/auth', {
                email: data.email,
                pw: data.pw
            })

            if (response.status !== 200) {
                setError('Email ou senha inválidos')
                return
            }

            const { name, role, token } = await response.json()
            const user = {
                name, role, token
            }
            Auth.storeUser(user)

            setContext && setContext((prev: anyObject) => {
                return { ...prev, user: user }
            })

            navigate('/')
        } catch (err) {
            setError('Problemas de conexão')
        }
    }

    const handleChange = (key: string, text: string) => {
        setError('')
        setData((prev) => {
            return {
                ...prev,
                [key]: text
            }
        })
    }

    return (
        <main className="flex flex-col-reverse justify-end pt-16 bg-blue-900 px-4 h-screen md:flex-row md:py-0 md:px-0">
            <div className='bg-white mb-52 md:w-1/2 md:bg-slate-100 md:h-full md:flex md:justify-center md:items-center'>
                <form action="" className='py-8 flex flex-col items-center md:bg-white md:px-12 px-4'>
                    <h2 className='text-lg font-bold text-start w-full'>
                        Fazer Login
                    </h2>
                    <div className='flex flex-col my-2 w-full'>
                        <label htmlFor="" className='font-bold'>
                            Email: *
                        </label>
                        <input
                            type="text"
                            className='py-1 px-2 bg-slate-100 rounded-md'
                            placeholder='Digite seu e-mail'
                            onChange={(e) => { handleChange('email', e.target.value) }}
                        />
                    </div>
                    <div className='flex flex-col my-2 w-full'>
                        <label htmlFor="" className='font-bold'>
                            Senha: *
                        </label>
                        <input
                            type="password"
                            className='py-1 bg-slate-100 px-2 rounded-md'
                            placeholder='Digite sua senha'
                            onChange={(e) => { handleChange('pw', e.target.value) }}
                        />
                    </div>
                    {error &&
                        <p className='text-red-500'>
                            {error}
                        </p>
                    }
                    <div className='my-2 w-full'>
                        <DefaultBtn
                            text='Entrar'
                            className='w-full'
                            onClick={(e) => { handleSubmit(e) }}
                        />
                    </div>
                    <p>
                        Não tem uma conta? &nbsp;
                        <a href="/signup" className='text-orange-500'>
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

export default LoginPage
