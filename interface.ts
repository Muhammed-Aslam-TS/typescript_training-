
interface IsPerson{
    name: string,
    age:string,
    amount : number,
    speak (a:string):void;
    spend(a:number):number;
}

const me:IsPerson ={
    name:'aslam',
    age:'25',
    amount:25000,
    speak(text:string):void{
        console.log(text);
    },
    spend(amount:number):number{
        console.log('I spend ',amount);
        return amount
    },
}


const greetPerson = (person:IsPerson)=>{
    console.log('good person is ',person.name, 'age is ',person.age);
    
}

greetPerson(me)