// İf else

const Firstname='Seda';
const age='18';
const isStudent=true;
const scool='universty';


if(Firstname==='Seda')
{
    // 3 === türüde kontrol eder
    console.log('Merhaba Seda')
}

if(isStudent===true)
{
    console.log(`${Firstname} öğrencisiniz`);
}
else
{
    console.log(`Öğrenci değilsiniz`);
}

if(age>=18){

    if(scool==='universty')
    {
        console.log('Ehliyet alabılırsınız')
    }
    else{
       console.log( 'Öğrenci işlerine başvurunuz');
    }
console.log('blabla')

}
else{
    console.log('Ehliyet alamazsınız');
}

var id='s';

if(typeof id !=='undefined')
// İd değişlkeni tanımlımı dıye kontrol eder
{
    console.log(` id bulundu`)
}
else
{
    console.log(`id bulunamadı`);
}





// Uygulama
// Aracı alma yılına gore servıs yılını 

var start=new Date('03/24/2020');
start.getHours(0,0,0,0);


var zaman=Date.now() - start.getTime()
var year=Math.floor((zaman/(1000*60*60*24))/360);
console.log(year);
// Yukarıdaki formulun uzun hali
// var saniye=zaman/1000;
// console.log('saniye:'+saniye);

// var dakika=saniye/60;
// console.log('dakika:'+dakika);

// var saat=dakika/60;
// console.log('saat:'+saniye);

// var gun=saat/24;
// console.log('gun: '+gun);
// var year=gun/360;
// year=Math.floor(year);
// console.log(year.toFixed(0));

switch(year){
    case 0:
        console.log('bakım tarıhınız gelmemıs');
        break;
    case 1:
        console.log(`${year}'ıncı bakım`);
        break;
        case 2:
            console.log(`${year}'ıncı bakım`);
            break;
            case 3:
                console.log(`${year}'ıncı bakım`);
                break;
default:
    console.log('bakımız gecikmiş')    ;

}

