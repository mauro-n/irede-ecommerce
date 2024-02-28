import ProductCard from "../components/ProductCard"

class Cart {
    readonly cartKey: string = 'cart'

    get(key: string) {
        const result = localStorage.getItem(key)
        if (result === null) {
            return false
        }
        return result
    }

    getCart(): ProductCard[] {
        const result = localStorage.getItem(this.cartKey)
        if (result === null) {
            return []
        }
        return JSON.parse(result)
    }

    clear() {
        localStorage.removeItem(this.cartKey)
    }

    removeById(id: string) {
        const currCart = localStorage.getItem(this.cartKey)
        if (!currCart) {
            return
        }
        const cartList: ProductCard[] = JSON.parse(currCart)
        const updatedCart = cartList.filter((el) => el.id !== id)
        localStorage.setItem(this.cartKey, JSON.stringify(updatedCart))
    }

    /**
     * Receives a ProductCard object and adds it to the cart
     * @param {[ProductCard]} product The product to be stored
     * @returns {void}
     */
    updateCart(obj: ProductCard) {
        const currCart = localStorage.getItem(this.cartKey)
        if (currCart === null) {
            localStorage.setItem(this.cartKey, JSON.stringify([{ ...obj, qtd: 1 }]))
        } else {
            const currList: ProductCard[] = JSON.parse(currCart)
            const currentElement = currList.find((el) => el.id === obj.id)
            var updatedList: ProductCard[];
            if (!currentElement) {
                updatedList = [...currList, { ...obj, qtd: 1 }]
            } else {
                updatedList = currList.map((el) => {
                    if (el.id === obj.id) {
                        return { ...obj, qtd: currentElement.qtd ? currentElement.qtd + 1 : 1 }
                    } else {
                        return el
                    }
                })
            }

            localStorage.setItem(this.cartKey, JSON.stringify(updatedList))
        }
    }

}

export default new Cart()