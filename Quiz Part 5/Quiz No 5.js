//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.

let text = "";

for (let i = 30000; i < 100000; i+=30000*3/100) {
   text += i + " "
}
console.log(text.split(" ").length +" Tahun");