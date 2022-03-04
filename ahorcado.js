let lista = []; // Guarda las palabras que el usuario deve adivinar
let lista_error = []; // Guarda las LETRAS que el usario a introducido fallidas, if ( lista_error.length >= 7 ) { Perdistes }
let lista_repetida = [];
let adivinar;
let caracteres = /[^a-z0-9\x20]/i;
let palabra;
let rayita = false;
let puntos = 0;


// lista.length;          -- Tamaño Array 
// lista.push("hola");   -- Agregar a la lista
// funtion numeros();

// let div = document.querySelector("#lugar"); // <div id="lugar"> </div>

// let boton = document.createElement("button"); // <button></button>

// var h = document.getElementById("lugar");

// let div = document.getElementById("lugar");

let temp = document.getElementById('input-nueva-palabra');

temp.addEventListener('keyup', function(e) {
    let keycode = e.keyCode || e.which;
    if (keycode == 13) {
        agregar();
    }
});

function agregar() {

    let temp;

    // let ingreso = document.getElementById("input-nueva-palabra").value;
    // ingreso = ingreso.replace(/,/g, "");  // quitar comas

    // Que detecte numeros.

    if (document.getElementById("input-nueva-palabra").value == "") {

        alert("No hay palabra escrita!");

    } else {

        palabra = document.getElementById("input-nueva-palabra").value;
        temp = palabra;

        if (palabra.includes(" ")) { // validar espacios en blancos
            alert("No se permite espacios, No valida!");
        } else if (!isNaN(palabra)) { // Validar Numeros
            alert("No se permite numeros, No valida!");
        } else if (temp.replace(/[^0-9]/g, "").length) { // Validar Numeros con letras

            alert("No se permite numeros, No valido!");
        } else if (caracteres.test(palabra)) { // Validar simbolos con letras o sin letras

            alert("Esta palabra contiene simbolos! No valido!");

        } else {
            // Se normaliza
            palabra = palabra.normalize('NFD').replace(/([aeiou])[\u0300-\u0308]/gi, "$1").normalize().toUpperCase();
            lista.push(palabra); // Aqui se agregan las palabras a la Lista
            // alert("Palabra agregada!");

        }

    }

    document.getElementById("input-nueva-palabra").value = "";
    document.getElementById("input-nueva-palabra").focus();
}


function iniciar() {

    if (lista.length === 0) {
        alert("No hay palabras ingresadas, no se puede iniciar el Juego.");
    } else {

        let etiqueta;

        etiqueta = document.querySelector("#iniciar-juego");
        etiqueta.style.display = "none";

        etiqueta = document.querySelector("#input-nueva-palabra");
        etiqueta.style.display = "none";

        etiqueta = document.querySelector("#nueva-palabra");
        etiqueta.style.display = "none";

        etiqueta = document.querySelector("#mostrar-lista");
        etiqueta.style.display = "none";

        etiqueta = document.querySelector("#regresar");
        etiqueta.style.display = "inline"; //muestra el boton de regreso.

        // ------------------------------------------------>

        etiqueta = document.querySelector("#btn-letra");
        etiqueta.style.display = "inline";

        etiqueta = document.querySelector("#input-letra");
        etiqueta.style.display = "block";

        etiqueta = document.querySelector("#equivocadas");
        etiqueta.style.display = "block";

        document.querySelector(".titulo").innerHTML = "SE INICIO EL JUEGO"; // Cambio el Titulo de la Pagina

        etiqueta = document.querySelector("#ahorcado");
        etiqueta.style.display = "inline";


        // Dibuja el Poste
        poste();

        let size = (lista.length) - 1; // Devuelbe el tamaño de una lista ( Cuantas palabras tiene esa lista )
        let indice = Math.round(Math.random() * size); // Math.random ( Genera numeros decimales 1.25020 )con Math.round (redondeo)
        //   0      1       2
        // alert("Este es el valor de Size: " + size);   //   hola   hola   "null"

        let elegida = lista[indice];
        adivinar = elegida.split(""); // Separo la palabra en letras [ 'h' 'o' 'l' 'a' ] y la guardo como una array, una lista.

        generar(elegida);

        document.getElementById("input-letra").value = "";
        document.getElementById("input-letra").focus();
        /*
        for (let i=0; i < elegida.length; i++){

            div.insertAdjacentHTML("afterbegin", `<button readonly=true id="${i}" class="bordes" disabled=true></button>`);
    
        }
        */

    }

}

// Funcion genera los guiones
function generar(letra) {

    let div = document.getElementById("lugar"); // <div id="lugar"> </div>

    let boton = document.createElement("button"); // <button></button>

    boton.setAttribute("readonly", true); //  <button readonly > </button>

    boton.setAttribute("disable", true); //  <button readonly disable > </button>

    boton.className = ("bordes");

    let numero_letra = 0;

    for (let i = 0; i < letra.length; i++) {

        boton.id = ("letra-" + numero_letra); //  <button readonly disable id="bordes" > </button>

        // alert("Datos de boton:" + boton);
        // insertAdjacentHTML("afterbegin", `<button readonly=true id="${boton}" class="bordes" disabled=true></button>`);

        // Inserta dentro <div id='lugar'> <boton></boton> </div>
        // div.insertAdjacentElement("afterbegin", boton);  

        div.insertAdjacentHTML("beforeend", `<button readonly=true id="${boton.id}" class="bordes" disabled=true></button>`);

        numero_letra++;

        // Inserta elementos en la parte superior del <Div id="lugar"> </Div>
        // div.insertAdjacentHTML("beforebegin", `<button readonly=true id="${boton.id}" class="bordes" disabled=true></button>`);

        // document.body.appendChild(boton);

        // app.insertAdjacentElement("beforebegin", div); // Opción 1: <div>Ejemplo</div> <div id="app">App</div>
        // <button readonly id="bordes" disabled></button>
    }

}

