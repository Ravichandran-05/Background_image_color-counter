let b1 = document.getElementById('btn1');
let b2 = document.getElementById('btn2');
let b3 = document.getElementById('btn3');
let b4 = document.getElementById('btn4');
b1.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('Hill Roadd.jpg')";
})

b2.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('cityy.jpg')";
})

b3.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('forest roadd.jpg')";
})

b4.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('riverr.jpg')";
})

function color10() {
    document.getElementById("car").style.color = "blue";
}

function color11() {
    document.getElementById("car").style.color = " rgb(138, 0, 0)";
}

function color12() {
    document.getElementById("car").style.color = "rgb(255, 82, 1)";
}

function color13() {
    document.getElementById("car").style.color = "rgb(163, 12, 151)";
}

function color20() {
    document.getElementById("van").style.color = "blue";
}

function color21() {
    document.getElementById("van").style.color = " rgb(138, 0, 0)";
}

function color22() {
    document.getElementById("van").style.color = "rgb(255, 82, 1)";
}

function color23() {
    document.getElementById("van").style.color = "rgb(163, 12, 151)";
}

function color30() {
    document.getElementById("truck").style.color = "blue";
}

function color31() {
    document.getElementById("truck").style.color = " rgb(138, 0, 0)";
}

function color32() {
    document.getElementById("truck").style.color = "rgb(255, 82, 1)";
}

function color33() {
    document.getElementById("truck").style.color = "rgb(163, 12, 151)";
}

function color40() {
    document.getElementById("pickup").style.color = "blue";
}

function color41() {
    document.getElementById("pickup").style.color = " rgb(138, 0, 0)";
}

function color42() {
    document.getElementById("pickup").style.color = "rgb(255, 82, 1)";
}

function color43() {
    document.getElementById("pickup").style.color = "rgb(163, 12, 151)";
}
let n = document.getElementById('num');
let sum = 0;

function plus() {
    sum += 1;
    n.innerHTML = sum;
}

function minus() {
    sum -= 1;
    n.innerHTML = sum;
}
