//soal 7
function countingValleys(s) {
	//buat isi function untuk menentukan nilai countingValleys di console jika D = -1 dan U = +1
	//jika total nilai akhir adalah 0 dan U maka = +1 
    let strArr = s.split('')
    let count = 0
    let result = 0
    for(let step=0; step<strArr.length; step++){
        if(count == 0 && strArr[step] == 'U'){
            count--;
            result++;
        }else if(result == 0 && strArr[step] == 'D') {
            count++;
        }else
            result--;
    }
    return count;
}
console.log(countingValleys('UDDDUDUU'));//1