var s=" Lorem ipsum dolor sit am-et consectetur, adipisicing elit. Ipsam iste possimus vel aspernatur ipsum, nam culpa dolorem nemo facilis. Ad ab alias sed! Non magnam, unde earum optio fugit quo! ";
var url="https://www.youtube.com Front-end eğitimlerı"
// Cümle kaç karakterlidir?
tut=s.length;
console.log(tut);
console.log(typeof tut);

// Kaç kelimelidir

tut=s.split(' ');
// Split böler ve (içerisinde yazdıgın şey) bölüm aralarını yerleştirilir
console.log(tut);
console.log(typeof tut);


// Tüm Cümleyi küçük harfe çevir

tut=s.toLowerCase();
console.log(tut);

// Tüm Cümleyi küçük harfe çevir

tut=s.toUpperCase();
console.log(tut);


// Cümlenin başındaki ve sonundaki karakterleri sil

tut=s.trim();
console.log(tut);


// '-' karakterini cünle içerisinden silin
tut=s.replace('-','');
//  Yeniden yaz ('ilk değer neyin yerine yazılacagı','İkinci değer ne yazılacagı')

console.log(tut);


// url içerisinden belirlediğimiz bir alanı çıkartma
var str='https://'
console.log(url.substring(str.length));
// substringde metne belirli index değerleri atayarak gözükmesini sağlarız
//  Örn 3,6 yazarsak 3.ve 6. indekteki haneleri yalnızca yansıtır.
// Burada keserken başlangıc değerini str degıskenının sonunu verdk
console.log(url.slice(str.length));
// Sliceda aynı ıslemı yapar dilimler



// Urlnin hangi protokolu kullandıgını nasıl gorebılırız
console.log(url.startsWith('http'));
// True yada false dondurur
console.log(url.startsWith('https'));

// rul'.com'ifadesi içeriyor mu

console.log(url.indexOf('.com'));
// hangi indexte içerdiği bilgisini verir
console.log(url.includes('.com'));
// İçerisinde arar true yada false değer döndürür

// url stringi geçerli bir urlye donusturunuz turkce harflerı degıstırmek boşlukları kaldırmak gıbı

console.log(url.toLowerCase().replace(/ /g,'-')
                            .replace(/ı/g,'i')
                            .replace(/ö/g,'o')
                            .replace(/ü/g,'u')
                            .replace(/ğ/g,'g'));
// replace eğer (' ','-') dersem boşlupu - ile değiştir demiş olurum ama bu ilk boşluğa uygulanır yalnızca. bundan dolayı / / işaretlerini kullanmaktayım



// Template Litarals

const fullname='Seda Akkoyun';
var yearofbirth=1997;
const city='İstanbul';

var deger='My name is '+fullname+' I\'m '+(2022-yearofbirth)+' years old and I live in ' +city+'.';
// Bu eksi yazım şekli

var deger=`my name is ${fullname} I'm ${(2022-yearofbirth>=18)?'Reşit':'Reşit değil'} I live in ${city} `;
// ` bu işarete dkkat et bununla başlıyor içeride yaptıgın sordu 
console.log(deger);