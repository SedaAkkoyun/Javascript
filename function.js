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

//Fonksiyon Türleri

//Function Declarations
// sonradan çağırılan fonksiyon

function  sum(a,b){
    var c=a+b;
    return c;
}
console.log(sum(5,8));


//Function Expressions
//Değişken içerisine çağırma
const sum2=function (a=0,b=0){
    // a ve bye varsayılan degerler verıldı olurda bos yazılırsa ıcı nan vermesın dıye
    let c=a+b;
    return c;
}
console.log(sum2(2,4));
console.log(sum2(10));//2. değeri vermedıgımız ıcın nan doner boş donmemesı ıcın varsayılan degerlerın fonksıyon ıcerısınde tanımlanması gerekır
console.log(sum2(10,20,30,40));//Sadece 1 ve 2. değeri gorur

//Function Object
//argumans (parametre yada parametre detayı)
// function sum(5,2,6){ return console.log(arguments[0]); gibi}

function sumAll()
{
    var total=0;
    for(let i=0;i<arguments.length;i++)
    // İçine girilen değer sayısı kadar 
    {
        total+=arguments[i];

    }
    return total;
}
console.log(sumAll(10,20,30,30));