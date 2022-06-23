/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){

    const array = s;
    const ArraySplit = array.split("/");
    const Re = ArraySplit.reverse();
    const Ambil = Re.slice(1,3);
    const Rere = Ambil.reverse();
    const A = Rere.unshift(ArraySplit[0]);
    const Cetak = new Date(Rere.toString());

    if (isNaN(Cetak.getTime())) {
        
     return `${s} bad format date`;

    } else {
        
        return Cetak;
        
    }
  
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date