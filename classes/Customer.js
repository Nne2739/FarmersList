class Customer{
    constructor(name, email, shippingAddress,){
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }

    orderHistory(){
        return [];
    }

    addToOrderHistory(cart){
        return this.orderHistory.push(cart);
    }
}

module.exports = Customer;