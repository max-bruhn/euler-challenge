/* ----------- Problem 20 ----------- */

/*

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

I had to use the big-integer library with node to solve this. 
https://www.npmjs.com/package/big-integer

It is possible though without it, as seen here:
https://jsfiddle.net/briguy37/C73mz/

*/

{
	
	let bigInt = require('big-integer');

	function calc(range) {
		let number = new bigInt( '2' ),i;

		for( i=3; i<=range; i++ ){

			number = number.multiply( i );
			
		}
		
		console.log('Problem 20: ' + eval(number.toString().split( '' ).join( '+' )));
	};

	calc(100);
}
	
		
