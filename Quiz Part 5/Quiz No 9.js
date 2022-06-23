//soal 9
function maxWordLength(params) {
	//buat function menentukan kata mana yang paling panjang lengthnya
    const strArray = params.split(" ");
    const sortedStrArray = strArray.reduce((a, b) => a.length > b.length ? a : b, ''
       
   );

    return sortedStrArray;

}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp
