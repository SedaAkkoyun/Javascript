//Mouse Event

//Click


var btn=document.querySelector('#btnDeleteAll');
var ul=document.querySelector('#task-list');


// btn.addEventListener('click',btnclick);
// ul.addEventListener('click',btnclick);
// function btnclick (e){
//     console.log(`events type= ${e.type}`);
//     e.preventDefault();

// }
// double click

// btn.addEventListener('dblclick',doubleclick);
// ul.addEventListener('dblclick',doubleclick);


// Mause down
// btn.addEventListener('mousedown',mDown);
// ul.addEventListener('mousedown',mDown);
// function mDown (e){
//     console.log(`events type= ${e.type}`);
//    }


//    //mouseup/mouse down

//    btn.addEventListener('mousedown',EventHandler);
// //    Tıklaıdımız an mouse down 
//    btn.addEventListener('mouseup',EventHandler);
// //    Tıklamayı bıraktıgımız an mause up olayı gerceklesir
   


//mouse enter mause leave

// ul.addEventListener('mouseenter',EventHandler);
// // Üzerine geldiğin an
// ul.addEventListener('mouseleave',EventHandler);
// // Üzerinden çıktıgın an

//Mouse over mouse out
// ul.addEventListener('mouseover',EventHandler);
// // Üzerine geldiğin an ancak içerisinde baska bır elemente gectıgınde out olur
// ul.addEventListener('mouseout',EventHandler);    
// // Üzerinden cıktıgın an

//MouseMove

ul.addEventListener('mousemove',EventHandler);
// Üzerinde gezdiğin her an tetıklenir
var h5=document.querySelector('.card-header');

function EventHandler (e){
    h5.textContent=`Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`;
    // Mouse hareket ettıkce tetıklendı ve h5in ıcerısınde mousenın x ve y degerlerını yazdı
    console.log(`events type= ${e.type}`);
   }