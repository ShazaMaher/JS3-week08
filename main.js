let arr = [];
for(let i= 1; i<=1000;i++){
    arr.push(i);
}

console.log(arr);

function divisibleFactory(x){
    return function(y){
        if(y % x === 0){
            return y;
        }
    };
}

let divisibleBy3 = divisibleFactory(3);
let divisibleBy10 = divisibleFactory(10);
let divisibleBy21 = divisibleFactory(21);

const divisibleArrayBy3 = arr.filter(arrItem => divisibleBy3(arrItem));
console.log(divisibleArrayBy3);
const divisibleArrayBy10 = arr.filter(arrItem => divisibleBy10(arrItem));
console.log(divisibleArrayBy10);
const divisibleArrayBy21 = arr.filter(arrItem => divisibleBy21(arrItem));
console.log(divisibleArrayBy21);


