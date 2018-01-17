// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 14 + 64 + 34 + 44
// 8208 = 84 + 24 + 04 + 84
// 9474 = 94 + 44 + 74 + 44
// As 1 = 14 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

{

	let goodSums = [];

    for(let i = 10; i < 354294; i++) {
		let sum = 0;
		let number = i;


		let arrayOfDigits = number.toString(10).replace(/\D/g, '0').split('').map(Number);
		let arrayOfPowers = [];

		arrayOfDigits.forEach((el) => {
			arrayOfPowers.push(Math.pow(el, 5));
		});

		sum = arrayOfPowers.reduce((a, b) => a + b, 0);
		
		if(sum === i) {
			goodSums.push(sum);
		}

	}

	let result = goodSums.reduce((a, b) => a + b, 0);
	console.log('Problem 30: ' + result);

}