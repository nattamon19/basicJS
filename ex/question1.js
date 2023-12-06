let ProductManagement = () => { // Parent function
    let products =  [] // share data
    
    let getAllProducts = () => { // Child function
        return products
    }
    let addProduct = (product) => { // product is object type
        products.push(product)
    }
    let removeAll = () => {
        products = []
    }
    let searchByName = (name) => {
        let filter_arr = products.filter((obj) => {
            return obj.name.toLowerCase().includes(name.toLowerCase())
            //return obj.name.toLowerCase() == name.toLowerCase()
        })
        return filter_arr
        // [{name: 'PS5'}]
    }
    let searchByPriceRange = (minPrice, maxPrice) => {
        let filter_price = products.filter((obj) => {
            return obj.price >= minPrice && obj.price <= maxPrice
        })
        return filter_price
    }
    return {getAllProducts, addProduct, removeAll, searchByName, searchByPriceRange}
}

const ProductMN = ProductManagement() // Instance
ProductMN.addProduct({id: 1, name: "Laptop", category: "Electronics", price: 999.99})
ProductMN.addProduct({id: 2, name: "PS5", category: "Electronics", price: 400.00})
ProductMN.addProduct({id: 3, name: "PS4", category: "Electronics", price: 200.00})
let result = ProductMN.getAllProducts(); // [{}, {}]
console.log(result);

let result2 = ProductMN.searchByName("ps")
console.log(result2);

let result3 = ProductMN.searchByPriceRange(500, 2000)
console.log(result3);


/*ProductMN.removeAll();
let result1 = ProductMN.getAllProducts();
console.log(result1)*/