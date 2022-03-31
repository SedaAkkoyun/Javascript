//Removing Element

const tasklist=document.querySelector('#task-list');
// tasklist.remove();
// tasklistin içerisindekileri sildi. 
// tasklist.childNodes[1].remove();//childnodes da 1 element demekti elementi sildi
tasklist.children[3].remove();
// childrem alt elemandı 3. elemanını sildi

// bir başka yazım şekli
tasklist.removeChild(tasklist.children[3]);
console.log(tasklist);