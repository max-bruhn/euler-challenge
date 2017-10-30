/* ----------- Problem 7 ----------- */
        
/* 

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

That was a tough one. The idea is to create an array with primes,
until the index of 10000 is defined.
To make such a high prime number generation possible we make use of 
the Sieve of Eratosthenee.

Check https://stackoverflow.com/questions/15471291/sieve-of-eratosthenes-algorithm-in-javascript-running-endless-for-large-number
for more infos */

{
    
    let range = 0;
    let sieve =[];
    let primeArray = [];

    function sieveOfEratosthenes(n) {

        let sqrtn = Math.sqrt(n);
        for(let i = 3; i <= sqrtn; i += 2) {
            if(sieve[i]) {
                for(j = i*i; j < n; j += i*2) {
                    sieve[j] = 0;
                }
            }
        }

        for(let i = 3; i < n; i += 2) {
            if(sieve[i]) {
                primeArray.push(i);
            }
        }
        
    }

    while(primeArray[10000] === undefined) {
        // add 20000 integers as long as 10000th prime is undefined
        range += 20000;

        // reset previous cycle
        primeArray = [2];
        sieve = [];

        // create array	with 1s for range
        for (let i = 2; sieve.length <= range - 1;i++) {
            sieve.push(1);
        }

        // create array with primes for range
        sieveOfEratosthenes(range);
    }

    console.log(`Problem 7: ${primeArray[10000]}`);
}