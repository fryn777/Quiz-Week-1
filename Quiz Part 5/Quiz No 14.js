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