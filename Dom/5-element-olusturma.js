//Creating Element

//create element
const li=document.createElement('li');
//li elementi oluşturuldu <li></li>;

//ad class
li.className='list-group-item list-group-item-secondary';

// attribute

li.setAttribute('title','new item');
li.setAttribute('data-id','5');
// setAttribute('attribute tipi','attribute değeri')

//text node
const text=document.createTextNode('new item');
li.appendChild(text);
// başka bir yazım şekli
// li.appendChild(document.createTextNode('new item'));

//a'yı ekle
const a=document.createElement('a');
a.setAttribute('href','#');
a.className='fdelete-item float-right';
a.innerHTML='<i class="fas fa-times"></i>'
// içerisine iyi ekleyebılmemız ıcın html yazmamız gereklı
li.appendChild(a);
// Li'nin cocugu olarak eklendı

// Şimdiye kadar yazdığımız kodar bir li ve linin içerisine a olusturdu sımdı ulnın içerisine liyi eklememız gereklı
const ul=document.querySelector('.list-group').appendChild(li);

console.log(li);