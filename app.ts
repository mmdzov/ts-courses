type typeLogic = string[]
type prodLogic = (...prods: typeLogic) => typeLogic

class Admin {
    constructor(public products: typeLogic) {
        console.log(this.products)
    }
    setProd: prodLogic = (...restProds) => {
        this.products.push(...restProds)
        return this.products
    }
}

const instance = new Admin([])

instance.setProd("mmdzov", "Foo", "Bar","shalvar")

console.log(instance.products)