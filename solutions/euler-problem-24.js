/* ----------- Problem 23 ----------- */

/*

A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

I found a neat algorithm, that creates permutations in lexical order. You can find a description here:
http://www.geeksforgeeks.org/lexicographic-permutations-of-string/
With this in place we can go and create the first 1000000 permutations and then print the last one, to get the result.

*/

{
	
	let lastPermutation, firstCharacter, firstCharacterIndex, secondCharacter, secondCharacterIndex;
	
	// this is the third lowest permutation
	lastPermutation = [0, 1, 2, 3, 4, 5, 6, 8, 7, 9];
	
	// Take the previously printed permutation and find the rightmost character in it, 
	// which is smaller than its next character. 
	// Let us call this character as ‘first character’.
	function getFirstCharacter() {
		let foundFirstCharacter = false;
		
		firstCharacter = -1;
		firstCharacterIndex = 9;
	
		while(foundFirstCharacter === false) {
			
			if(lastPermutation[firstCharacterIndex] < lastPermutation[firstCharacterIndex + 1]) {
	
				firstCharacter = lastPermutation[firstCharacterIndex];
				firstCharacterIndex++;
				foundFirstCharacter = true;
	
			}
	
			firstCharacterIndex--;
			
		};
	
	}
	
	// Now find the ceiling of the ‘first character’. 
	// Ceiling is the smallest character on right of ‘first character’, 
	// which is greater than ‘first character’. 
	// Let us call the ceil character as ‘second character’.
	function getSecondCharacter() {
		let possibleSecondCharacters = [];
		
		secondCharacter = -1;
			
		lastPermutation.forEach((el, index) => {
			
			if(index > firstCharacterIndex && el > firstCharacter) {
	
				possibleSecondCharacters.push(el);
	
			} 
	
		});
		
		possibleSecondCharacters.sort();
		secondCharacter = possibleSecondCharacters[0];
		secondCharacterIndex = lastPermutation.indexOf(secondCharacter);
	
	}
	
	// Swap the two characters found in above 2 steps.
	// Sort the substring (in non-decreasing order) after the original index of ‘first character’.
	function swapCharacters() {
		let newPermutation = [];
		let tempPermutation = [];
	
		lastPermutation[firstCharacterIndex] = secondCharacter;
		lastPermutation[secondCharacterIndex] = firstCharacter;
	
		lastPermutation.forEach((el, index) => {
			
			if(index <= firstCharacterIndex) {
	
				newPermutation.push(el);
	
			} else {
	
				tempPermutation.push(el);
			}
	
		});
	
		tempPermutation.sort();
		
		tempPermutation.forEach((el) => {
	
			newPermutation.push(el);
	
		});
	
		lastPermutation = newPermutation;
	
	}
	
	// for this code to work we started with the third lowest permutation
	// so we loop through the functions another 999997 times to get the result
	for(let i = 0; i < 999997; i++) {
	
		getFirstCharacter();
		getSecondCharacter();
		swapCharacters();
	
		if(i === 999996) {
			console.log('Problem 24: ' + lastPermutation.join(''));
		}
	
	}
	
}
	
	
	