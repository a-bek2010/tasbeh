let count = 0

const natija = document.querySelector('.natija')

console.log(natija);

function qoshish() {
    count++
    console.log(count);
    natija.innerHTML = count;
}

function tenglash() {
    count = 0
    console.log(count);
    natija.innerHTML = count;
}

function ayrish() {
    count--
    console.log(count);
    natija.innerHTML = count;
}

function oq(){
    document.body.style.background = 'white'
}

function kok(){
    document.body.style.background = 'blue'
}

function qizil(){
    document.body.style.background = 'red'
}

function yawil(){
    document.body.style.background = 'rgb(3, 251, 3)'
}