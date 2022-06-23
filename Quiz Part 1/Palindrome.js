//** input 4 digit, cek apakah angka palindrome */

function isPalindrome(angka){

    // find the length of a string
    const len = angka.length;


    if (isNaN(angka)) {

        return `${angka} It is not a number`;

    } else {

        for (let i = 0; i < len / 2; i++) {

            if (angka[i] !== angka[len - 1 - i]) {

                return `${angka} It is not a palindrome`;
            }
        }
        return `${angka} is palindrome`;
    }

}


console.log(isPalindrome("abcd"));//abcd is not an number
console.log(isPalindrome("123a"));//123a is not an number
console.log(isPalindrome("1234"));//1234 is not palindrome
console.log(isPalindrome(1221));//1221 is palindrome
console.log(isPalindrome("8888"));//8888 is palindrome 