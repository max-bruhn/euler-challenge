/* ----------- Problem 1 ----------- */

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

This is the solution I came up this. i am well aware that it is not ideal and requires more lines of code. 
It took me quite a while because my first version had double entries for values that could be multiplied with 3 and 5, because it was not stated in the problem, that the soultion should count those only once.
Anyways, this works.

*/

{
    
        const arr = [3, 5];
        const maxValue = 1000;
        let unique = new Set;
    
        arr.forEach( function(cur) {
    
            let multiplication = 0;
            let integer = 0;
            
            while (multiplication < maxValue) {
    
                multiplication = integer * cur;
    
                if (multiplication < maxValue) {
    
                    unique.add(multiplication);
    
                    integer++;
                }
    
            } 
    
        });
    
        function calcResult() {
            let sum = 0;
            
            for (x of unique) {
                sum = sum + x;
            }
    
            return sum;
    
        }
    
        let result = calcResult();
    
        console.log(`Problem 1: ${result}`);
    
    }