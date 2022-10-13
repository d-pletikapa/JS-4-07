'use strict';
console.log('Тренировка:')

const animals = ['dog', 'cat', 'pig', 'horse'];
// let array = new Array(50);


animals.length = 20;

animals[0]= 'goat';

console.log(animals.length - 1);

animals.push('fish');
console.log('animals', animals);

const one = animals.pop();
console.log("-> one", one);
console.log('animals', animals);

const two = animals.shift();
console.log("-> two", two);
console.log('animals', animals)

delete animals[0];
console.log("-> animals", animals);

const printArr = arr => {
    console.log(`Размер массива ${arr.length}`);

    for (let i = 0 ; i< arr.length; i++) {
        const elem = arr[i];
        console.log(`-> elem Элемент под индексом ${i} - ${elem}`);
    }

    for (const key in arr) {
        console.log(`-> elem Элемент под индексом ${key} - ${arr[key]}`);
    }

    for (const elem of arr) {
        console.log(`-> elem Элемент без индекса ${elem}`);
    }
}

printArr(animals);

console.log("-> typeof animals", typeof animals);
console.log("-> Array.isArray animals", Array.isArray(animals));

const removed = animals.splice(0, 1, 'Добавим что-то');
console.log("-> removed", removed);

const numbers = [1,2,3,4,5,7];

console.log("-> numbers .includes", numbers.includes(1));
console.log("-> numbers .join", numbers.join('разделитель'));


const dNumbers = numbers;

const cNumbers = numbers.slice();
const sNumbers = [...numbers];
const arrayNumbers = [].concat(numbers, /* arr */);


console.log("-> dNumbers", dNumbers);
console.log("-> cNumbers", cNumbers);
console.log("-> sNumbers", sNumbers);
console.log("-> arrayNumbers", arrayNumbers);

const [x, y, ...arr] = sNumbers;
console.log("-> x", x);
console.log("-> y", y);

const sortArray = ([...arr]) => {
    arr.sort((a, b) => b - a);
    return arr;
};


const newArray = sortArray(numbers);
console.log("-> newArray", newArray);
console.log("-> numbers", numbers);


const foo = (arr) => {

    const newArr = [];

    for (let i = 0; i < arr.length; i += 1) {

        if (!(arr[i] % 2)) {
            newArr.push(arr[i]);
        }
        // newArr.push(arr[i] ** 2);
    }

    return newArr;
};


const fooArray = foo(numbers);
console.log("-> fooArray", fooArray);
console.log("-> numbers", numbers);





