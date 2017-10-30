/* ----------- Problem 6 ----------- */
    
/* 
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

This one was rather easy. Brute forcing has no speed issues, even if we input very large numbers as maxRange */

{
    
        let maxRange = 100;
    
        function sumSq(range) {
            let counter = 1;
            let sum = 0;
    
            while (counter <= range) {
                let sqr = Math.pow(counter, 2);
                counter ++;
                sum += sqr;
            }
    
            return sum;
        }
    
        function sqSum(range) {
            let counter = 1;
            let sum = 0;
    
            while (counter <= range) {
                sum = sum + counter;
                counter++;
            }
    
            return Math.pow(sum, 2);
        }
    
        console.log(`Problem 6: ${sqSum(maxRange) - sumSq(maxRange)}`);
    
    }