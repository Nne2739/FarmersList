class Product {
    constructor(name, price, description){
        this.name = name;
        this.price = price;
        this.description = description;
    }

    inStock(){
        return true;
    }

    display(){
        return `Name: ${this.name}, Price: ${this.price}, Description: ${this.description}`
    }
}

module.exports = Product;