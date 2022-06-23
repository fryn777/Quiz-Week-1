 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

  function getSalesDiscount(price,tax,discount){

   const Diskon = Math.round((price * discount) / 100);
   const PriceAfterDiscount = price - Diskon;
   const Pajak =  (PriceAfterDiscount * tax) /100; 
   const TotalPayment = PriceAfterDiscount + Pajak;

    if (isNaN(price) && !isNaN(tax) && !isNaN(discount)) {

        return "Price harus dalam angka";
        
    }else if(!isNaN(price) && isNaN(tax) && !isNaN(discount)){

        return "Pajak harus dalam angka";


    }else if(isNaN(price) && isNaN(tax) && isNaN(discount)){

        return "Price, Tax & Discount harus dalam angka";

    } else {
        
        return `Total Sales : Rp.${price}
        Discount (5%) : Rp.${Diskon}
        PriceAfterDiscount 	: Rp.${PriceAfterDiscount}
        Pajak (10%)	: Rp.${Pajak} 
        ----------------------------------
        TotalPayment 	: Rp.${TotalPayment}`

    }

}

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
/**
   Total Sales 	: Rp.4500 
   Discount (5%) 	: Rp.225
   PriceAfterDiscount 	: Rp.4275
   Pajak (10%) 	: Rp.427.5
   ----------------------------------
   TotalPayment 	: Rp.4702.5
*/