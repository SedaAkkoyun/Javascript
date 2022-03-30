//Dom ile Bir elementin id ve class bılgılerıne ulasabılırız

let val;
val=document.getElementById('header').id;
val=document.getElementById('header').className;

// Bir diğer yazım şekli;
val=document.getElementById('header');
// val=val.id;
// val=val.className;

// Aynı zamanda element içerik bilgilerini de düzenleyebiliriz;
//getElementById
val=document.getElementById('header');
val.style.fontSize='35px';
val.style.color='red';
val.style.fontWeight='bold';
// val.style.display='none';


document.getElementById('header').innerText='To Do App';
// Text düzenlendi
document.getElementById('header').innerHTML='<b>To do list</b>';
// Html düzenlendi
console.log(val);

