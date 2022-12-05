'use strict';

// function logger() {
//     console.log('My name is Jonas');
// }

// logger(); //calling the function
// logger();
// logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 5);
console.log(appleOrangeJuice);


