import logo from '../../../assets/logo2.svg'
import Api from '../../../services/Api'
import Auth from '../../../services/Auth'
import { Context } from '../../../store'
import { useContext, useState } from 'react'
import { anyObject } from '../../..'
import { AuthenticationError } from '../../../exceptions/AuthenticationError'
import { useNavigate } from 'react-router-dom'
import DefaultBtn from '../../../components/Buttons/DefaultBtn'

const RegisterPage = () => {
    const [inputData, setInputData] = useState<anyObject>()
    const [error, setError] = useState('')
    const { setContext } = useContext(Context)
    const navigate = useNavigate()

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!inputData?.email || !inputData?.pw || !inputData?.name) {
            setError('Por favor preencha todos os campos!')
            return
        }

        const payload = {
            name: inputData.name,
            email: inputData.email,
            pw: inputData.pw
        }

        try {
            const response = await Api.postJsonData('/users', payload)
            const data = await response.json()

            if (response.status === 400) {
                throw new AuthenticationError('Dados inválidos!', 'InvalidParams')
            }

            if (response.status !== 201) {
                throw new AuthenticationError('Erro interno', 'InternalError')
            }

            const user = {
                name: data.name,
                role: data.role,
                token: data.token
            }

            Auth.storeUser(user)

            setContext && setContext((prev: anyObject) => {
                return {
                    ...prev,
                    user: user
                }
            })

            navigate('/')
        } catch (err) {
            if (err instanceof AuthenticationError) {
                setError(err.message)
                return
            }

            console.log(err)
            setError('Problema de conexão, verifique sua conexão com a internet')
        }
    }

    const handleChange = (key: string, value: string) => {
        setInputData((prev) => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

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
                        <input
                            type="text"
                            className='py-1 px-2 bg-slate-100 rounded-md'
                            placeholder='Digite seu nome'
                            onChange={(e) => { handleChange('name', e.target.value) }}
                        />
                    </div>
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
                            text='Cadastrar'
                            className='w-full'
                            onClick={(e) => handleSubmit(e)}
                        />
                    </div>
                    <p>
                        Já possui cadastro? &nbsp;
                        <a href="/login" className='text-orange-500'>
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
