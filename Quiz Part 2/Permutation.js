
const checkPermute = function(stringOne, stringTwo) {

    //arrayA.sort().toString() === arrayB.sort().toString()
    
    const A =  stringOne.length
    const B = stringTwo.length
    if (A == B == true) {
        
        return true;

    } else {

        return false;
        
    }
    // if different lengths, return false

    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
  };


  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false; 