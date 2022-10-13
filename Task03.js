'use strict';
console.log('Задание 3:');


const names= ['Noah', 'Liam', 'Mason', 'Jacob',
    'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
console.log("-> names", names);

const addPrefix = ([...arr], prefix) => {

    for (const i in arr) {
        // Все варианты работают

        // arr[i] = arr[i].replace(arr[i], prefix.concat(' ', arr[i]));
        // arr[i] = arr[i].slice(i, 0).concat(prefix, ' ', arr[i]);
        arr[i] = `${prefix} ${arr[i]}`;

    }
    return arr;
};


const result3 = addPrefix(names, 'Mr');
console.log("-> result", result3);
