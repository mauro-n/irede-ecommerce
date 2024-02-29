import { useEffect, useState } from "react"
import CategoryCard from "../../components/CategoryCard"
import Api from "../../services/Api"
import { anyObject } from "../.."

const CategoryPage = () => {
    const [data, setData] = useState<anyObject[]>([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await Api.getData('/categories')
        const data = await response.json()
        console.log(data)
        setData(data)
    }

    return (
        <main className="min-h-screen px-4 py-4 md:w-4/5 mx-auto container">
            <section className="flex flex-col items-center md:flex-row flex-wrap gap-x-8 gap-y-4 justify-start">
                {data.length > 1 && data.map((el) => {
                    return (
                        <CategoryCard
                            to={el.id}
                            key={el.title}
                            title={el.title}
                            img={el.img}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default CategoryPage
