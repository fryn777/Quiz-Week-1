//soal 1
// Terdapat deret angka sebagai berikut : 12,24,36,48,60
// Buat script program menggunakan looping for untuk menampilkan deret diatas

let a = "";
for (let index = 12; index <= 60; index+=12) {
   a += index + " "
}
console.log(a);