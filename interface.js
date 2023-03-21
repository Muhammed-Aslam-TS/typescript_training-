"use strict";
const me = {
    name: 'aslam',
    age: '25',
    amount: 25000,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spend ', amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('good person is ', person.name, 'age is ', person.age);
};
greetPerson(me);
