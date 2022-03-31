//Traversing the Dom

let val;
let list=document.querySelector('.list-group');
val=list;
val=list.childNodes;//textnode ları ıle beraber verır her element atasında satır atladıgında textnode eklenır
// val=list.children;
// HtmlCollection dondurur textnodeları goremıyorsun
val=list.childNodes[0];
// Childnodes ilk elemanı ne
val=list.childNodes[0].nodeName;
val=list.childNodes[0].nodeType;//text
// dönen her sayının bır degerı var 1 ise element 2 ise attribute 3 ise text node 8 ise comment gibi
val=list.childNodes[1].nodeType; //element
val=list.children[2].textContent='Deneme';
// 3.çocugun adı degıstırıldı
val=list.children[3].children;
// 3.cocugun altındaki çocuk yani li'nin altındaki a'yı seçer
val=list.firstChild;
// İlk çocuk textnodedur
val=list.firstElementChild;
// ilk elementi seçtiği için li'dir.
val=list.lastElementChild;
val=list.lastChild;
val=list.childElementCount;
// Listedeki toplam element sayısı
// list=document.querySelector('.list-group-item');
val=list.parentNode;
// bir üst nodu
val=list.parentElement;
//listgroup sınıfının bır ust elementını getırır
val=list.parentElement.parentElement;
// üstün üstü
val=list.children[0].nextSibling;
// ilk liden sonraki gelen ilk siblibg
val=list.children[0].nextElementSibling;
// İlk liden sonraki gelen ilk element
val=list.children[1].previousSibling;
val=list.children[1].previousElementSibling;
// 2.liden önceki sibling ve element

for(let i=0;i<list.children.length;i++)
{
//  Tüm childrenları yazdık
    console.log(list.children[i]);
}
for(let i=0;i<list.childNodes.length;i++)
{
    // Textnodelarla bırlıkte yazdık
    console.log(list.childNodes[i]);
}


// console.log(val);