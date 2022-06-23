/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */




function howManyKabisat(year1,year2){

    for (let i = year1; i <= year2; i++) {

        if (isKabisat(i) == true)  { 

           console.log(i);
        
        }
    
    }

}

function isKabisat(year){
    
   return new Date(year, 1, 29).getDate() === 29

     }
     



console.log(howManyKabisat(1997,2021));