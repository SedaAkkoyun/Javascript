//Keyboard Events

const input=document.querySelector('#txtTaskName');
const form=document.querySelector('form');
const select=document.querySelector('#select');
// input.addEventListener('keydown',EventHandler);
// // Tuşa bastığımız an calısır
// input.addEventListener('keyup',EventHandler)
// // Tuştab elimizi çektiğimiz an
// input.addEventListener('keypress',EventHandler)
// // basıldıgı an
// input.addEventListener('focus',EventHandler)
// // textbarın ıcıne gırıldıgı an
// input.addEventListener('blur',EventHandler)
// // textbarın ıcınden cıkıldıgı an
// input.addEventListener('cut',EventHandler);
// Textbarın ıcerısınden metın kesildiğinde
input.addEventListener('copy',EventHandler);
input.addEventListener('paste',EventHandler);
form.addEventListener('submit',EventHandler);
// İlgili butonun tıpını submıt yapmazsak calısmaz tyoe='submıt'
input.addEventListener('select',EventHandler);
// yazınınn bır kısmı secıldıgınde
self.addEventListener('change',EventHandler);


function EventHandler(e){
console.log('Key Type: '+e.type);
console.log(e.keyCode);
// karakterlerın sayısal karsılıgı
console.log(e.target.value);
// Keypress ve keydown da çalışmaz cunku bu ıkı event bastıgı anda calısır karekterı okumaz
// Hangi harfe bastıgını ceker
// e.target.style.background='yellow';
// // focus oldugunda arka plan rengı degısti
e.preventDefault();
// submıt de sayfa yenılenmesın
}