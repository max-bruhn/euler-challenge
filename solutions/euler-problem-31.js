// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

// How many different ways can £2 be made using any number of coins?

{	
	
	let counter = 0;

	for(let a = 0; a <= 200; a++) {
		for(let b = 0; b <= 100; b++) {
			for(let c = 0; c <= 40; c++) {
				for(let d = 0; d <= 20; d++) {
					for(let e = 0; e <= 10; e++) {
						for(let f = 0; f <= 4; f++) {
							for(let g = 0; g <= 2; g++) {
								for(let h = 0; h <= 1; h++) {

									let value = a*1 + b*2 + c*5 + d*10 + e*20 + f*50 + g*100 + h*200;
									
									if (value === 200) {
										counter++;
									}

								}								
							}
						}
					}
				}
			}
		}
	}

	console.log('Problem 31: ' + counter);

}