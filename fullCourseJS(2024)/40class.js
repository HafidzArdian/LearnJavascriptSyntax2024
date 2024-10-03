// class = (es6 Feature) provides a more structured and cleaner way to
//          work with objects compared to traditional constructro functions
//          ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayeProduct(){
        console.log(`Product: ${this.name} `); 
        console.log(`Price: $${this.price.toFixed(2)} `); 
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salexTax = 0.05;

const product1 = new Product("Laptop", 120.00);
const product2 = new Product("Phone", 20.9911);
const product3 = new Product("Tablet", 30.99);

product3.displayeProduct()


const total = product3.calculateTotal(salexTax);
console.log(`Total price (With tax): $${total.toFixed(2)}`);