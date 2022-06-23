/** buat segitiga  */ 

for (let i = 0; i < 6; i++) {
    let output = "";
    for (let j = 4; j > i; j --) {
      output += 4 - j + 1  ;
    }
    console.log(output);
} 
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

for (let i = 0; i < 6; i++) {
    let output = "";
    for (let j = 4; j >=i; j--) {
      output += j+1-i ;
    }
    console.log(output);

}

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1 