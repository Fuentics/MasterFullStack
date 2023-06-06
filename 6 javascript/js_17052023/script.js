console.log("Hola mundo!");             //es un MÉTODO que escribe en la consola del navegador. console es un elemento y log un método

// Inserción de código -> DOM (el documento de html, la página)
document.write("Hola mundo x2!");       //es un MÉTODO que escribe en la pantalla (document) del navegador
document.write(`<h1 style='color: red;'>Bienvenidos JS</h1>`);


// alert("Hola mundo x3!");                //es una FUNCIÓN que nos arroja mensaje (un popup), como una ventana emergente

// String - cadena de texto -> "palabra o más palabra"

// VAMOS A OCUPAR let O const
// let -> cuando queramos actualizar el valor de algún otro momento
// const -> cuando queramos mantener la estructura base de mi variable intacta

var mensaje = "Espero que les esté gustando JS"     // var para acceder desde cualquier lugar del código
const PI = 3.1416
// PI = 3.14    -->> Esto no se puede porque mi variable es constante
// at script.js:19:4 -->> Error en la línea 19 en el símbolo o letra 4 de la misma línea
mensaje = null
mensaje = undefined
document.write(mensaje);
console.log(mensaje);
console.log
