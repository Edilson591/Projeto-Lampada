const lampada = document.getElementById('lamp')
const ligar = document.getElementById('turnOn')
const desligar = document.getElementById('turnOff')


function brokenOn(){
    return lampada.src.indexOf('quebrada') > -1
}

function lampOn (){
    if(!brokenOn()){
    return lampada.src = './img/ligada.jpg'
    }
}

function lampOff () {
    if(!brokenOn()){
    return lampada.src = './img/desligada.jpg'
    }
}

function lampbroken () {
    return lampada.src = './img/quebrada.jpg'
}










lampada.addEventListener ( 'mouseover', lampOn );
lampada.addEventListener ( 'mouseleave', lampOff );
ligar.addEventListener('click' , lampOn)
desligar.addEventListener('click', lampOff)
lampada.addEventListener('dblclick', lampbroken)
