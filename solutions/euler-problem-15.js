/* ----------- Problem 15 ----------- */

/*

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

img: https://projecteuler.net/project/images/p015.gif

How many such routes are there through a 20×20 grid?

I couldn't thing of a reasonable way to brute force it, but found out,
that Pascal's Triangle can be used to calculate this fairly easy.

Resources to understand Pascal's Triangle:
http://blog.functionalfun.net/2008/07/project-euler-problem-15-city-grids-and.html
https://youtu.be/OMr9ZF1jgNc

*/

{
    
        // create pascals triangle
        function pascalsTriangle(n) {
            let arr = {};
            for(let row = 0; row < n; row++) {
                arr[row] = [];
                for(let col = 0; col < row + 1; col++) {
                    if(col === 0 || col === row) {
                        arr[row][col] = 1;
                    } else {
                        arr[row][col] = arr[row-1][col-1] + arr[row-1][col];
                    }         
                }       
            }   
            return arr;
        }
        // aray with triangle for 20x20 grid
        let array = pascalsTriangle(41);
    
        console.log('Problem 15: ' + array[40][20]);
    
    }
    