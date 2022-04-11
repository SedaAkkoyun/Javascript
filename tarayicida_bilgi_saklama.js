//Local Storage
//Tarayıcı kapatılsa bıle saklar

//set item
const firstname=localStorage.setItem('firstname','seda');
// setItem('oluşturulacak parametre ismi','parametre değeri');
const lastname=localStorage.setItem('lastname','akkoyun');

//Get ıtem
const val=localStorage.getItem('firstname');
// getItem('çağıralacak parametrenin ismi')

//Remove ıtem

localStorage.removeItem('firstname');

//clear
localStorage.clear();
// Komple temizler
console.log(val);


console.log(localStorage);


//Session Storage
//Tarayıcı kapatıldıgında bilgiler otomatık silinir
// const firstname2=sessionStorage.setItem('firstname','seda');
// const lastname2=sessionStorage.setItem('lastname','akkoyun');


// console.log(sessionStorage);
