interface CategoryCard extends React.HTMLAttributes<HTMLDivElement> {
    img: string
}

const CategoryCard = ({ img, title }: CategoryCard) => {
    return (
        <article
            tabIndex={0}
            className="flex py-2 px-2 bg-slate-100 rounded-lg shadow-md w-2/3 md:w-1/5 items-center cursor-pointer hover:bg-slate-200"
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
