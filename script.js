'use strict';

function calcAge1(birthYear) {
    const age = 2022 - birthYear;
    return (age);
}

const age1 = calcAge1(1990);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1990);

console.log(age1, age2);