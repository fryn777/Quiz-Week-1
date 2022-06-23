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

        const denda = 3/1000*cicilan;

        if (cicilan < 3500000 ) {
    
            return `Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran`;
        
        }else if(differenceInDays(tglBayar,tglJatuhTempo) > 5){


            return `Tagihan bulan 8 belum tersedia`;

        } {
    
            return showTagihan(tglBayar,tglJatuhTempo,cicilan,cicilan,differenceInDays(tglBayar,tglJatuhTempo),denda);
            
        }
        
    } 
    
    function showTagihan(payDate,dueDate,angsuran,cicilan,terlambat,denda){

        const bulan = new Date(dueDate).getMonth();
        const tahun = new Date(dueDate).getFullYear();
    
        if (differenceInDays(payDate,dueDate) < 0) {
    
            return `
    
    Tanggal Bayar : ${payDate}
    Jatuh Tempo :  ${dueDate}
    --------------------------
    Tagihan bulan ${bulan +1},${tahun} = Rp.${angsuran}
    Denda = Rp.${denda} (terlambat ${Math.abs(terlambat)} hari)
    Total = Rp.${cicilan+(denda)} (lunas)
    --------------------------
    Kwitansi ini sebagai alat bukti pembayaran`;
            
        } else {
    
            return `
    
    Tanggal Bayar : ${payDate}
    Jatuh Tempo :  ${dueDate}
    --------------------------
    Tagihan bulan ${bulan + 1},${tahun} = Rp.${angsuran}
    Denda = Rp.0 
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