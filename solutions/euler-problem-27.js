/* ----------- Problem 27 ----------- */

/*

Euler discovered the remarkable quadratic formula:

n2+n+41n2+n+41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤390≤n≤39. However, when n=40,402+40+41=40(40+1)+41n=40,402+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41n=41,412+41+41 is clearly divisible by 41.

The incredible formula n2−79n+1601n2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤790≤n≤79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n2+an+bn2+an+b, where |a|<1000|a|<1000 and |b|≤1000|b|≤1000

where |n||n| is the modulus/absolute value of nn
e.g. |11|=11|11|=11 and |−4|=4|−4|=4
Find the product of the coefficients, aa and bb, for the quadratic expression that produces the maximum number of primes for consecutive values of nn, starting with n=0n=0. */

{
    
    let globalCounter, coefficient;

    globalCounter = 0;
    coefficient = 0;

    function test_prime(c) {
    
        if (c===1) {

        return false;
        
        }

        else if(c === 2) {

        return true;

        } else if(c < 0) {

            return false;

        } else {

        for(var x = 2; x < c; x++) {

            if(c % x === 0) {

            return false;

            }

        }

        return true;  

        }

    }

    for(let a = -999; a < 1000; a++) {

        for(let b = -1000; b <= 1000; b++) {
            let temp, n, consecutivePrimes;

            n = 0;
            temp = b;

            if(test_prime(temp) && temp >= 1) {
                consecutivePrimes = true;
            } else {
                consecutivePrimes = false;
            }

            while(consecutivePrimes) {
                n++;
                temp = n * n + (a * n) + b;

                if(test_prime(temp) && temp >= 1) {
                    consecutivePrimes = true;
                } else {
                    consecutivePrimes = false;
                }

            }

            if(n > globalCounter) {

                globalCounter = n;
                coefficient = a * b;
    
            }

        }

    }

    console.log('Problem 27: ' + coefficient);

}
        
        
        