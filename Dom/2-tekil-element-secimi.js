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

//QuerySelector
console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('div'));
document.querySelector('li').style.color='red';
// İlk li elemanının rengi değişti 1 eleman ıcın ıslem yapar
document.querySelector('li:last-child').style.color='green';
//son li rengi değişti
document.querySelector('li:nth-child(2)').style.color='yellow';
//2.li elemanının rengi değişti
document.querySelector('li:last-child').textContent='task item';
// son li elemanının text içeriği değişti
// document.querySelector('li').className='list-group-item list-group-item-';
// Class içeriği değiştirildi
console.log(document.querySelector('li').classList.add('active'));
// classların yanına active classıda eklendi



//Single Elements
//*****document.getElementById()
//*****document.QuerySelector() */