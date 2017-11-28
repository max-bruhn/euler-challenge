/* ----------- Problem 27 ----------- */

/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

{
    
    const size = 1001;
    let diagonals = [1, 3, 5, 7, 9];

    function addDiagonals() {
        let lastTopRight, sideLength;

        sideLength = 3;
        lastTopRight = 9;

        for(let i = 2; sideLength < size ; i++) {
            let outerCount, newTopLeft, newBottomLeft, newBottomRight;

            sideLength += 2;
            outerCount = sideLength * 4 - 4;

            // topRight
            newTopRight = lastTopRight + outerCount;
            diagonals.push(newTopRight);
            lastTopRight = newTopRight;

            // topLeft
            newTopLeft = newTopRight - sideLength + 1;
            diagonals.push(newTopLeft);

            // bottomLeft
            newBottomLeft = newTopLeft - sideLength + 1;
            diagonals.push(newBottomLeft);

            // bottomRight
            newBottomRight = newBottomLeft - sideLength + 1;
            diagonals.push(newBottomRight);

        }

    }

    function sumOfDiagonals() {
        let sum;

        sum = 0;

        diagonals.forEach((el) => {
            sum += el;
        });

        return sum;

    }

    addDiagonals();

    console.log('Problem 28: ' + sumOfDiagonals());

}
        
        
        