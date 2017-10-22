

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



let fibonacci = [1, 2, 3];
let evenSum = 0;


while ( fibonacci[fibonacci.length - 1] <= 4000000 ) {

	fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);

}

for ( let value of fibonacci ) {

	if (value%2 == 0) {
		evenSum = evenSum + value;
	}
}

console.log(evenSum);