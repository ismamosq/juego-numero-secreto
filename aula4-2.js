let numeroSecreto = 0;
let intentos = 0; 
let listaNumeroSorteados = [];  //Creamos el array o lista de numeros sorteados, nos vamos a la función de mathrandom para hilar que no se repitan los numeros generados secretos
let numeroMaximo = 10; // vamos puliendo el código, en este caso para poder alternar en rango de números el juego.

console.log(intentos);
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return; 
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto) {                 /* aqui se usa la condición con el template string con los signos ${(valor == 1) ? '' : ''}*/ 
        asignarTextoElemento ('p', `Acertaste en ${intentos} ${(intentos ==1) ? 'vez':'veces'}`);   /* se usa template string en los paramétros para mostrar el número de intentos*/
        document.getElementById('reiniciar').removeAttribute('disabled'); // ACTIVAR BOTÓN DE NUEVO JUEGO
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
// Función para limpiar la caja de input
function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';  
}


// Recursividad solucionada******
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //Cambiamos el numero 10 por la variable numeroMaximo

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    // Si ya sorteamos todos los números
    if (listaNumeroSorteados.length === numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sortearón todos los números posibles');
    } else {         // un If anidado, importante colocar el TAB para recorrer la linea de codigo de acuerdo al anidamiento dentro de las llaves
        if (listaNumeroSorteados.includes(numeroGenerado)){     // Si el numero generado esta incluido en la lista
            return generarNumeroSecreto ();  
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secretazo');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); // Cambiamos el 10 por la variable global de numeroMaximo con template strings
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;    
}

// NUEVA FUNCIÓN PARA REINICIAR EL JUEGO
function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje  de intervalo de numeros
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
    
}

condicionesIniciales();
/*
asignarTextoElemento('h1', 'Juego del número secretazo');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); 

Se reemplaza por la función mensajesIniciales afuera en global*/