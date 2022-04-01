//Events Listener Kullanımı


const btn= document.querySelector('#btnDeleteAll');
// btndeleteall sınıfı tetiklendi

// btn.addEventListener('click',function(){
//     // click eventi verildi içerisine clicklendıgınde ne yapacgı yazıldı
// console.log('btn clicked');
// });
btn.addEventListener('click',btnClick);
function btnClick(e){
    console.log('btn clicked');
    // butona tıklandıgında linkine gıtmeye calısıyor ve sayfa yenılenıyor bunu onlemek için :
e.preventDefault();
}

const btn2=document.querySelector('#btnAddNewTask');
btn2.addEventListener('mouseover',function(e){
    // MouseOver butonun uzerınde oynadıgın suruce calısır
let val;
val=e;
val=e.target;
// target ile buton bilgilerine ulasıyorsun ve ıstedıgın bılgıyı alıp kullanabılıyorsun
val=val.classList;
//classlisti çağırıyorsun farjklı bır yazım seklı
val=e.target.id;
val=e.type;


console.log(val);


})