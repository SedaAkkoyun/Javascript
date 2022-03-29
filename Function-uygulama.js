//Müşteri hesabından para cekmek ıstıyor, yetersiz ise ek hesaba yonlendırılıyor 

let hesapA={
    ad:'Seda Akkoyun',
    Hesapno:'11564564',
    bakiye:1000,
    ekbakiye:2000,
}
let hesapB={
    ad:'Abdullah Karaboğa',
    Hesapno:'1156456454',
    bakiye:1000,
    ekbakiye:1000,
}
//Obje tanımladık değişken tanımlasaydık değişken (örn: bakiye=100) {sadece belirli bir işlem içerisinde değiştirebilirsin sonrasında esi haline döner}, ancak obje değiştirilir. 


function ParaCek(hesap,miktar){
        if(hesap.bakiye >= miktar)
        // Verecegı mıktar degerı ıcın bakıye yeterli mi
        {
            console.log('Paranızı Çekebilirsiniz');
            hesap.bakiye=hesap.bakiye-miktar;
            // Bakiye yeterli oldugu ıcın hesaptan düşürüldü
        }
        else{
            let toplam=hesap.bakiye+hesap.ekbakiye;
            // ek hesap ıle bırlıkte toplam bakıye hesaplandı
            if(toplam>=miktar){
            if(confirm('Ek hesaptan paranızı çekmek ister misiniz?')){
                console.log('Paranızı çekebilirsiniz');
                var bakiye=hesap.bakiye;
                // Hesap bakiyeyi alıyor
                var ekhesap=miktar-bakiye;
                //Çekilecek miktardan çıkartıyor geri kalan çekilecek tutar ek hesaptan cekılecek
                hesap.bakiye=0;
                // Bakiye miktardan çıkartıldıgı ıcın bakiye sıfırlandı
                hesap.ekbakiye= hesap.ekbakiye-ekhesap;
                // Geri kalan tutar ek hesaptan düşüldü
                console.log(`Kalan Bakiyeniz ${hesap.ekbakiye}`);
                 }else{
                console.log(`hesabınızda toplam ${toplam} bakiye       bulunmamaktadır.`);
                }
          
        }
        else{
            console.log(`Hesap ve ek hesabınızda ${miktar} tutarı bulunmamaktadır. Çekebileceğiniz tutar${toplam}`);
            // Verdıgı tutar bakiye+ekbakıye tutarından fazla oldugu durum
    }
        }


    }
    console.log(ParaCek(hesapA,3000));
  

