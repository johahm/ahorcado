// var canvas = document.getElementById('ahorcado');
// var ctx = canvas.getContext('2d');

let canvas = document.getElementById('ahorcado');
let ctx = canvas.getContext('2d');

function poste() {
    //   FIGURA DEL POSTE
    //   1-distancia_Horizontal  2-distancia_vertical  3-el ancho  4-la altura
    ctx.beginPath();
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.fillRect(-135, 363, 200, 40); // base del poste horizontal      
    ctx.fillRect(25, 25, 12, 350); // barra vertical o poste
    ctx.fillRect(25, 25, 200, 12); // barra horizontal
    ctx.fillRect(220, 25, 12, 50); // barra vertical de la cabeza
    ctx.fill();
    ctx.stroke();
}

// FIGURA DEL POSTE - FIN CODIGO


// CABEZA INICIO
function cabeza() {
    //       x    y   R   Ai    Af
    ctx.arc(225, 105, 30, 0, 2 * Math.PI);
    ctx.lineWidth = 5; // grosor del borde
    ctx.strokeStyle = "rgb(255,0,0)"; // color del vorde
    ctx.fillStyle = "black"; // Color interior
    /*ctx.arc(220,122,10,0, Math.PI);*/
    ctx.fill();
    ctx.stroke();
    //ctx.closePath();

    ctx.strokeStyle="rgb(255,0,0)";
    ctx.beginPath();
    ctx.arc(225,125,10,0,Math.PI,true);
    ctx.stroke();

    // Ojo izquierdo
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(215, 100, 5, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();

    // Ojo derecho
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(235, 100, 5, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();
}

// CABEZA FINAL CODIGO


// Pecho 1
function pecho() {
    ctx.beginPath();
    ctx.moveTo(225, 135);
    ctx.lineTo(225, 160);
    ctx.stroke();
}


// Brazo Izquierdo
function brazo_izq() {
    ctx.beginPath();
    ctx.moveTo(225, 135);
    ctx.lineTo(170, 190);
    ctx.stroke();
}

// Brazo Derecho
function brazo_der() {
    ctx.beginPath();
    ctx.moveTo(225, 135);
    // Orientacion    L
    ctx.lineTo(280, 188);
    ctx.stroke();
}

// Pecho 2
function tronco() {
    ctx.beginPath();
    ctx.moveTo(225, 200);
    ctx.lineTo(225, 160);
    ctx.stroke();
}

// Pierna Izquierda
function pierna_izq() {
    ctx.beginPath();
    ctx.moveTo(225, 200);
    ctx.lineTo(170, 270);
    ctx.stroke();
}

// Pierna Derecha
function pierna_der() {
    ctx.beginPath();
    ctx.moveTo(225, 200);
    ctx.lineTo(280, 270);
    ctx.stroke();
}

function limpiar() {
    ctx.clearRect(0, 0, 400, 400);
}

exports = { poste, cabeza, pecho, brazo_izq, brazo_der, tronco, pierna_izq, pierna_der, limpiar };