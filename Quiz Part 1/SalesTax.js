/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

 function getSalesTax(price, tax) {

    const TotalPayment = price + tax;

    if (isNaN(price) && !isNaN(tax)) {

        return "Price Harus dalam angka";
   
    }else if (!isNaN(price) && isNaN(tax)){
   
        return "Pajak Harus Dalam Angka";
        
    }else if(isNaN(price) && isNaN(tax)){
   
         return "Price & Pajak harus dalam angka";
   
    }else
   
    return `Total Sales : Rp.${price}
    Pajak : Rp.${tax}
    ----------------------------------
    TotalPayment 	: Rp.${TotalPayment}`
   
   }

console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/