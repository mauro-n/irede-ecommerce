import CategoryFilter from "../../components/CategoryFilter"
import ProductCard from "../../components/ProductCard"

const ProductsPage = () => {
    return (
        <main className="min-h-screen px-4 py-4 md:w-4/5 mx-auto flex gap-x-6 container">
            <div className="w-1/5">
                <CategoryFilter />
            </div>
            <div className="w-full flex gap-x-4">
                <ProductCard
                    id="1"
                    title="item 1 teste teste teste"
                    base_price="12.5"
                    img=""
                    categories={[{title: 'mock'}]}
                />
                <ProductCard
                    id="1"
                    title="item 1 teste teste teste"
                    base_price="12.5"
                    img=""
                    categories={[{title: 'mock'}]}
                />
                <ProductCard
                    id="1"
                    title="item 1 teste teste teste"
                    base_price="12.5"
                    img=""
                    categories={[{title: 'mock'}]}
                />
            </div>
        </main>
    )
}

export default ProductsPage