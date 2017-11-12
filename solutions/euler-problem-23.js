/* ----------- Problem 23 ----------- */

/*

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

*/

{
	let abundantNumbers = [];
	let numbers = [];
	let sumOfAbundantNumbers;
	let result;

	// 1. save all relevant abundant numbers in array
	let findAbundantNumbers = () => {

		for(let i = 12; i <= 28123; i++) {
			let divisors = [];
			let sum;

			// find divisors
			for(let j = 1; j <= Math.floor(i/2); j++) {

				if(i%j === 0) {

					divisors.push(j);

				};

			};

			sum = divisors.reduce((prev, curr) => prev + curr);

			// push to array if sum is bigger then n
			if(sum > i) {

				abundantNumbers.push(i);

			}

		}
		
	}

	// 2. create array with relevant number range
	function range() {

		for(let i = 1; i < 28123; i++) {

			numbers.push(i);
		};

	}


	// 3. make an array with all the sums of abundant numbers
	let addAbundantNumbers = () => {

		sumOfAbundantNumbers = new Set();

		abundantNumbers.forEach((el, id, array) => { 

			for(let j = el; j < 28123; j = array[id++]) {

					let sum = el + j;

					if(sum < 28123) {

						sumOfAbundantNumbers.add(sum);

					}
					
			}

		});

	}

	// 4. delete abundant numbers from numbers range
	let cleanNumbersArray = () => {

		sumOfAbundantNumbers.forEach((el) => {
			let index;

			index = numbers.indexOf(el);

			numbers.splice(index, 1);

		});

	};

	// 5. execute the steps
	findAbundantNumbers();
	range();
	addAbundantNumbers();
	cleanNumbersArray();

	// 6. add all remaining numbers in the array
	result = numbers.reduce((prev, curr) => prev + curr);

	// 7. print result
	console.log('Problem 23: ' + result);

}

	
