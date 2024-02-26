import DefaultBtn from "../../components/DefaultBtn"

const ProductPage = () => {
    return (
        <main className="min-h-0 md:min-h-screen px-4 py-4 md:w-3/4 mx-auto container">
            <section className="flex flex-col md:flex-row p-6 bg-slate-100 justify-around items-center gap-y-6 md:gap-y-0">
                <div>
                    <img src="https://placehold.co/300" alt="x" />
                    <div className="hidden md:block">
                        <p className="text-blue-900 font-semibold text-lg">
                            Quantidade disponível:
                        </p>
                        <p>100 itens disponíveis</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                    <h2 className="text-3xl text-blue-900 font-semibold">
                        Smart What
                    </h2>
                    <p>Relógio</p>
                    <p className="grow">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ullam quam nulla aspernatur quos earum eligendi, vitae nemo!
                    </p>
                    <div className="flex flex-col md:flex-row gap-x-6">
                        <div className="flex flex-row md:flex-col">
                            <h4>
                                Quantidade:
                            </h4>
                            <p>x</p>
                        </div>
                        <DefaultBtn
                            className="w-full"
                            text="Comprar"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductPage
