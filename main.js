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
    foreachFun(arr, callback);
    average = employees[0];
    foreachFun(arr, repair);

    return average;
}

function foreachFun(arr, callback){
    for(let i = 0; i < arr.length; i++)
    {
       callback(arr[i], i, arr);
    }
}


function callback(value, i, arr){
    if(i === 0)
    {
        let temp = value.salary/arr.length;
        employees[0] = 0;
        employees[0] = temp;
    }
    else
    {
        employees[0] += value.salary/arr.length;
    }
}

function repair(value, i, arr)
{
    if(i === 0)
        employees[0] *= arr.length;
    else
    {
        employees[0] -= value.salary;
    }
}



console.log(findAverage(employees));





// average = (average * (i) + value) / (i+1);