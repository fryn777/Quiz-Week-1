/** Display year is kabisat and display month */

function getDays(month,year){

    const hari = new Date(year, month, 0).getDate();
    
    const leap = new Date(year, 1, 29).getDate() === 29;
    
    
    if (isNaN(month) && !isNaN(year)) {

        return "inputan bulan harus dalam integer";
        
    }else if(!isNaN(month) && isNaN(year)){

        return "inputan tahun harus dalam integer";

    }else if (isNaN(month) && isNaN(year)){

        return "inputan bulan & tahun harus dalam integer";

    }else if (isNaN(month) && !isNaN(year) && leap === true){
     
        return `This month has ${hari} days, ${year} adalah tahun kabisat`;

    }else {
        
        return `This month has ${hari} days`;
    }

}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,1997)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari 