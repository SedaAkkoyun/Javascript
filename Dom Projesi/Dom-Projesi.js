const form=document.querySelector('form');
const input=document.querySelector('#txtTaskName');
const btndeleteall=document.querySelector('#btnDeleteAll');
const tasklist=document.querySelector('#task-list');
const items=['item 1','item 2','item 3'];


//loadİtem
loadItems();
// Dizideki elemanları ıtem olarak atayan fonksıyon

eventListeners();
// eventListeners fonksiyonunu çalıştır
function eventListeners(){
    form.addEventListener('submit',addNewItem);
    // form submit oldugunda addNewItem fonksiyonunu çalıştır

    tasklist.addEventListener('click',deleteItem);
    btndeleteall.addEventListener('click',deleteAll);
}


function loadItems(){
    items.forEach(function(item){
        createItem(item);
    })
    // items dizisinin elemanlarını sıralar ve her bır eleman için createitem fonksiyonunu çalıştırır
}

function createItem(text){

    const li=document.createElement('li');
li.className='list-group-item list-group-item-secondary';
li.appendChild(document.createTextNode(text));
// li oluşturuldu diğer liler ile aynı class ismi verildi, ve içeriğine fonskiyondan gelen text yazıldı

const a=document.createElement('a');
a.className='delete-item float-right';
a.setAttribute('href','#');
a.innerHTML='<i class="fas fa-times"></i>';
// a oluşturuldu

li.appendChild(a);
// a linin bir çocugu haline getirildi

tasklist.appendChild(li);
// li ul içerisine eklendi


input.value='';
// input içi temizlendi
}
function addNewItem(e){

if(input.value===''){
    alert('add new item');
    // eğer inputa veri girilmeden + ya basıldıysa uyarı verecek
}
createItem(input.value);

// console.log(a);
// console.log(li);

    e.preventDefault();
    //Tıklandığında sayfa yenılenmesin
}
function deleteItem(e){
// Tüm task listi verdiğimiz için tasklistte herhangi bir yere click yapsakta çalışır bundan dolayı if(tasklistin içerisindeki tıkladığı yerin class namei='fas fa-times' ise)
if(e.target.className=='fas fa-times')
{

    e.target.parentElement.parentElement.remove();
    // console.log(e.target);
}



    e.preventDefault();
}
function deleteAll(e){
    // tasklist.innerHTML='';
    // tasklist içerisindeki tüm htmller silindi
    if(confirm('are you sure ?')){
tasklist.childNodes.forEach(function(item){
   
    
    // Tüm nodesları sıraladık içerisinden nodetype 1 olan yani elementleri(li) seçtik
    if(item.nodeType===1){

        item.remove();
        // console.log(item);

    }
})
    }

    e.preventDefault();
    // Eğer buttonun ıcerısınde a olmasaydı refresh etmezdı sayfayı prevent vermemıze gerek kalmazdı
}