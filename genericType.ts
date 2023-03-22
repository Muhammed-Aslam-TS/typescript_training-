


//generics function

function createPayer <T,S> (A:T,B:S):[T,S]{
    return [A,B]
}

console.log(createPayer(50,'hello'));


// generic classes