'use strict';

function calcTip(billValue) {

    const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

    return tip;
}

console.log(calcTip(100)); //check function work properly

const billsArray = [125, 555, 44];

const tipsArray = [];
tipsArray.push(calcTip(billsArray[0]), calcTip(billsArray[1]), calcTip(billsArray[2]));
console.log(tipsArray);


const totalArray = [tipsArray[0] + billsArray[0], tipsArray[1] + billsArray[1], tipsArray[2] + billsArray[2]];
console.log(`total value ${totalArray}`);
