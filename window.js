// Window Object

// Her bir js ögesi Window ögesidir.

let val;
var a = 10;
function abc(){
   return 0;
};
// hepsi windowun içerisine yazılır
val = window;

// alert
// alert('Merhaba');

// prompt
// var val = prompt('bir sayı giriniz ');  

// confirm
// val = confirm('emin misiniz ?');

// if(val){
//     console.log('ok');
// }else{
//     console.log('no');
// }

// scroll
// val = window.scrollX;
// X eksenınde scrolun nerede konumlandırıldıgı gozukue
// val = window.scrollY;
// Y eksenınde scrolun nerede konumlandırıldıgı gozukue

// location

val = window.location;
// Tüm lokasyon linklerini gösterir
val = window.location.href;
// Href lınkini gösterir
 val = window.location.hostname;
//  analinki gösterir www.seda.com
val = window.location.host;
//linkteki : sonraki alanıda gosterır
val = window.location.protocol;
//inkteki protokolu 'http:' 'https:' gösterir
val = window.location.search;
//Linkte ne aratıldıgını ? sonraki alanı gösterir

// window.location.href='http://sadikturan.com';
//Linki sadikturan.coma yonlendırır
// window.location.reload();
// sayfayı sureklı yenıler

console.log(val);