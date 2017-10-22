/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

This is the solution I came up this. i am well aware that it is not ideal and requires more lines of code. It took me quite a while because my first version had double entries for values that could be multiplied with 3 and 5, because it was not stated in the problem, that the soultion should not.

Anyways, this should work. Futher down you will find also the most given answer in js.

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

	console.log(result);

}


/*

Usual Solution:

(function euler001() {
  var sum = 0;
  var n = 1000;


  while (n--) {
    if (n % 3 === 0 || n % 5 === 0) {
    	console.log('integer: '+ n );
    	console.log('sum: ' + sum);
      sum += n;
    }
  }

  console.log(sum);
  return sum;
}());

*/