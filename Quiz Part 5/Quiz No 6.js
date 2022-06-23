//soal 6
function isPalindrome(word){
	//buat isi function untuk menentukan nilai palindrome di console true atau false 
    const lowercase = word.toLowerCase();

    return lowercase == lowercase.split('').reverse().join('');
}
console.log(isPalindrome('kasur ini rUsak'));//true