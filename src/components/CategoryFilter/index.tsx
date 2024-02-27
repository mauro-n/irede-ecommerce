import CategoryFilterItem from "../CategoryFilterItem"

const CategoryFilter = () => {
    return (
        <aside className="shadow-md p-4">
            <CategoryFilterItem title="Tênis" active />
            <CategoryFilterItem title="Blusa" />
            <CategoryFilterItem title="Acessórios" />
            <CategoryFilterItem title="Calças" />
        </aside>
    )
}

export default CategoryFilter