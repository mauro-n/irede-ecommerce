import { category } from "../.."
import CategoryFilterItem from "../CategoryFilterItem"

interface CategoryFilter {
    categories?: category[],
    activeId?: string | null
}

const CategoryFilter = ({ categories, activeId }: CategoryFilter) => {
    return (
        <aside className="shadow-md p-4">
            <ul>
                {categories?.map((el) => {
                    return (
                        <CategoryFilterItem
                            key={el.id}
                            id={el.id}
                            title={el.title}
                            active={activeId ? parseInt(activeId) === parseInt(el.id) : false}
                        />
                    )
                })}
            </ul>
        </aside>
    )
}

export default CategoryFilter