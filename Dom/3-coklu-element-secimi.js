//Multiple Elements
//Class name
//getElementsByClassName

let val;
val=document.getElementsByClassName('list-group-item');
// list-group-item clasındakı tum verılerı getırır
// Html Collectıon olarak getırır for ıle sıralarsın
// val=document.getElementsByClassName('list-group-item')[2];
// list-group-item clası olan element listesindeki 3. elemanı secer
// val.style.color='red';
val[1].style.color='red';//Bir başka yazım şekli kaynagını 6. satırdan alır
val[1].style.fontSize='25px';
val[2].textContent='New İtem';
// 3.elemanın texti değiştirildi
for(let i=0;i<val.length;i++)
{
    val[i].style.color='blue';
    // valde tanımlı clasın tum elemanları mavı renge dondu
}

// document.getElementsByTagName
// taga gore cagırma işlemi
val=document.getElementsByTagName('li');
// Tüm li'ler
val=document.getElementsByTagName('a');
// Tüm a lar

// sadece task-list classındakı tum a ları ıstıyorsam
val=document.getElementById('task-list');
val=val.getElementsByTagName('a');
// başka bır yazım seklı
// val=document.getElementById('task-item')
// .getElementsByTagName('a');


//QuerySelectorAll
//belırledıgımız elementlerı secer ancak foreach ozellıgıde vardır

// val=document.querySelectorAll('li');
// Tüm lileri seçti
// val.forEach(function(item,index){
//     // console.log(item);
//     item.textContent=`${index} -hello`;
//     // tüm itemların textı degıstırıldı
// })

val=document.querySelectorAll('li:nth-child(odd)');
// Tek sayılı indexe sahip liler
val.forEach(function(item){
    item.style.background='#ccc';
})
console.log(val);
