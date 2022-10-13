'use strict';
console.log('Задание 1:')

const allStudents = ['Иванов','Петров','Сидоров','Кузнецов','Смирнов','Попов','Соколов'];

const failedStudents = ['Сидоров','Смирнов','Попов'];

let passedStudents = allStudents.splice(0);

let filter = (allStudents, failedStudents) => {

    // Вариант подсмотрел и адаптировал
    // passedStudents = passedStudents.filter(item => !failedStudents.includes(item));


    // Вариант сделал сам
    for (const i in passedStudents) {

        if (passedStudents.includes(failedStudents[i])) {

            console.log("-> failedStudents", failedStudents[i]);

            passedStudents.splice(passedStudents.indexOf(failedStudents[i]), 1);

        }

    }

    return passedStudents;
};


filter (allStudents, failedStudents);
console.log("-> passedStudents", passedStudents);

