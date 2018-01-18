// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

{

	let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let products = new Set;
	let sum = 0;

	for(let i = 1; i <= 999; i++) {

		for(let j = 1; j <= 9999; j++) {

			let multiplicand = i;
			let multiplier = j;
			let product;
			let string;
			let length;

			product = multiplicand * multiplier;

			string = product.toString() + multiplicand.toString() + multiplier.toString();
			length = string.length;

			if(length === 9) {
				let counter = 0;

				digits.forEach((el) => {

					if(string.includes(el.toString())) {
						counter++;
					}

				});
				
				if(counter === 9) {

					products.add(product);

				}

			}

		}

	}

	products.forEach((el) => {

		sum = sum + el;
		
	});

	console.log('Problem 32: ' + sum);

}