//Sayı tahmın oyunu

// 1-10 arasında rastgele sayı ureten ve kullanıcının tahmın etme hakkı olan

// Benim yaptıgım ;





let dizi=[];
for(var i=0;i<3;i++)
{
    let val=Math.floor((Math.random()*10)+1);
    // 1-10 arasında sayı tutar
    dizi[i]=val;
    //Diziye yazar
}
// 1-10 dahıl olmak uzere 3 adet rastgele sayı tutuyor ve dızıye yazıyor


console.log(dizi);
// prompt("Bir sayı giriniz; ");
// kullanıcıdan verı alır
var hak=3;

while(hak>0)
// Hak 0 oldugu surece doner
{
    let tahmin=Number(prompt("Bir sayı giriniz"));

    deger=dizi.includes(tahmin);
    // Dizi içerisinde aratıyor
    if(deger==true)
    {
        hak++;

        alert(`Doğru tahmin hakkınız ${hak} `);
       
    }

    else 
    {   hak--;
        alert(`Yanlış tahmin Hakkınız ${hak}`);
    }
   
    

}
