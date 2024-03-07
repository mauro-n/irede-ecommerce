import searchLens from '../../assets/searchLensIcon.svg'

export const SearchBar = () => {
    return (
        <div className='relative md:w-3/4'>
            <img src={searchLens} className='absolute top-2 left-3 h-6' alt="íconde de busca" />
            <input type="text" className='border w-full h-10 rounded-md pl-10 placeholder:text-neutral-400' placeholder='Buscar' />
        </div>
    )
}
