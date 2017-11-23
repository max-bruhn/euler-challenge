/* ----------- Problem 25 ----------- */

/*

The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

*/

{
	
	const fib = ['1', '1'];
	let currentFib = '1';
	let index = 2;
	const digits = 1000;

	// the numbers we are processing are too big for js to handle as integers
	// thats why we use this approach, to add strings, digit by digit, with carry overs
	// you'll remember this from school
	function addStrings(a, b) {
		let arrayA, arrayB, arrayC, carryOver;

		carryOver = 0;
		arrayA = a.split('').map(Number);
		arrayB = b.split('').map(Number);
		arrayC = [];

		while(arrayB.length > arrayA.length) {
			arrayA.unshift(0);
		}

		for(let i = arrayA.length - 1; i >= 0; i--) {
			let newInteger, tempInteger;

			tempInteger = arrayA[i] + arrayB[i] + carryOver;

			if(tempInteger > 9) {
				carryOver = 1;
				newInteger = tempInteger - 10;
		
			} else {
				carryOver = 0;
				newInteger = tempInteger;
				
			}
			
			arrayC.unshift(newInteger);

		}

		if(carryOver === 1) {

			arrayC.unshift(carryOver);
		}
		
		return arrayC.join('');

	}

	while(currentFib.length <= digits) {
		index++;		
		currentFib = addStrings(fib[0], fib[1]);	
		fib[0] = fib[1];
		fib[1] = currentFib;

		if(currentFib.length === digits) {

			console.log('Problem 25: ' + index);
            return index;
            
		} 

	}
	
}
	
	
	