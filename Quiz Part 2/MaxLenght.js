function maxWordLength(params) {
    

       const strArray = params.split(" ");
       const sortedStrArray = strArray.reduce((a, b) => a.length > b.length ? a : b, ''
           //(paramsA, paramsB) => {
              // return paramsB.lenght - paramsA.lenght;
         //  }
      );

       return sortedStrArray;

} 

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp