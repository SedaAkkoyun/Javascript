/* Ders1----

// alert("Merhaba");
console.log("Merhaba");
// ekrana değil incele kısmındaki console yazar
// text
console.log(1234);
// int
console.log(true);
// bool
console.log([1,2,3,4]);
// array
console.error("hata");
// error
console.warn("uyarı");
//warn
console.clear();

*/



/*     Ders Değişkenler

var age;
console.log(age);
age=20;
console.log(age);

var fullname;
console.log(fullname);

fullname="Seda Akkoyun";
console.log(fullname);

//Değişken tanımlama kuralları,
//Sayısal ifade ile başlamaz
var yas1;
var yas_1;
var $yas;
// if for gibi komut ıslemlerı ıle tanımlama yapılamaz
//birden fazla kelime bosluk ıle kullanılamaz

var ad_soyad;
// case sensetive büyük küçük duyarlıdır

var firstname;
var Firstname;
// var let const
// var dakı degıskenlerı let de de tanımlayabılıyorsun
// const dakı degıskenı bır kere deger verebılıyosun bır daha vermeye calıstıgında hata verıor

let sehir="kocaeli";
console.log(sehir);

const yas=15;
console.log(yas);
yas=17;
// ekrana hata verdi
*/


// ---------Değişken tüleri ve tür dönüşümleri

// let num1=10;
// let num2=20;
// let total=num1+num2;
// console.log(total);
// console.log(typeof total);
// // Sayısal ıkı degerı topladık

// let n1=Number('10');
// let n2=Number('5');
// // Sayısal olmayan strıng degerı number (içindekini inte cevir)diyerek cevırdık
// let topla=n1+n2;
// console.log(topla);
// console.log(typeof topla);
// sayısal olmayan ıkı verıyo sayısala cevırıp topladık



// let val=String(10);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// sayısal verıı strınge cevırdık ve uzunlugunu karakter olarak bulduk


// let deger=String(true);
// console.log(deger);
// console.log(typeof deger);
// console.log(deger.length)
// Bool degerı strınge cevırdık ve lengthını hesapladık


// let deger=String(new Date());
// console.log(typeof deger);
// date to string


// let deger=String([1,2,3]);
// console.log(typeof deger);
// //array to string

// val=(10).toString();
// console.log(typeof val);
// val=(true).toString();
// console.log(typeof val);




///////////////------------Operatorler Uygulama



let kilo, boy ;
kilo=78;
boy=1.55;
let index=kilo/(boy*boy);

if(index >= 0 && index<=18.4)
{
    console.log("zayıf");
}
else{
    console.log("şişko patates");
}