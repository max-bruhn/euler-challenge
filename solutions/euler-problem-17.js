/* ----------- Problem 17 ----------- */

/*

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

*/

{
	// manually create numbers 1 - 19
	let oneToNineteen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	// setup array to create the rest of the numbers
	let twenty = ['twenty'];
	let thirty = ['thirty'];
	let forty = ['forty'];
	let fifty = ['fifty'];
	let sixty = ['sixty'];
	let seventy = ['seventy'];
	let eighty = ['eighty'];
	let ninety = ['ninety'];
	let hundred = ['hundred'];
	let thousand = 'onethousand';
	const and = 'and';

	let twentyToNinetynine = [twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety];

	let allNumbers = [];

	oneToNineteen.forEach((el) => {
		allNumbers.push(el);
	})

	let hundreds = [['one hundred']];

	// create numbers 20-99
	for ( let i = 0; i < 9; i++) {

		twentyToNinetynine.forEach((el) => {
			el.push(el[0] + oneToNineteen[i]);
		})

	}

	twentyToNinetynine.forEach((el) => {
		allNumbers.push(el);
	})

	allNumbers = flatten(allNumbers);

	// create numbers 100-999
	for ( let i = 0; i < 9; i++) {
	let number;

		number = allNumbers[i] + hundred;
		allNumbers.push(number);

		for (let j = 0; j < 99; j++) {

				allNumbers.push(number + and + allNumbers[j]);

		}
	}

	allNumbers.push(thousand);

	// flatten nested array
	function flatten(arr) {
		return arr.reduce(function (flat, toFlatten) {
		  return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
		}, []);
	  }

	// add everything as a string an print the length
	let string = '';
	allNumbers.forEach((el) => {

		string = string + el;
	})

	console.log('Problem 17: ' + string.length);
}
