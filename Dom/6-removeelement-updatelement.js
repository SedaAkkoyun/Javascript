//Removing Element

const tasklist=document.querySelector('#task-list');
// tasklist.remove();
// tasklistin içerisindekileri sildi. 
// tasklist.childNodes[1].remove();//childnodes da 1 element demekti elementi sildi
tasklist.children[3].remove();
// childrem alt elemandı 3. elemanını sildi

// bir başka yazım şekli
// tasklist.removeChild(tasklist.children[3]);



//Removing Attributes

// tasklist.children[0].removeAttribute('class');
// İlk elemanın clasını sıldı

// for(let i=0;i<tasklist.children.length;i++)
// {
//     tasklist.children[i].removeAttribute('class');
//     // tüm classlar silindi
// }
// console.log(tasklist);




//Replacing element

const cardHeader=document.querySelector('.card-header');

//create element
const h2=document.createElement('h2');
h2.setAttribute('class','card-header');
var text=document.createTextNode('header');
h2.appendChild(text);
const parent=document.querySelector('.card');
parent.replaceChild(h2,cardHeader);
//parentini yani kapsayıcı divini seçtik,
// replaceChild dedik yani çocugu düzenle ('ne ile değiştirileceği','hangi çocugun değiştirileceği');

console.log(cardHeader);
