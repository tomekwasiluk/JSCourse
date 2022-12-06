'use strict';


function average(firstScore, secondScore, thirdScore) {
    const averageScore = (firstScore + secondScore + thirdScore) / 3;
    return averageScore;
}

const avgDolphings = average(85, 54, 41);
const avgCoalas = average(23, 34, 27);

function checkWinner(avgCoalas, avgDolphings) {
    if (avgCoalas >= (avgDolphings * 2)) {
        console.log(`Coalas wins ${avgCoalas} to ${avgDolphings}`);
    }
    else if (avgDolphings >= (avgCoalas * 2)) {
        console.log(`Dolphins win ${avgDolphings} to ${avgCoalas}`)
    }
    else {
        console.log(`no one is winning`)
    }
}

checkWinner(avgCoalas, avgDolphings);
