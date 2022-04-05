//Event Bubbling

const form =document.querySelector('form');
const card =document.querySelector('.card');
const container =document.querySelector('.container');
// iç içe yerleştirilmiş 3 elemana da teetikleyici verdik ,
// En içtekine tıklandıgında otomatık olarak ıcten dısa doğru diğer tetikleyicileride çeker bunu engellemek ıcın
// eleman.stopPropagation()
// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();
// })

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// })
// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// })

form.addEventListener('click',function(e){
    console.log('form');
   
},true)
// true dersek dıştan içe doğru
card.addEventListener('click',function(e){
    console.log('card');
  
},true)
container.addEventListener('click',function(e){
    console.log('container');
    // e.stopPropagation();
},true)
// Ötrue dedıkten sonra  e.stopPropagation(); kulklanırsak ısler bıraz karısıyor
