const ismayil = {
    name : "ismayil",
    surname : "zeynalov",
    salary : 5000
}

const namiq = {
    name : "namiq",
    surname : "kerimov",
    salary : 2156
}

const rahim = {
    name : "rahim",
    surname : "sterling",
    salary : 9456
}

const zamin = {
    name : "zamin",
    surname : "rustemli",
    salary : 1534
}

const elnur = {
    name : "elnur",
    surname : "seferov",
    salary : 99
}

const neriman = {
    name : "neriman",
    surname : "memmedli",
    salary : 100
}

const employees = [ismayil, namiq, elnur, zamin, neriman, rahim];


function findAverage(arr)
{   
    let sum = foreachFun(arr, callback);
    return sum/arr.length;
}

function foreachFun(arr, callback){
    sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
       sum += callback(arr[i], i, arr);
    }
    return sum;
}

function callback(value, i, arr){
    return value.salary;
}

console.log(findAverage(employees));




// average = (average * (i) + value) / (i+1);