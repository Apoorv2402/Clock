setInterval(setClock,1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const btn = document.querySelector('#btn');
const body = document.body;
const mode = document.querySelector('#mode-type');
body.className = "body2";


function setClock(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds()/60;
    const minutesRatio = (secondRatio + currentDate.getMinutes())/60;
    const hoursRatio = (minutesRatio + currentDate.getHours())/12;
    setRotation(secondHand,secondRatio)  
    setRotation(minuteHand,minutesRatio)  
    setRotation(hourHand,hoursRatio)  
}
function setRotation(element, rotationRatio){
    element.style.setProperty("--rotation",rotationRatio*360)
}
setClock()

btn.addEventListener('click', changeBg);

function changeBg(e){
    let txt = 'Light Mode';
    let txt2 = 'Gradient Mode';
    
    console.log('btn running');
    if (body.className == 'body1'){

        body.className = "body2";
        btn.innerHTML = txt;
    }else{
        btn.innerHTML = txt2;

        body.className = 'body1';
    }
}

const ul = document.querySelector('#list');
let quer = localStorage.getItem('cum');

li = `<li>${quer}</li>`;






