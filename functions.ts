

//basic functions
let great = ()=>{

}

let hello:Function;
hello = (names:string):any=>{
    console.log(names);
}

hello('aslam',15)



const add =(a:number,b:number,c?:string|number)=>{ //c? is optional
   console.log( a+b)
    console.log(c);
}

add(52,3,'hello')




let hi = (a:number,b:number):number =>{  //return type
    return a+b
}

console.log(hi(10,5));
