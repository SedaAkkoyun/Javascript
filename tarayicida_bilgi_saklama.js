//Local Storage
//Tarayıcı kapatılsa bıle saklar

//set item
const firstname=localStorage.setItem('firstname','seda');
// setItem('oluşturulacak parametre ismi','parametre değeri');
const lastname=localStorage.setItem('lastname','akkoyun');



//Get ıtem
// const val=localStorage.getItem('firstname');
// getItem('çağıralacak parametrenin ismi')



//Remove ıtem

localStorage.removeItem('firstname');



//clear
localStorage.clear();
// Komple temizler

// set array to storage 
let hobies=['bisiklet','basketbol','voleybol'];
localStorage.setItem('hobies',hobies);
// dizi elemanları değil metin olarak saklar, dizi olarak saklasın istiyorsak;
localStorage.setItem('hobies',JSON.stringify(hobies));

val=JSON.parse(localStorage.getItem('hobies'));
// localStorage içerisindeki hobies dizisinin indexli elemanlarını çeker

console.log(val);
console.log(localStorage);



//Session Storage
//Tarayıcı kapatıldıgında bilgiler otomatık silinir
// const firstname2=sessionStorage.setItem('firstname','seda');
// const lastname2=sessionStorage.setItem('lastname','akkoyun');


// console.log(sessionStorage);
