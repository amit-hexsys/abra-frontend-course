// 1 - convert all numbers to positve nubmers 


let arr = [1, 2, 2, 3, -4, 5, 6.6, 20, 12, -5, 10, 0];

for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.abs(arr[i]);
}

console.log(arr);

// 2 - Write a function that given an array will return an array with two items, min-value, max-value

const minMax = (arr) => {
    let minNum = arr[0];
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return [minNum, maxNum];
}
console.log(minMax(arr));

// 3.- Given an array, convert it to a decimal numbers only.

const convetToDecimalNum = (arr) => arr.map(item => Math.round(item));

console.log(convetToDecimalNum(arr));


// - Write a javacript function to get current date

const currentDate = () => {
    return new Date();
}
console.log(currentDate());

// - Write a javascript function to compare dates 

const compareFunction = (date1, date2) => {
    if (date1.getTime() === date2.getTime()) {
        return `Dates are the same`;
    }
    if (date1.getTime() > date2.getTime()) {
        return `${date1} 1 is the biggest`;
    } else return `${date2} 2 is the biggest`;
}

console.log(compareFunction(new Date(), new Date(80))); 

// - Write a javascript function to test whether a date is a weekend (IsIsraeliWeekend)

const isWeekend = (date) => {
    if(date.getDay() === 5 || date.getDay() === 6) {
        return `Is weekend`
    } else return `Is not a weekend`
}

console.log(new Date(5000000000).getDay());
console.log(isWeekend(new Date(5000000000)));

// - Write a function which returns the nubmer of days between two dates.

const daysBetween = (date4, date5) => {
    let minDate = Math.min(date4.getTime(), date5.getTime());
    let maxDate = Math.max(date4.getTime(), date5.getTime());
    let gap = maxDate-minDate;
    return Math.round((gap/1000/60/60/24));

}
console.log(daysBetween(new Date("23 May 2020"),new Date("23 March 2020")));


let d1 = new Date("23 March 2020");
let d2 = new Date("24 March 2020");

console.log(d2 - d1)

