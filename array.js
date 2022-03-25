//Array


let names=['seda','eda','hakime','gulay'];
let age=[1997,1998,1986,2020];
let mix=['akk','koyun','erdemir','bircan',null,28,undefined,[1,2,3,4,5]];
// dizi içerisinde bırden fazla turde karakter tanımlayabılırsın , dilersen 2. dizi de ekleyebılırsın
console.log(names);
console.log(names.length);
console.log(typeof names);
console.log(age);
console.log(mix);


//get array item

console.log(names[3]);
console.log(age[0]);

//set array item

names[0]='emel';
// dizinin 0ıncı elemanını değiştirdi
console.log(names);
names[names.length]='emel';
// dizinin sonuna ekledi
console.log(names);


//add item

age.push(2000);
// Dizinin sonuna ekler
age.unshift(2005);
// Dizinin başına ekler
console.log(age);


// remove item

age.pop();
// Dizinin  sonundaki elemanı siler
age.shift();
// Dizinin başındaki elemanı siler
console.log(age);



//indexof items

let index=mix.indexOf('erdemir');
console.log('erdemir '+index);
// İçerisinde arar hangi elemanı buldugunu yazar eger bulamazsa -1 verır


//Reverse
names.reverse();
console.log(names);
// Dizinin sırasını tersine çevirir


//sort
age.sort();
console.log(age);
// Diziyi küçükten büyüğe sıralar,


//concat

let val=age.concat(names);


//splice

names.splice(2,0,'rüstem');
// (2.elemana konumlandır,0ise 2.indexi silmeden konumlandır 1 ise silerek konumlandır.'ne geçecegı')

names.splice(5,1,'masal');
// 5.elemanı sılerek konumlandırdı
console.log(names);


//Dilter and find

function over18(yas)
{
    let a=2022-yas;
    return a>=18;
}
let vall=age.find(over18);
// over18 methodunun ıcerısınde dızının tek tek elemanlarını dondurur ılk buldugu 18 yasından buyuk elemanı yazar
console.log(vall);

vall=age.filter(over18);
// Dizinin içerisindeki 18 yasından buyuk tum yasları bulur ve fıltreler hepsını yazar
console.log(vall);

//Uygulama Arrays



//Bmw Mercedes Opel Mazda dizi oluştur
var dizi=['Bmw', 'Mercedes', 'Opel', 'Mazda'];

// Dizi kaç elemanlıdır?
var eleman=dizi.length;
console.log(eleman);

// Dizinin ilk ve son elemanı nedir?

var ilk=dizi[0];
var son=dizi[dizi.length-1];
console.log(ilk,+''+son);

//renault dizinin sonuna ekle
dizi.push('renault');
console.log(dizi);

//toyota değerini dizinin başına ekleyin

dizi.unshift('toyota');
console.log(dizi);

//dizi elemanlarını ters cevırın

eleman=dizi.reverse();
console.log(eleman);

//[1,2,3,5,80] dizisini sıralayın

var arr=[1,2,80,5,3];
function campare(a,b){
    if(a>b)return 1;
    if(a==b)return 0;
    if(a<b)return-1;
}
console.log(arr.sort(campare));

//Opel dizinin bir elemanımıdır?

// var deger=dizi.indexOf('Opell');
// Bu dizinin kaçıncı elemanı oldugunu döndürür.

deger=dizi.includes('Opel');
// Bu true yada false döndürür
if (deger==true)
{
    console.log('opel bu dizinin elemanıdır')
}
else
{
    console.log('opel bu dizinin elemanı değildir.')
}



// 'Chevrolet,Dacia' yı bir diziye çeviriniz

var str='Chevrolet,Dacia';
var arr2=str.split(',');
// arasına ne koyarsan onu gordugu an ayırır ifadeyi ve diziye cevırır
console.log(arr2);

// Oluşturulan iki diziyi birleştirelim
var conn=arr2.concat(arr);
console.log(conn);

// Oluşturulan dizinin son iki elemanını sil

console.log(conn.slice(4,6));