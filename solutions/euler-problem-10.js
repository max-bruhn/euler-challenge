/* ----------- Problem 10 ----------- */
    
/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

Here we can make reuse of the sieveFunction from problem 7.
*/

{
    let range = 0;
    let sieve =[];
    let primeArray = [2];
    let sum = 0;
    
    // get array with primes
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
    
    while(primeArray[primeArray.length - 1] < 2000000) {
        range += 5000000;
    
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

    // add elements of array
    primeArray.forEach(function(el) {
        if (el < 2000000) {
            sum += el;
        }
    });
    
    console.log(`Problem 10: ${sum}`);
}