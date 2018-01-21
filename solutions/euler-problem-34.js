// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

{
	let limitFactor = 1;
	let upperLimit;
	let curiousNumbers = 0;

	function sFact(num) {
		let rval = 1;

		for (let i = 2; i <= num; i++) {
			rval = rval * i;
		}

		return rval;
	}

	function digits(num) {
		return num.toString().length;
	}

	while(limitFactor <= (digits(sFact(9) * limitFactor))) {
		upperLimit = sFact(9) * limitFactor;
		limitFactor++;	
	}

	for(let i = 3; i <= upperLimit; i++) {
		let factorialsArray = [];
		let digitsArray = [];
		let num = i;
		let sum;

		digitsArray = num.toString().split('').map(Number);
		digitsArray.forEach((el) => {
			factorialsArray.push(sFact(el));
		});

		sum = factorialsArray.reduce((a, b) => a + b, 0);
		
		if(sum === i) {
			curiousNumbers += i;
		}

	}

	console.log('Problem 34: ' + curiousNumbers);
	
}