//Object


let val;
 let person={
    //  Objelerin içerisinde birden fazla veri tutabılırız
     firstname:'seda',
    //  sonuna noktalı virgül değil virgün koyuyorsun dıkkat et
     lastname:'Akkoyun',
     age:25,
     hobbies:['music','game'],
    //  İçerisinde dizide tanımlayabılırsın
     adress:{
        //  Obje içerisinde objede tanımlayabılırsı
         city:'İstanbul',
         country:'Türkiye',

     },
    getbrithday: function(){
        return 2022-this.age;
        // İçerisinde fonksiyonda tanımlayabılırsın 
        // this bulundugu containerden veri alıyorsun
    }
 }
 console.log(person);

 val=person.firstname;
//  Obje olduğu için içerisinden veri çağırabılırsın
val=person.adress.city;
// İçerisindeki objenin verisini de çağırabılırsın
console.log(val);
val=person['firstname'];
// Buda farklı bır cagırma seklı
val=person.hobbies[1];
// dizi elemanını da cagırabılırsın
val=person.hobbies.length;
// İçerideki dizinin fonksiyonlarınıda kullabılırsın

val=person.getbrithday();
console.log(val);

let people=[

    {firstname:'seda', lastname:'Akkoyun'},
    {firstname:'Abdullah', lastname:'Karaboğa'},
// Dizi içeren people objesi
];
val=people[0].firstname;
console.log(val);
console.log(people);

for(let i=0;i<people.length;i++)
{
console.log(people[i]);
}
// İçerisindeki diziyi yazdırdık