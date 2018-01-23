// Problem 36

// The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)

{
	let sum = 0;

	function palindromic(num) {
		let reversed;

		if(typeof num === 'number') {	
			reversed = parseInt(num.toString().split('').reverse().join(''));
		} else if (typeof num === 'string') {
			reversed = num.split('').reverse().join('');
		}

		if(num === reversed) {
			return true;
		}
		return false;

	}

	let ConvertBase = function (num) {
		return {
			from : function (baseFrom) {
				return {
					to : function (baseTo) {
						return parseInt(num, baseFrom).toString(baseTo);
					}
				};
			}
		};
	};

    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
	};
	
	for(let i = 1; i < 1000000; i++) {
		if( (palindromic(i) === true) && (palindromic(ConvertBase.dec2bin(i)) === true) ) {
			sum += i;
		}
	}

	console.log('Problem 36: ' + sum);
}