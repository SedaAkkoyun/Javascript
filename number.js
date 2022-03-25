let val;
val=Number('10');
val=parseInt('10');
val=parseInt('10.2354');
val=parseFloat('10.256454');
val=parseInt('20a');
// a'yı yazmadan devam eder
val=parseInt('a20a');
// çalıştırmaz nan verir
val=isNaN('10');
// nan'mı? diye kontrol eder true yada false dondurur
val=isNaN('â10')

var num=10.232565651;
val=num.toPrecision(5);
// Toplam kaç basamak yazacagını belırtırt son basamagı yuvarlar
val=num.toFixed(2);
// Virgulden sonra kac basamak yazacagını belırler

// Matematiksel işlemler

val=Math.PI;
val=Math.round(2.4);
val=Math.round(2.8);
// En yakın sayıya yuvarlar
val=Math.ceil(2.4);
val=Math.ceil(2.7);
// Yukarı yuvarlar
val=Math.floor(2.4);
val=Math.floor(2.7);
// aşağı yuvarlar

val=Math.sqrt(64);
// neyin karesi

val=Math.pow(4,4);
// 4ü ssü 4
val=Math.abs(-400);
// daima pozitif sayı verir

val=Math.min(1,2,3,4,7,6);
val=Math.max(1,2,3,4,5,6);
val=Math.random()*10;
// 1'den 10a kadar rastgele sayı uretır
val=Math.floor(Math.random()*10);
// Yuvarlayarak


console.log(val);
console.log(typeof val);


// ---------Uygulama
// ---------Toplamda 3 masamaklı sayı kullanın

let s;
s=21.545646;
let tut=s.toPrecision(3);
// noktalı sayılar ıcın
console.log(tut);
console.log(typeof tut);

// Ondalık kısmı 3 masamak ile kısıtlı
tut=s.toFixed(3);
console.log(tut);
console.log(typeof tut);

// En yakın sayıya yuvarla

s=(14.6);
tut=Math.round(s);
console.log(tut);
console.log(typeof tut);

// Aşağı yuvarlama
tut=Math.floor(s);
console.log(tut);

// Yukarı yuvarlama
tut=Math.ceil(s);
console.log(tut);


// 1,5,22,47,5,6 Sayılarının en kucugunu bul ve en buyugunu bul

s=(1,5,22,47,6,5);
tut=Math.max(s);
console.log(tut);

// Rastgele sayı üretme
s
tut=Math.random()*10;
console.log(tut);



