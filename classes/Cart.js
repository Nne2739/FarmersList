class Cart{
    constructor(products, total){
        this.products = [];
        this.total = [].reduce((a,b) => a + b, 0);
    }

    addProduct(product){
        return this.products.push(product);
    }

    removeProduct(i){
        return this.products.splice(i);
    }
}

module.exports = Cart;