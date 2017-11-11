/* ----------- Problem 22 ----------- */

/*

Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

txt file: https://projecteuler.net/project/resources/p022_names.txt

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?

*/

// i chose to use node to load the file. alternatively you could just copy&paste the file, but this is a good excercise for async coding with node



{
    
    const fs = require('fs');
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    // get data from file
    let getData = new Promise(function(resolve, reject) {

        // in this case the file is in the root folder
        fs.readFile('./p022_names.txt', (err, data) => {

            resolve(data.toString().split(','));	
            
        });

    });
    
    // to solve this we need to use asynchronos features because we have to read a file.
    // in this case I use promises

    getData.then(function(data) {
    // get rid of the " "
        let cleanArray = [];

        data.forEach((el) => {
            
            let cleanEl = el.replace(/[^0-9a-zA-Z]/g, '');
            cleanArray.push(cleanEl);

        });

        return cleanArray;
    // sort alphabetical
    }).then(function(arrayOfNames) {

        return arrayOfNames.sort();
    // splice the names into arrays of letters
    }).then(function(sortedArray) {
        
        sortedArray.forEach((el, id) => {
            let array = [];

            array = el.split('');
            sortedArray.splice(id, 1, array);
        });

        return sortedArray;
    // calculate the values and add them all up
    }).then(function(splicedArray) {
        let result = 0;

        splicedArray.forEach((el, id) => {
            let num = id + 1;
            let letterValues = 0;

            el.forEach((cur) => {

                letterValues += alphabet.indexOf(cur) + 1;;

            });

            result += num * letterValues;

        });

        console.log('Problem 22: ' + result);
        
    });

}
    
        
    