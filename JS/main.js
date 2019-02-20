const Address = require('./address.js');
const TokenContract = require('./token.js');

/**
* Crea una Address en nuestro sistema para Rick
* Genera las claves privada y publica de la direccion
* El balance de enZinium de su direccion es cero
* El simbolo del enZinium es EZI
*/
const rick = new Address();

/**
* Visualiza la direccion publica de Rick y su balance
* 
* Utiliza el metodo hashCode() de PublicKey para 
* mostrar la PublicKey en consola 
*/
console.log("\n" + "Address de Rick" + "\n" + "===============");
rick.info();

/**
* Creamos una Address en nuestro sistema para Morty
* y otra para Jen y visualizamos su direccion publica
* y balance
*/

const morty = new Address();
const jen = new Address();

console.log("\n" + "Address de Morty" + "\n" + "===============");
morty.info();
console.log("\n" + "Address de Jen" + "\n" + "===============");
jen.info();

