{
    function mult(strNum1,strNum2){
 
        var a1 = strNum1.split("").reverse();
        var a2 = strNum2.toString().split("").reverse();
        var aResult = new Array;
     
        for ( var iterNum1 = 0; iterNum1 < a1.length; iterNum1++ ) {
            for ( var iterNum2 = 0; iterNum2 < a2.length; iterNum2++ ) {
                var idxIter = iterNum1 + iterNum2;    // Get the current array position.
                aResult[idxIter] = a1[iterNum1] * a2[iterNum2] + ( idxIter >= aResult.length ? 0 : aResult[idxIter] );
     
                if ( aResult[idxIter] > 9 ) {    // Carrying
                    aResult[idxIter + 1] = Math.floor( aResult[idxIter] / 10 ) + ( idxIter + 1 >= aResult.length ? 0 : aResult[idxIter + 1] );
                    aResult[idxIter] -= Math.floor( aResult[idxIter] / 10 ) * 10;
                }
            }
        }
        return aResult.reverse().join("");
    }
    
    let sequence = new Set();
    
        for (let x = 2; x <= 100; x++) {
    
            for (let y = 2; y <= 100; y++) {
                let xString = x.toString();
                let c = 1;
                let d = x.toString();
    
                while(c < y) {
                    d = mult(d, xString)
                    sequence.add(parseInt(d));
                    c++;
                }
    
            }
    
        }
    
    console.log('Problem 29: ' + sequence.size);
}