//soal 1
// Terdapat deret angka sebagai berikut : 12,24,36,48,60
// Buat script program menggunakan looping for untuk menampilkan deret diatas

let a = "";
for (let index = 12; index <= 60; index+=12) {
   a += index + " "
}
console.log(a);
//soal 2
// Buatlah algoritma untuk menampilkan angka 1 s/d n, dengan ketentuan:
// kelipatan 3 diganti “OK”, kelipatan 4 diganti “YES”, kelipatan 3 & 4 diganti “OKYES”
// Contoh output di bawah adalah ketika nilai “n” = 15


const n = 15;
let z = "";
for (let i = 1; i <= n; i++) {

    if (i % 3 == 0 && i % 4 === 0 ) {
        
        console.log("OKE YES");

    }else if (i % 3 === 0 ) {

        console.log("OK");

        
    }else if (i % 4 === 0) {
        
        console.log("YES");
    }else

    console.log(i)
    

}

//soal 3
// Buat script program supaya bisa muncul output seperti di bawah
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9

for (let i = 1; i <=5; i++) {
    let b="";
    for (let j = 1; j <=i; j++) {
    b += i+j-1+" "
    }
    console.log(b);
}


//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5


for (let i = 0, n=5; i <= n; i++) {
   let b="";
   for (let j = 0; j < i; j++) {
     b+=i+" "
   }
    console.log(b);
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 0, n=5; i <= n; i++) {
    let b="";
    for (let j = 0; j < i; j++) {
      b+=i-j+" "
    }
     console.log(b);
 }

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3

// 1 10 11 20 21
// 2 9 12 19 22
// 3 8 13 18 23
// 4 7 14 17 24
// 5 6 15 16 25

//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.

let text = "";

for (let i = 30000; i < 100000; i+=30000*3/100) {
   text += i + " "
}
console.log(text.split(" ").length +" Tahun");


//soal 6
function isPalindrome(word){
	//buat isi function untuk menentukan nilai palindrome di console true atau false 
    const lowercase = word.toLowerCase();

    return lowercase == lowercase.split('').reverse().join('');
}
console.log(isPalindrome('kasur ini rUsak'));//true


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




//soal 8
function checkPermute(stringOne, stringTwo) {
	//buat isi function untuk menentukan nilai checkPermute di console jika length
	//kedua inputan tidak sama makan hasilnya false, dan jika length sama maka di cek apakah
	//jumlah kata dari masing2 inputan perjumlah sama atau tidak

    const A = stringOne.split('').sort().join('');
    const B = stringTwo.split('').sort().join('');
    const Perbandingan = A === B;

    if (stringOne.length != stringTwo.length) {
        
        return false;
        
    }if(Perbandingan == true){

        return true;

    }else{

        return false;
    }
    
}
console.log(checkPermute('aba', 'aab'))//true;
console.log(checkPermute('aba', 'aaba'))//false;
console.log(checkPermute('aba', 'aaa'))//false;

//soal 9
function maxWordLength(params) {
	//buat function menentukan kata mana yang paling panjang lengthnya
    const strArray = params.split(" ");
    const sortedStrArray = strArray.reduce((a, b) => a.length > b.length ? a : b, ''
       
   );

    return sortedStrArray;

}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp


//soal 10
const animal = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];
// Find where the 'walrus' item is
const walrus = animal.indexOf("walrus")

// Join the portion before 'walrus' to the portion after 'walrus'
const animalsSliced = [...animal.slice(0, walrus), ...animal.slice(walrus + 1)]

// now animalsSliced has ['dog', 'cat', 'seal', 'lion', 'cat']

console.log(animalsSliced);

//soal 11
function startsWithE(animal) {

return animal.startsWith('e')

}
const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog',
    'eel', 'rabbit', 'goose', 'earwig'];

const animalsE = animals.filter(startsWithE);

console.log(animalsE); // ["elephant", "emu", "eel", "earwig"]

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

//soal 13
const  findSum =(arr, weight) =>{

weight = arr.reduce((a, b) =>{

    return a+b;
})
    
}

console.log(findSum([1,2,3,4,5],9)); // 4 & 5

