//Dizi ve Nesnelerin Döngü Kullanımı


var dizi=['Mercedes','BMW','Toyota'];
console.log(dizi);
// Array 

for(var i=0; i<dizi.length;i++)
{
    console.log(dizi[i]);
}


//for in

for(let i in dizi)
{
    console.log(`İndex ${i} , deger ${dizi[i]}`);
}

//foreach

dizi.forEach(function(item){
    // 'dizi' isimli arrayı sırala ve her bır elemanı item olarak döndür
    console.log(item);
    
});


// Object

let people=[
    {firstname:'Seda' , Lastname:'Akkoyun' , Age:25},
    {firstname:'Neşe' , Lastname:'Altıntaş' , Age:26},
    {firstname:'Abdullah' , Lastname:'Karaboğa' , Age:30},
]


//for

for(let i=0; i<people.length;i++)
{
    console.log(people[i].firstname);
}

//forin



for(let i in people)
{
    console.log(`İndex ${i} , deger ${people[i].firstname}`);
}

//foreach

people.forEach(function(item){
console.log(item);
});

//map

let val=people.map(function (item){
    return item.firstname+' '+item.Lastname;
})
// Map diziye donusturme gorevını gorur
//retrn ıle gerı dondurdugumuz eleman her bır dızı değeridir

let number=[3,5,8,6];

let num=number.map(function(i){
    // karesini alarak geri değer gönderiyor
    return i*i;
});
console.log(num);

console.log(val);