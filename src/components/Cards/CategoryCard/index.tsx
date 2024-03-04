import { useNavigate } from 'react-router-dom'
import routes from '../../../enum/routes'

interface CategoryCard extends React.HTMLAttributes<HTMLDivElement> {
    img: string
    to?: string
}

const CategoryCard = ({ img, to, title }: CategoryCard) => {
    const navigate = useNavigate()

    return (
        <article
            tabIndex={0}
            className="flex py-2 px-2 bg-slate-100 rounded-lg shadow-md w-2/3 md:w-1/5 items-center cursor-pointer hover:bg-slate-200"
            onClick={() => navigate(`${routes.products}?cat=${to}`)}
        >
            {img &&
                <img
                    className="w-20 h-20 object-cover"
                    src={img}
                    alt=""
                />
            }
            <p className="w-full text-center font-semibold">
                {title}
            </p>
        </article>
    )
}

export default CategoryCard
