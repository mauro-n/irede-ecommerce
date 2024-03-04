import routes from '../../../enum/routes'
import { useNavigate } from 'react-router-dom'

interface CategoryFilterItem {
    id: string,
    title: string,
    active?: boolean
}

const CategoryFilterItem = ({ id, title, active }: CategoryFilterItem) => {
    const navigate = useNavigate()

    return (
        <li
            className={`p-2 ps-6 relative before:block ${active ? 'before:bg-orange-500' : ''} before:border-black before:border before:w-3 before:h-3 before:absolute before:left-1 before:rounded-full before:bottom-3 cursor-pointer hover:bg-slate-200 list-none rounded-sm`}
            onClick={() => navigate(`${routes.products}?cat=${id}`)}
        >
            {title}
        </li>
    )
}

export default CategoryFilterItem
