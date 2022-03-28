//Sayı tahmın oyunu

// 1-10 arasında rastgele sayı ureten ve kullanıcının tahmın etme hakkı olan

// Benim yaptıgım ;





// let dizi=[];
// for(var i=0;i<3;i++)
// {
//     let val=Math.floor((Math.random()*10)+1);
//     // 1-10 arasında sayı tutar
//     dizi[i]=val;
//     //Diziye yazar
// }
// // 1-10 dahıl olmak uzere 3 adet rastgele sayı tutuyor ve dızıye yazıyor


// console.log(dizi);
// // prompt("Bir sayı giriniz; ");
// // kullanıcıdan verı alır
// var hak=3;

// while(hak>0)
// // Hak 0 oldugu surece doner
// {
//     let tahmin=Number(prompt("Bir sayı giriniz"));

//     deger=dizi.includes(tahmin);
//     // Dizi içerisinde aratıyor
//     if(deger==true)
//     {
//         hak++;

//         alert(`Doğru tahmin hakkınız ${hak} `);
       
//     }

//     else 
//     {   hak--;
//         alert(`Yanlış tahmin Hakkınız ${hak}`);
//     }
   
    

// }


//Başka bır yazım seklı tek bır sayı ıle


var hak2,can;
var tahmin,sayac=0;
var sayi=Math.floor((Math.random()*10)+1);
console.log(sayi);
can=Number(prompt("Kaç kere de bileceksiniz?"));
hak=can;
while(hak>0)
{   sayac ++;
    hak--;
    tahmin=Number(prompt("Bir sayı giriniz;"));
    if(tahmin==sayi)
    {
        console.log(`Tebrikler ${sayac} kadar bildiniz`);
        console.log(`Puan : ${100-(100/can)*(sayac-1)}`);
        break;
    }
    else if(sayi>tahmin)
    {
        console.log('Daha büyük bir sayı giriniz');
    }
    else 
    {
        console.log('Daha küçük bir sayı giriniz');
    }
    if(hak==0)
    {
        console.log(`hakkınız bitti sayı=${sayi}`);
    }
}
    

