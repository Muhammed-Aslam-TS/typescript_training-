"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `client is ${this.client} address is ${this.details}, ${this.amount}`;
    }
}
let i1 = new Invoice('aslam', 'work on at brototype', 2500);
let i2 = new Invoice('shamil', 'work on at infoysis', 7000);
console.log(i1);
console.log(i1.client);
i1.client = 'ashik';
i2.amount = 79000;
console.log(i1);
let invoices = [];
invoices.push(i1);
invoices.push(i2);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.format());
});
