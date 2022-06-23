function isPalindrome(word){

    const lowercase = word.toLowerCase();

    return lowercase == lowercase.split('').reverse().join('');

}

console.log(isPalindrome('kasur ini rUsak'));//true