/* ----------- Problem 3 ----------- */
    
/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

This is my solution. Haven't done any maths like that since I left high school,
so had to catch up on some reading about prime numbers and factors.
The solution doesn't look very elegant and you quickly run into this error: 
"Uncaught RangeError: Maximum call stack size exceeded" when trying multiple large numbers (reopen window)"

*/

{

    let checkIfPrime = [];
    let primeNumbers = [];
    let target = 600851475143;
    let divident = target;
    let factors = [];
    let i = 0;

    // add possible relevant prime numbers to array
    for (let i=2; i < Math.sqrt(target); i++) {
        checkIfPrime.push(i);
    }

    // check if they are prime numbers and push to array
    checkIfPrime.forEach( function(cur) {
        let q = Math.floor(Math.sqrt(cur));

        for (let i = 2; i <= q; i++)
        {
            if (cur % i == 0)
            {
                return false;
            }
        }

        primeNumbers.push(cur);

    });

    // calculate the prime factors
    function calcFactors() {
        if (divident%primeNumbers[i] == 0) {
            factors.push(primeNumbers[i]);
                divident = divident / primeNumbers[i];
                calcFactors();
        } else if (primeNumbers.includes(divident) === true || divident === 1) {
            if (divident > 1) {
                factors.push(divident);
            }
            console.log(`Problem 3: ${factors[factors.length - 1]}`);
        } else {
            i++;
            calcFactors();
        }
    }

    calcFactors();

}