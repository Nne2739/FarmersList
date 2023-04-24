class Auth{
    constructor(customers){
        this.customers = [];
    }

    register(name, email, shippingAddress){
        return this.customers.push(name, email, shippingAddress);
    }

    login(email){
        return this.register;
    }
}

module.exports = Auth;