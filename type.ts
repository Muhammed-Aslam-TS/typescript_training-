
class person {
    private readonly name:string
    constructor(name:string){
        this.name = name
    }

    get():string{
        return this.name
    }
}

let p1= new person('jone')
console.log(p1.get());


