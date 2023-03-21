
// //class concepts

// class person {
//     private readonly name:string
//     constructor(name:string){
//         this.name = name
//     }

//     get():string{
//         return this.name
//     }
// }

// let p1= new person('jone')
// console.log(p1.get());




// //inheritance___implement


// interface school {
//     getArea:()=> number;
// }

// class student implements school {
//     constructor(protected readonly fname: string,protected readonly lname:string){

//     }
//     getArea():any{
//         return this.fname+' '+ this.lname;
//     }
// }

// let s1 = new student('muhammed','aslam')
// console.log(s1.getArea());


// //utility types
// //1st partial type

// interface Pointer{
//     x:number;
//     y:number
// }
// let PointerPart:Partial<Pointer> = {} 
// PointerPart.y = 10
// PointerPart.x = 10
// console.log(PointerPart);

// //2nd partial type

// interface Car{
//     make:string
//     model:string
//     mileage?:number
// }
// let myCar:Required<Car> ={
//     make:'bmw',
//     model:'bmw800',
//     mileage:1000
// }

// console.log(myCar);


// //3nd partial type

// const nameAgeMap: Record<string, number> = {
//     'Alice': 21,
//     'Bob': 25,
//   };
  
//   console.log(nameAgeMap);


// //4th partial type

//   interface Person {
//     name: string;
//     age: number;
//     location?: string;
//   }
      
//   const bob: Omit<Person, 'age' | 'location'> = {
//     name: 'Bob'
//     // `Omit` has removed age and location from the type and they can't be defined here
//   };
  
//   console.log(bob);