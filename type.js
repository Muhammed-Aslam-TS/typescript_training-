"use strict";
class person {
    constructor(name) {
        this.name = name;
    }
    get() {
        return this.name;
    }
}
let p1 = new person('jone');
console.log(p1.get());
