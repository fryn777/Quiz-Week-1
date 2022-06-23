/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


 function getPeriodTimes(seconds) {

    let days = Math.floor(seconds / (3600*24));
    seconds  -= days*3600*24;
    let hrs   = Math.floor(seconds / 3600);
    seconds  -= hrs*3600;
    let mnts = Math.floor(seconds / 60);
    seconds  -= mnts*60;

    if (isNaN(seconds)) {

        return "700005A is not number";
        
    } else {
        
        return `${days} hari ${hrs} jam ${mnts} menit ${seconds} detik`;
    }
    
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik