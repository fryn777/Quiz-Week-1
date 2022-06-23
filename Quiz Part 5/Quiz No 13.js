//soal 13
const  findSum =(arr, weight) =>{

    weight = arr.reduce((a, b) =>{
    
        return a+b;
    })
        
    }
    
    console.log(findSum([1,2,3,4,5],9)); // 4 & 5