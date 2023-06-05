/* CLASE 01 */
/* TIPOS DE VARIABLES */

// var ----> variable obsoleta de la versión ES5. Ya no se usa más.

// Let ----> variable de tipo STRING cuyo valor puede cambiar. Ej:
let nombre = 'Matías'; 
nombre = 'Gabriel';

// Const ----> variables cuyos datos no pueden cambiar. Tiran error */
// No podes camabiar el valor de 'edad'. Ej: edad = 30 (ERROR).
const edad = 29;

// booleano
const variable = true;
const variable2 = false;

// operaciones matemáticas
const numero1 = 10;
const numero2 = 50;
const resultado = numero1 + numero2;
const resultado2 = numero2 - numero1;
console.log(resultado2) /* resultado = 60 / resultado2 = 40 */

// concatenación
/* let nombre = 'Gabriel' */
const apellido = 'Charles';
const espacio = " ";
const concatenar = nombre + " " + apellido;
console.log(concatenar); /* Gabriel Charles */
/* IMPORTANTE ---> también podemos agregar el espacio después de la variable 'nombre'.
Ej ---> let nombre = 'Gabriel ' */

/* PROMT, CONSOLA Y ALERT */

// console.log ----> permite ver la variable indicada entre paréntesis.
// La consola siempre muestra el último dato asignado. Ej: Gabriel
console.log(nombre) /* linea 8 aparece (nombre = 'Gabriel') */

// Alert ----> sentencia que muestra un mensaje al usuario.
alert('Aguante Booooocaaaa!!');

// Prompt ----> sentencia que muestra un cuadro de dialogo para que llene el usuario.
let animeFavorito = prompt('Ingrese su anime favorito');
let nombreDePersonaje = prompt ('Ingrese el nombre de su personaje');
let apellidoDePersonaje = prompt ('Ingrese el apellido de su personaje');
let concatenar2 = 'Tu personaje es ' + nombreDePersonaje + ' ' + apellidoDePersonaje;
console.log(concatenar2);
/* IMPORTANTE ---> El prompt siempre devuelve un STRING. Ej: si quiero sumar 22 + 3, no
va a hacer la suma, sino que va a unir ambos datos, es decir que los va a concatenar. 
Entonces el resultado será 223. En estos casos lo que se debe hacer es PARSEAR */

/* ParseInt */
//  Para convertir un strig en un dato numérico, tenemos que parsear. Ej:
let numero = parseInt (prompt('Ingrese numero'));
let numero3 = parseInt (prompt('Ingrese numero3'));

console.log(numero + numero3);
