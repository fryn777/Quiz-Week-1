/**
 * input 4 digit integer lalu hitung jumlahnya
 */

 function sumDigit(n){

     const arrayOfdigits = Array.from(String(n), Number);
     const jumlahDigit = arrayOfdigits.reduce((partialSum ,a) => partialSum +a,0);  

    if (isNaN(n)) {

        return "a123 is not number, try again...";

    } else if(n > 10000)  {
     
        return "12345 harus lebih kecil dari 10000";
        
    }else {

        return jumlahDigit;
    }
   
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...