/** 
  Diketahui rumus area = pi * radius * radius dimana pi = 3.14159, r = radius buat function dengan nama getAreaCircle(r)
  Output Contraint : 
  getAreaCircle('-1'); //return radius -1 <= 0, try higher
  getAreaCircle('a');  //return Inputan harus dalam angka
  getAreaCircle(5);    //return 78.53975
 */

  const pi = 3.14159;

  function getAreaCircle(r) {
   
  if (r <=0 ) {
    
    return 'Radius -1 <=0, Try Higher';

  }else if (isNaN(r)) {
    
    return 'Inputan Harus dalam angka';

  }else {

    area = pi * r *r;

    return area.toFixed(5);

  }
  
   

}

console.log(getAreaCircle('-1')); //return radius -1 <= 0, try higher
console.log(getAreaCircle('a'));  //return Inputan harus dalam angka
console.log(getAreaCircle(5));    //return 78.53975
