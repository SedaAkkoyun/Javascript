//Dom : Document Object Model
//Document modulu tum html ve css olaylarını kapsayabılır,
//html değiştirebilir yada react yapılabılır

let val;
val=window.document;
// Document nesnesının nelerı kapsadıgını gorebılırsın
val=document.all;
val=document.all.length;
// 39 adet öge kullanılmıi
val=document.all[2];
// 2.eleman nedir
val=document.head;
val=document.body;
// Documenttekı body 
val=document.anchors;
// A etiketlerini getirir
val=document.URL;
// Sayfa urlsi
val=document.domain;
val=document.images;
val=document.title;
// sayfa başlığı
val=document.forms;
// formları
val=document.forms[0];
// ilk form elemanı
val=document.forms[0].id;
val=document.forms[0].method;
val=document.forms[0].action;
val=document.forms[0].method;
val=document.scripts;
val=document.scripts[0];
val=document.scripts[2].getAttribute('src');
// 3.scriptin src arttributunu getirir
console.log(val);