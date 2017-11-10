/* ----------- Problem 21 ----------- */

/*

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

*/

{
    
    let amicables =[];
    
    function findEvenDivisors(n) {
        let evenDivisors = [];

        for(let j = 1; j < n; j++) {

            if(n%j === 0) {

                evenDivisors.push(j);
            }
        }

        return evenDivisors;

    };

    function calcSum(array) {
        let sumOfArray = 0;

        array.forEach((el) => {
            sumOfArray += el;
        });

        return sumOfArray;

    }

    for(let i = 1; i < 10000; i++) {
        let divisors = [];
        let newDivisors = [];
        let sum;
        let newSum;

        divisors = findEvenDivisors(i);
        sum = calcSum(divisors);

        newDivisors = findEvenDivisors(sum);
        newSum = calcSum(newDivisors);

        if(newSum === i && sum !== i) {

            if(amicables.indexOf(sum) === -1) {

                amicables.push(sum);

            }

            if(amicables.indexOf(newSum) === -1) {

                amicables.push(newSum);

            }

        }

    }

    console.log('Problem 21: ' + calcSum(amicables));
    
}
        
            
    