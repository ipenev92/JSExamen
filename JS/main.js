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

/**
* Crea una contrato inteligente de tipo TokenContract 
* en nuestro sistema para que Rick pueda vender 100 
* entradas para el concierto de "los Ricknillos". 
*  
* El nombre del token (las entradas) es Ricknillos.
* Su simbolo es RNiLL.
* 
* El propietario del contrato es Rick. Asigna su Public Key
* a la propiedad owner del contrato mediante el contructor
* de TokenContract.
* 
* En la clase TokenContract programa las funciones a utilizar en 
* el metodo toString():
* 
* name() 
* @return devuelve el nombre del token de forma human-readable (p.e., “US Dollars”).
* 
* symbol()
* @return el nombre del símbolo del token de forma human-readable (p.e., “USD”).
* 
* totalSupply()
* @return el total de unidades de este token que actualmente existen.
*/

const ricknillos = new TokenContract(rick);
ricknillos.setName("Ricknillos");
ricknillos.setSymbol("RNiLL");
ricknillos.setTotalSupply(100);