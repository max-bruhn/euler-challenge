/* ----------- Problem 5 ----------- */
    
/* 

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

This was my initial solution. It works for 1-10 but 1-20 requests too many calls for javaScript to handle 

let counter, number, current;
counter = 1;
number = 2000;
current = 3;

function count() {

if(current <= 10) {
    if(number%current !== 0) {
        number += 10;
        counter = 1;
        current = 3;
        count();
    } else {
        current++;
        counter++;
        count();
    }
} else  {
    console.log('result: ' + number);
}

}

count();

*/

/* After digging further into the problem I've discovered the euclidean algorithm, 
which can be used to calculate the greatest common divisor, from which we can get the result. */

{

    // first we create an array with the relevant range

    let range = [];

    for (let i=1;i<=20;i++) {

        range.push(i);
        
    }

    // then we calculate the greatest common divisor

    function calcGCD(a,b) { 

            if (b == 0) {
                return a;
            }
            else {
                return calcGCD(b, a % b);
            }

        }

        // from the greatest common divisor we can calculate the largest common multiplier

    function calcLCM(a, b) {

        return (a*b)/calcGCD(a,b);

    }

    // the reduce method comes in handy here

    console.log('Problem 5: ' + range.reduce(calcLCM));
    
}