var models=[
    {
            name:'BMW 418d',
            image:'img/bmw.jpg',
            link:'sahibinden.com/bmw-4-serisi-418d-gran-coupe'
    },
    {
        name:'Mazda CX-3',
        image:'img/mazda.jpg',
        link:'sahibinden.com/bmw-4-serisi-418d-gran-coupe'
},
{
    name:'Volvo S60',
    image:'img/volvo.jpg',
    link:'sahibinden.com/bmw-4-serisi-418d-gran-coupe'
},
{
    name:'Skoda Supero',
    image:'img/skoda.jpg',
    link:'sahibinden.com/bmw-4-serisi-418d-gran-coupe'}
]
var index=2;
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
document.querySelector('.card-title').textContent = models[index].name;

document.querySelector('.card-link').setAttribute('href',models[index].link)
