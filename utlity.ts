
//utility types
//1st partial type

interface Pointer{
    x:number;
    y:number
}
let PointerPart:Partial<Pointer> = {} 
PointerPart.y = 10
PointerPart.x = 10
console.log(PointerPart);

//2nd partial type

interface Car{
    make:string
    model:string
    mileage?:number
}
let myCar:Required<Car> ={
    make:'bmw',
    model:'bmw800',
    mileage:1000
}

console.log(myCar);


//3nd partial type

const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25,
  };
  
  console.log(nameAgeMap);


//4th partial type





