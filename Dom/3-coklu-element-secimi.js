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


console.log(val);