//Function

function YasHesapla(dogumyili)
{
    return 2022-dogumyili;
    //Geri dönecek değer
}
console.log(YasHesapla(1997));

function emeklilikhesapla(dogumyili,isim){
    let yas=YasHesapla(dogumyili);
    let emeklilik=65-yas;
    if(emeklilik>0)
    {
        return console.log(`$ {isim} Emekliliğinize ${emeklilik} yıl kaldı` );
    }
    else
    {
        return console.log(`Zaten Emeklisiniz` );
    }
}
console.log(emeklilikhesapla(1800,'seda'));