function probar() {

    // H O L A  = 4 LETRAS 
    // CADA VEZ QUE EL USUARIO ADIVINA UNA  i++; if ( i == 4 ? ) ==> i = 4, El usuario adivino todas las letras OK. 


    letra = document.getElementById("input-letra").value.toUpperCase(); // Toma la letra que escribo 
    temp = letra;

    if (adivinar.includes(letra)) { // IF que verifica si la letra que ingreso usuario esta contenida en la palabra Adivinar

        if (lista_repetida.includes(letra)) {

            alert("Repetida!");

        } else {
            // HACE REFERENCIA A LAS LETRAS VERDADERAS O ACERTADAS QUE SE VAN AÑADIR A LA LISTA Y MOSTRAR EN EL PROGRAMA
            lista_repetida.push(letra);
            // 0 1 2 3
            let x = adivinar.indexOf(letra); // H O L A - puntos = 4 es equivale a 4 LETRAS = " H O L A"

            for (i = 0; i < adivinar.length; i++) {

                if (adivinar[x] == adivinar[i]) {
                    document.getElementById("letra-" + i).innerHTML = adivinar[i];
                    puntos++; // Contador que si encuentra varias letras acertadas va aumentando.
                }
            }

            // Comparacion de Ganador!
            if (adivinar.length == puntos) {
                setTimeout(200);

                let etiqueta = document.querySelector(".input-letra");
                etiqueta.setAttribute("disabled", "");

                etiqueta = document.querySelector("#btn-reiniciar");
                etiqueta.style.display = "inline";

                etiqueta = document.querySelector("#btn-letra");
                etiqueta.setAttribute("disabled", "");

                etiqueta = document.querySelector("#resultado");
                etiqueta.style.display = "inline";
    
            }
        }

    } else {

        if (temp == "" || temp == " ") {

        } else {

            lista_error.push(letra); // S - 1 Si hay una sola letra, quiere decir que el usuario, se equivoco una sola vez

            if (lista_error.length == 1) {
                cabeza();
            } else if (lista_error.length == 2) {
                pecho();
            } else if (lista_error.length == 3) {
                brazo_izq();
            } else if (lista_error.length == 4) {
                brazo_der();
            } else if (lista_error.length == 5) {
                tronco();
            } else if (lista_error.length == 6) {
                pierna_izq();
            } else if (lista_error.length == 7) {
                pierna_der();

                setTimeout('perdiste()', 200); // Poner un tiempo de ejecucion 200 milesima
            }

            if (rayita) {

                let fallida = document.getElementById("error"); // <div id="lugar"> </div>
                fallida.insertAdjacentHTML("beforeend", `<span id=item>${letra}</span>&nbsp;`);
            } else {

                let fallida = document.getElementById("error"); // <div id="lugar"> </div>
                fallida.insertAdjacentHTML("beforeend", `<span id=item>${letra}</span>&nbsp;`);
            }

        }
        rayita = true;

    }
    document.getElementById("input-letra").value = "";
    document.getElementById("input-letra").focus();

}


function mostrar() {
    if (lista.length === 0) {
        alert("No hay palabras en la Lista");
    } else {
        alert(lista);
    }

}

function perdiste() {

    if (lista_error.length == 7) {

    

    /*  let etiqueta = document.querySelector("#btn-reiniciar");
        etiqueta.style.display = "block";
    
        etiqueta = document.querySelector(".input-letra");
        etiqueta.disabled = false;
    
        etiqueta = document.querySelector("#btn-letra");
        etiqueta.disabled = false;
    
        etiqueta = document.querySelector("#aviso");
        etiqueta.style.display = "inline-block";*/



            let etiqueta = document.querySelector(".input-letra");
            etiqueta.setAttribute("disabled", "");
    
            etiqueta = document.querySelector("#btn-reiniciar");
            etiqueta.style.display = "inline";
    
            etiqueta = document.querySelector("#btn-letra");
            etiqueta.disabled = true;
    
            alert("PERDISTE!...");
    }
} 



// Funcion REINICIAR - vacia la lista_error, rayita=false, fin=0, e inicia el juego nuevamente llama la funcion ' iniciar(); ' 
function reiniciar() {

    lista_error = [];
    let padre_false = document.getElementById("error"); // <div id="error"> </div>
    let padre_true = document.getElementById("lugar"); // <div id="lugar"> </div>

    while (padre_false.firstChild) {
        padre_false.removeChild(padre_false.firstChild);
    }
    while (padre_true.firstChild) {
        padre_true.removeChild(padre_true.firstChild);
    }

    rayita = false;

    puntos = 0;
    lista_repetida = [];

    let etiqueta = document.querySelector("#btn-reiniciar");
    etiqueta.style.display = "block";

    etiqueta = document.querySelector(".input-letra");
    etiqueta.disabled = false;

    etiqueta = document.querySelector("#btn-letra");
    etiqueta.disabled = false;

    etiqueta = document.querySelector("#resultado");
    etiqueta.style.display = "none";

    limpiar();

    iniciar();

}