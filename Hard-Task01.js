'use strict';
console.log('Сложное задание 1:');

const allCashbox3 = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
];

const getAveragePriceGoods = ([...arr]) => {
    let sumTotal = 0;

    for (let i = 0; i < arr.length; i++) {

        const [a, b] = arr[i];
        sumTotal += b / a;

    }

    return sumTotal / arr.length;

};

const result1 = getAveragePriceGoods(allCashbox3);
console.log("-> result", result1);
