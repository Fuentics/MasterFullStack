// let nombre; -> Si la dejo declarada sin ningún valor queda undefined, es un valor no controlado que no existe
// let nombre = null; -> es una mala práctica también porque estoy dejando sin saber de qué tipo sería mi variable
// let nombre = "";    // Así se declara como String y es una buena práctica
// console.log(`El valor de nombre antes del prompt: ${nombre}.`);     // alt+96 backtic. Si le llego a colocar un salgo de linea, lo respeta
// nombre =  prompt("Ingresa tu nombre");
// console.log(`El nombre ingresado es: ${nombre}.`);

if ("123455" === prompt('pon tu contraseña') && 18 <= parseInt(prompt("dame tu edad"))){        //parseInt convierte el texto ingresado con el prompt en número entero
    alert("Bienvenido, ya estamos adentro.")
} else {
    console.error("ALERTA: MENOR DE EDAD quiere robar la cuenta !!!")
}

if (20 <= prompt('Cuánto traes?') || 18 <= parseInt(prompt("dame tu edad"))){        //parseInt convierte el texto ingresado con el prompt en número entero
    alert("Bienvenido, ya estamos adentro.")
} else {
    document.write('<h1 style="color:red;">ALERTA: MENOR DE EDAD quiere colarse al bar!!!</h1>')
    console.error("ALERTA: MENOR DE EDAD quiere colarse al bar!!!")
}