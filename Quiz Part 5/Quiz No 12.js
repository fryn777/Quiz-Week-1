
//soal 12
function range(startOrEnd, end, step) {
   
    if (end == undefined) {

      return rangeFromStartToEnd(startOrEnd)
        
    } else {

       return rangeFromStartToEnd(startOrEnd,end)
        
    }
}

function rangeFromStartToEnd(start, end, step = 1){

    let a = "";

    if (end == undefined) {

        for (let i = 0; i < start; i++) {
            a+=i;
        }
            return a.split('')

    } else {
        
        for (let i = 0; i < end; i++) {
            a+=i;
        }
           return a.split('').slice(start,end)
    
    }

};

console.log(range(9));//(9) [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(range(5,9));//(4) [5, 6, 7, 8]