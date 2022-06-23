
 
   let prime_num1 = [],
   prime_num2 = [];

function showPrimeNumber(n){
 
    isPrime(n);

    for (var i = 2; i <= n; i++) {
        if (prime_num2[i]) {
          prime_num1.push(i);
          for (var j = 1; i * j <= n; j++) {
            prime_num2[i * j] = false;
          }
        }
      }
    
      while (prime_num1.length > 0) {

        let chunk = prime_num1.splice(0,5);
      
        console.log(chunk);
      
      }

    
}

function isPrime(n){

    for (var i = 0; i <= n; i++) {
        prime_num2.push(true);
      }
      
}

console.log(showPrimeNumber(100));
/**
2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97
 */