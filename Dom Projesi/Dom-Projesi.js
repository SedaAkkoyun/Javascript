const form=document.querySelector('form');
const input=document.querySelector('#txtTaskName');
const btndeleteall=document.querySelector('#btnDeleteAll');
const tasklist=document.querySelector('#task-list');
// const items=['item 1','item 2','item 3'];
let items;


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
    items= GetItemFromLs();
    // Localstorage çağırma fonksiyonu ,


    items.forEach(function(item){
        createItem(item);
    });
    // items dizisinin elemanlarını sıralar ve her bır eleman için createitem fonksiyonunu çalıştırır
}

// get item to localStorage
function GetItemFromLs(){
    if(localStorage.getItem('items')===null){
        items=[];
        // Localstorageden çektiğimiz items değeri boş dönüyorsa itemsı []; yap
    }
    else{
        // Eğer boş değilse items değişkenine localstoragenin içindeki değeri yaz
        items=JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

// Set item to locakstorage
function SetItemToLS(text){


items=GetItemFromLs();
// İtemsın GetItemFromLs oldugunu söyledik, yani localStorage içerisindeki elemanalr
items.push(text);
// functiondan dönen texti itemsa ekledik

localStorage.setItem('items',JSON.stringify(items));
// localStoragein içerisindeki items elemanına girilen texti ekledik
// Not: stringify dali ify [] köşeli parantez yapmamızı sağlar
}
function DeleteItemFromLs(text){
    items=GetItemFromLs();
    // itemın içerisine localStoragedaki 'items' verileri getirildi
    items.forEach(function(item,index){
        // veriler sıralandı
        if(item===text){
            // gelen texte itemın içerisinden buldu
          items.splice(index,1);
        //   buldugu ıtemı sildi splice(buldugun indexin,1. değeri yani ilk değeri)
        }
       
    });
    localStorage.setItem('items',JSON.stringify(items));
    // Sildikten sonra son halini localstorageye set etti
    
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

}
function addNewItem(e){

if(input.value===''){
    alert('add new item');
    // eğer inputa veri girilmeden + ya basıldıysa uyarı verecek
}
createItem(input.value);


// save to ls
SetItemToLS(input.value);
// Girilen değer locakstorageye de yazıldı

// console.log(a);
// console.log(li);
input.value='';
    e.preventDefault();
    //Tıklandığında sayfa yenılenmesin
}
function deleteItem(e){
// Tüm task listi verdiğimiz için tasklistte herhangi bir yere click yapsakta çalışır bundan dolayı if(tasklistin içerisindeki tıkladığı yerin class namei='fas fa-times' ise)
if(e.target.className=='fas fa-times')
{

    e.target.parentElement.parentElement.remove();
    // console.log(e.target);
    
    DeleteItemFromLs(e.target.parentElement.parentElement.textContent);
    // fa fa-timesın parenti a, anında parenti li , fakat localstoragede değerler yani texti saklandığı için lininde textcontentini localstorageden sildik.
}



    e.preventDefault();
}
function deleteAll(e){
    // tasklist.innerHTML='';
    // tasklist içerisindeki tüm htmller silindi
    if(confirm('are you sure ?')){
        
        
        // Silme 1.yöntem
// tasklist.childNodes.forEach(function(item){
   
    
//     // Tüm nodesları sıraladık içerisinden nodetype 1 olan yani elementleri(li) seçtik
//     if(item.nodeType===1){

//         item.remove();
// console.log(item); } });


        // silme 2.yöntem 
        while(tasklist.firstChild){
            // Tasklistin 1.elemanını buldugun sürece
            tasklist.removeChild(tasklist.firstChild)
            // tasklistin 1. elemanını sil , her seferinde 1. elemanı sildiği için heps,ni sldiğinde 1. elemanda olmamış olacak
        }
localStorage.clear();
    e.preventDefault();
    // Eğer buttonun ıcerısınde a olmasaydı refresh etmezdı sayfayı prevent vermemıze gerek kalmazdı
} }