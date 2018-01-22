// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

{
	let counter = 0;
    let range = 0;
    let sieve =[];
	let primeArray = [2];
	let indexOfMaxPrime;

    function sieveOfEratosthenes(n) {
    
		let sqrtn = Math.sqrt(n);
		let previousPrime;
        for(let i = 3; i <= sqrtn; i += 2) {
            if(sieve[i]) {
                for(j = i*i; j < n; j += i*2) {
                    sieve[j] = 0;
                }
            }
        }
    
        for(let i = 3; i < n; i += 2) {

            if(sieve[i]) {

				if(previousPrime < 1000000 && i > 1000000) {
					indexOfMaxPrime = primeArray.indexOf(previousPrime);
				}

				let num = i;
				let valid = true;
				let invalidNumbers = [0, 2, 4, 5, 6, 8];				
				let array = num.toString().split('').map(Number);
				
				array.forEach((el) => {
					if(invalidNumbers.indexOf(el) !== -1 && array.length > 1) {
						valid = false;
					}
				});

				if(valid === true) {
					primeArray.push(i);
					previousPrime = i;
				}
            }
        }     
	}	
	
	while(primeArray[primeArray.length - 1] <= 9999999) {
		primeArray = [2];
		sieve = [];
		range += 5000000;
		
		for (let i = 2; sieve.length <= range - 1;i++) {
			sieve.push(1);
		}
	
		sieveOfEratosthenes(range);

	}

	function leftRotation(n) {
		let array = [];
		let first;

		array = n.toString().split('');
		first = array.shift();
		array.push(first);
		return parseInt(array.join(''));
	}

	for(let i = 0; i <= indexOfMaxPrime; i++) {		
		let num = primeArray[i];
		let isPrime = true;
		let digits = num.toString().length;
		let circles = [];
		let primeCount = 0;

		circles.push(num);

		for(let j = 0; j < digits; j++) {
			let circle;

			circle = leftRotation(circles[j]);
			circles.push(circle);
		}

		circles.forEach((el) => {
			
			if(primeArray.indexOf(el) !== -1) {
				primeCount++;
			} 
		});

		if(primeCount === digits + 1) {
			counter++;
		}

	}

	console.log('Problem 35: ' + counter);

}