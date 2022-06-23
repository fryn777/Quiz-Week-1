/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){


    const laba = end - start;
    let persent = (laba/start*(100));
    persent = Math.floor(persent);

    if (isNaN(start) || isNaN(start)) {

        return `${start} or ${end} bca harus dalam angka`;
        
    } else {

        return `Total Kenaikan income = ${persent}%`;

    }

}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%