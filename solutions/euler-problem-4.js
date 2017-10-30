/* ----------- Problem 4 ----------- */
    
/*

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

I built it so that the number of digits can easily be modified. 

*/

{

    let num, reversed, max, min, palindrome, highest;
    highest = 0;
    let digits = 3;

    // this is an extra step I built in to make it easiert to try with different amounts of digits
    function createMax(digits) {
        let string, nine;

        if (digits > 1) {
            min = 10^digits;
            nine = 9;

            string = nine.toString();

            do {
                string = string + nine.toString();
                digits--;
                
            } while (digits > 1);
            
            num = parseInt(string);
        } else {
            num = 9;
        }

        max = num;


    }


    // the sequence is brute forcing all combinations, checks if they are palindrome numbers and then stores the highest ones and console logs when finished
    function multiply() {

        for (let i = max; i >= min; i--) {

            for (let j = max; j >= min; j--) {

                let product = i * j;

                createReverse(product);
            }
        }

        console.log('Problem 4: ' + highest);
    }

    function createReverse(product) {

        product = product.toString();

        function reverse(product) {
            return product.split('').reverse().join('');
        }

        reversed = reverse(product);

        checkIfPalindrome(product, reversed);

    }

    function checkIfPalindrome(pal, rev) {

        pal = parseInt(pal);
        rev = parseInt(rev);

        if (pal == rev) {
            if (pal > highest) {
                highest = pal;
                
            }

        } else {
            num--;
        }
    }


    createMax(digits);
    multiply();

}