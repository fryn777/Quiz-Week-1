/**
 * Convert rupiah to other currency
 */

 function convertToRupiah(money,type){

    const yen = money * 11440.47;
    const usd = money * 14579.74;
    const eur = money * 15607.61;

    if (type == "usd"){
        
        return `${money} usd = Rp.${usd} `
        
    }else if(type == "yen"){

        return `${money} yen = Rp.${yen} `

    }else if(type == "euro"){

        return `${money} euro = Rp.${eur} ` 
    } else { 
        
        return "no match type currency";
    }
    
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 euro  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency