'use strict';
console.log('Задание 2:');

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = ([...arr]) => {

    let n = 0;
    let abc = 0;

    for (const i in arr) {
        abc = Math.floor((n += arr[i]) / arr.length);
    }

return abc;

};

const result = getAverageValue(allCashbox);
console.log('result', result);
console.log("-> allCashbox check: value after function not changed", allCashbox);