//soal 14
/**
 *  Peminjaman komik di taman bacaan 
 *  hanya dibolehkan 3hari dihitung saat peminjaman,
 *  lebih dari 6 hari akan dikenakan denda sebesar
 *  Rp.500 tiap komik. biaya komik peminjaman Rp.2000/tiap komik.
 *  buat function dengan :
 *  totalKomikPinjam(starDate,endDate, totalkomik)
 *  startDate : tgl pinjam komik
 *  endDate : tgl kembalikan komik
 *  totalKomik : jumlah komik, maksimal 10 komik
 */

 function tagihanKomik(tglPinjam, tglKembali, totalkomik) {


 const hargakomik = 2000;
 let day1 = new Date(tglPinjam);
 let day2 = new Date(tglKembali);
 const waktu = day2.getTime() - day1.getTime();
 const totalhari = waktu/(1000 * 3600 *24);   

if (isNaN(day1.getTime()) && !isNaN(day2.getTime())) {

    return `Tgl.Pinjam ${tglPinjam} not valid formated date`;
    
}else if (!isNaN(day1.getTime()) && isNaN(day2.getTime())){

    return `Tgl.kembali ${tglKembali} not valid formated date`;

}else if(isNaN(day1.getTime()) && isNaN(day2.getTime()) ){

    return `Tgl.Pinjam ${tglPinjam} & Tgl.Kembali ${tglKembali} not valid formated date`;

}else if(totalhari > 6){

    return `
    Total Hari = ${totalhari}
    Total Komik = ${totalkomik} x ${hargakomik+500}
    ------------------------------
    Total Tagihan = ${totalkomik * (hargakomik+500) * totalhari} `

} else {

    return `
    Total Hari = ${totalhari}
    Total Komik = ${totalkomik} x ${hargakomik}
    ------------------------------
    Total Tagihan = ${totalkomik * hargakomik * totalhari} `
    
}

}

console.log(tagihanKomik("09-03-20xx", "09-06-2021",4)); //Tgl.Pinjam 09-03-20xx not valid formated date
console.log(tagihanKomik("09-03-2021", "09-mm-2021",4));//Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-20xx", "09-mm-2021",4));//Tgl.Pinjam 09-03-20xx & Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-2021", "09-06-2021",4));
/**
 Total Hari = 3 
 Total Komik = 4 x 2500 
 ------------------------
 Total Tagihan =Rp.30000
 */


//soal 15
/**
    Buat function untuk membayar cicilan angsuran rumah,
    diketahui angsuran rumah per bulan Rp.3.500.000,
    
    function payment(tglBayar,tglJatuhTempo,cicilan);
    jika penghuni telat membayar dari tgl jatuh tempo 
    akan dikenakan denda sebesar 2 mile/hari atau 2/1000 dari total angsuran.
    Pembayaran dapat dilakukan paling cepat 5 hari sebelum jatuh tempo.
 */

function payment(tglBayar,tglJatuhTempo,cicilan){

    if (cicilan < 3500000 ) {

        return `Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran`;
    
    }else {

        return showTagihan(tglBayar,tglJatuhTempo,cicilan,cicilan,differenceInDays(tglBayar,tglJatuhTempo));
        
    }
    
    
} 

function showTagihan(payDate,dueDate,angsuran,cicilan,terlambat,denda){

    if (differenceInDays(payDate,dueDate) < 0) {

        return `

Tanggal Bayar : ${payDate}
Jatuh Tempo :  ${dueDate}
--------------------------
Tagihan bulan 9,2021 = Rp.${angsuran}
Denda = Rp.${2/1000*angsuran} (terlambat ${Math.abs(terlambat)} hari)
Total = Rp.${cicilan+(2/1000*angsuran)} (lunas)
--------------------------
Kwitansi ini sebagai alat bukti pembayaran`;
        
    } else {

        return `

Tanggal Bayar : ${payDate}
Jatuh Tempo :  ${dueDate}
--------------------------
Tagihan bulan 9,2021 = Rp.${angsuran}
Denda = Rp.0 (terlambat ${terlambat} hari)
Total = Rp.${cicilan} (lunas)
--------------------------
Kwitansi ini sebagai alat bukti pembayaran`;
        
    }

}

function differenceInDays(startDate,endDate){

    let day1 = new Date(startDate);
    let day2 = new Date(endDate);
    const waktu = day2.getTime() - day1.getTime();
    const hari = waktu/(1000 * 3600 * 24);
    return hari;

}

console.log(payment("09/30/2021","09/27/2021",50000));//Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
console.log(payment("09/21/2021","09/27/2021",3500000));//Tagihan bulan 8 belum tersedia
console.log(payment("09/27/2021","09/27/2021",3500000));
/**
 --------------------------
    	Tanggal Bayar : 27/9/2021
    	Jatuh Tempo :  27/9/2021
    	--------------------------
    	Tagihan bulan 9,2021 = Rp.3500000 
    	Denda = Rp.0 (terlambat 0 hari)
    	Total = Rp.3500000 (lunas)
    	--------------------------
    	Kwitansi ini sebagai alat bukti pembayaran
 */