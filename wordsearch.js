const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))

    if ( letters.length === 0){ // no input return false
        return false;
    }

    for (l of horizontalJoin) {
        if (l.includes(word)) return true // loop horizontal and return true if word
    }

    for (l of transpose(horizontalJoin)){
        if (l.join('').includes(word)){ // transpose horzontal to get vertical and loop it

                return true

        }

    }
    
    return false;


} // end of function 


// MATRIX CODE <-- from last programming, maybe to loop vertical


const transpose = function(matrix) {
    // Put your solution here
  
    let transpoedArray=[]; // array after being transposed  
  
    for ( let i = 0; i< matrix[0].length; i++){
      transpoedArray.push([]);
    }
  
    
    for (let row = 0; row < matrix.length; row++){ // loop through the whole array 
      for (let col =0; col < matrix[row].length; col++){ // loop through every array of array
        transpoedArray[col][row] = matrix[row][col] /* exchange the row and col of the matrix to become the col and 
        row of the new transpoedArray Object */
  
      }
  
    }
    
   return transpoedArray 
  };


module.exports = wordSearch


/* 

Check to find the word horizontally and vertically √

Return true if the word is found, and return false if the word is not found √

You'll find that one of the tests doesn't pass yet, so you'll want to start 
by editing the code in wordsearch.js to allow the tests to pass. √np



When the present tests are successful, ask yourself, "Do the current tests cover all the possible cases?" What if the word is written vertically, not horizontally? What about the case where the word matrix is an empty array? You'll have 
to write tests for these cases (and any others that you think of), 
*/