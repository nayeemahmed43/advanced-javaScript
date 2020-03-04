let car;

function add(num1,num2){
    console.log(num1+num2);
    return
}

function add(num1,num2=10){
    console.log(num1,num2);
}

const result = add(11);
console.log(result);