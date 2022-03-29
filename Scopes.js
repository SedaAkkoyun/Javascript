//Scopes
// var let yada const olarak tanımladığımız değişkenlerin blok içi yada dışındaki çalışma durumu



//Global Scopes
var names='Çınar';
//Global olarak tanımlandı

function logname(){
    console.log(names);
    // Fonksiyon içerisinde de kullanabilirsin
}
if(true){
    console.log(names);
    // Global değişkleni Koşul içerisinde de kullanabılırsın
}
var names='Çınar';
function logname(){
    var names='Seda';
    var age=25;
    console.log(names,age);
    // Fonksiyon içerisinde değişkeni yeniden tanımlayıp değiştirebilirsib ancak fonksiyon dışında tekrar kullanmaya calıstıgında değeri globalden alma names='Seda' yanlızca fonksiyon içerisinde calısır
    //Fonksiyonlar kendi scopelarını olusturur
}

// console.log(age);
// Hata verir, çünkü fonksiyon ıcerısınde tanımladıgımız degısken dısarıdan çağırılmaz

logname();
console.log(names);
console.log(window);
var age=25;
if(true){
    var age=25;
    // Blocklar yeni scope olusturmal varolan değişken değerini değiştiri
 
}
console.log(age);
// 25 olarak değiştirdi

if(true){
    var model = 'opel';
    let year = 2016;
    const Color='white';
    console.log('block scope',model,year,Color);



}


// console.log('block scope',model,year,color);
// Dışarıdan verilmez hata verir
//******      Es6 ile gelen let ve const block scope oluşturur */

var i=1;
for(let i=0;i<10;i++){
console.log('i',i);
}
console.log(i);
// Global değişken block içerisinde değişti Eğer global değişkeni değiştirmesin istiyorsak var değil let yada const
