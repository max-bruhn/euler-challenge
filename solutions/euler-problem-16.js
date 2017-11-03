/* ----------- Problem 16 ----------- */

/*

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

*/

{
    
    let getDigits = function(power) {
        let digits = [];
        digits[0] = 1;
        while (power > 0) {
            for (let i = digits.length-1; i >= 0; i--) {
                digits[i] *= 2;
                if (digits[i] > 9) {
                    digits[i] -= 10;
                    digits[i+1] = digits[i+1] || 0;
                    digits[i+1] += 1;
                }
            }
            power--;
        }

        return digits;
        
    };
    
    let getSum = function(power){
        let digits = getDigits(power);
        let sum = 0;
        for(let i = digits.length - 1; i >= 0; i--){
            sum += digits[i];
        }
        return sum;
    };
    
    console.log('Problem 16: ' + getSum(1000));

}
    