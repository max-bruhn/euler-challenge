// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

{

	let nominatorProduct = 1;
	let denominatorProduct = 1;
	let result;

	for(let i = 10; i <= 98; i++) {

		for(let j = 11; j <= 99; j++) {

			let nominator = i;
			let denominator = j;
			let nominatorDigits = nominator.toString().split('').map(Number);
			let denominatorDigits = denominator.toString().split('').map(Number);
			let hasSameDigit = false;
			let sameDigit;
			let indexOfSameDigit;
			let fraction;
			let indexOfSameDigitNominator;
			let indexOfSameDigitDenominator;
			
			nominatorDigits.forEach((el, index) => {
				if(el !== 0 && denominatorDigits.indexOf(el) !== -1) {
					hasSameDigit = true;
					sameDigit = el;
					indexOfSameDigitNominator = index;
					indexOfSameDigitDenominator = denominatorDigits.indexOf(el);
				}	
			});

			if(hasSameDigit === true) {
				fraction = nominator / denominator;
				nominatorDigits.splice(indexOfSameDigitNominator, 1);
				denominatorDigits.splice(indexOfSameDigitDenominator, 1);

				if(fraction === (nominatorDigits[0] / denominatorDigits[0]) && fraction < 1) {

					nominatorProduct *= nominator;
					denominatorProduct *= denominator;
				}

			}

		}

	}

	function gcd_two_numbers(x, y) {

		if ((typeof x !== 'number') || (typeof y !== 'number')) 
		  return false;
		x = Math.abs(x);
		y = Math.abs(y);
		
		while(y) {
		  let t = y;
		  y = x % y;
		  x = t;
		}

		return x;
	}

	result = denominatorProduct / (gcd_two_numbers(nominatorProduct, denominatorProduct));

	console.log(result);

}
