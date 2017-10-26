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

/* ----------- Problem 2 ----------- */

/*

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/

{

	let fibonacci = [1, 2, 3];
	let evenSum = 0;


	while ( fibonacci[fibonacci.length - 1] <= 4e+6 ) {

		fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);

	}

	for ( let value of fibonacci ) {

		if (value%2 === 0) {
			evenSum += value;
		}
	}

	console.log(`Problem 2: ${evenSum}`);

}

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

/* ----------- Problem 4 ----------- */

/*

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

I built it so that the number of digits can easily be modified. 

*/

{

	let num, reversed, max, min, palindrome, highest;
	highest = 0;
	let digits = 3;

	// this is an extra step I built in to make it easiert to try with different amounts of digits
	function createMax(digits) {
		let string, nine;

		if (digits > 1) {
			min = 10^digits;
			nine = 9;

			string = nine.toString();

			do {
				string = string + nine.toString();
				digits--;
				
			} while (digits > 1);
			
			num = parseInt(string);
		} else {
			num = 9;
		}

		max = num;


	}


	// the sequence is brute forcing all combinations, checks if they are palindrome numbers and then stores the highest ones and console logs when finished
	function multiply() {

		for (let i = max; i >= min; i--) {

			for (let j = max; j >= min; j--) {

				let product = i * j;

				createReverse(product);
			}
		}

		console.log('Problem 4: ' + highest);
	}

	function createReverse(product) {

		product = product.toString();

		function reverse(product) {
			return product.split('').reverse().join('');
		}

		reversed = reverse(product);

		checkIfPalindrome(product, reversed);

	}

	function checkIfPalindrome(pal, rev) {

		pal = parseInt(pal);
		rev = parseInt(rev);

		if (pal == rev) {
			if (pal > highest) {
				highest = pal;
				
			}

		} else {
			num--;
		}
	}


	createMax(digits);
	multiply();

}

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

/* ----------- Problem 7 ----------- */
	
/* That was a tough one. The idea is to create an array with primes,
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
		// add 2000 integers as long as 10000 prime is undefined
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



















































