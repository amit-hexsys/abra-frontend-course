

const arr = [1,2,3,4,5];

const [a,b,...others] = arr;

console.log(a,b,others);

const testFunction = (...params) => {
    for (let parameter of params) {
        console.log(parameter)
    }
    
    for (let i=0;i<params.length;i++) {
       console.log(params[i]);
    }
}

testFunction(1,2,"test", 3.3, 1)






let sum = (num1, num2) => {
    return num1 + num2;
}

let sum2 = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

let sumAll = (arr) => {
    let sum = 0;
    for(let i = 0; i< arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

let sumNew = (moshiko, num2, ...amit) => {
    console.log({amit, moshiko, num2});
    let sum = num1 + num2;
    for(let i = 0; i< arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumNew(1,2,3,"shalom",5,6,7));

