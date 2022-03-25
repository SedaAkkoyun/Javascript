// Date object


let d=new Date();
// New date bir objedir, bundan dolayı içerisinden parametreler çağırılabılır
// New date tarihi gun ay yıl saat ve saat dılımı cınsınden yazar bızler ıcerısınden ıstedıgımızı cekebılırız.


// Set Methods
// Sette verileri biz belirliyoruz
d.setDate(23);
d.setFullYear(1997);
d.setHours(4);
d.setMinutes(35);
d.setMonth(3);




// Get methods
console.log(d.getDate());
console.log(d.getDay());
// 0dan baslar 0 pazardır 
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getTime());

console.log(d);
console.log(typeof d);




// Yaş hesaplama

let birtday=new Date(1997,7,2);
// Aylardan 0dan baslıyor
console.log(birtday);
let b=new Date();
let age=(b.getFullYear()-birtday.getFullYear());
console.log(b.getMonth()-birtday.getMonth());
console.log(age);



// Şimdiki tarihin gün ay ıl bılgısını yazınız

let a=new Date();
console.log(a);
console.log(a.getDate(),a.getMonth()+1,a.getFullYear());


// Tarih ve saat içeren bir date objesi oluşturunuz

var dta=new Date('2019/11/22  22:10:10');
var dtb=new Date(1997,7,2,3,14,16,25,36);
console.log(dta);
console.log(dtb);



// 1/1/1999 tarihinden bir gün öncesine git

let t=new Date('1/1/1999');
let tut=t.getDate();
// bir veri içerisinde tutmak zorundasın
t.setDate(tut-1);
console.log(t);


// İki tarih arasındaki geçen zamanı buluyoruz

var start=new Date('1/1/1990');
var end=new Date('1/1/1991');

var millisecond=end-start;
console.log('millisecond:'+millisecond);

var saniye=millisecond/1000;
console.log('saniye:'+saniye);

var dakika=saniye/60;
console.log('dakika:'+dakika);

var saat=dakika/60;
console.log('saat:'+saniye);

var gun=saat/24;
console.log('gun: '+gun);



// Yaş hesaplama

var yil=new Date('02/08/1997');
var yas=new Date();
var hes=yil.getFullYear()-yas.getFullYear();
console.log(hes);

//  her yıl Mayıs ayının 2.haftası pazar gunu kutlanan anneler gunu 2022 yılında hangı gune denk gelecektır?


var anne=new Date();
anne.setFullYear(2022);
anne.setMonth(4);
anne.setHours(0,0,0,0);
anne.setDate(1);
console.log(anne);
// Tarih sıfırlandı mayıs 1e getırıldı

while(anne.getDay() !=0)
{
    // Anne tarihinin günü 0 olmadığı sürece (0=pazar)
    anne.setDate(anne.getDate()+1);
    // Günü arttırarak devam et
}
// Pazar(0) geldı ve donguden cıktı
anne.setDate(anne.getDate()+7);
// İkinci haftası oldugu ıcın +7 yaptık

console.log(anne);
