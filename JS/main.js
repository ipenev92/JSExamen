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

console.log("\n" + "Contrato de los Ricknillos" + "\n" + "==========================");
ricknillos.info();

/**
* El contrato TokenContract contiene una tabla de balances 
* de token por propietario:
* mapping(propietario => numero de unidades que posee)
* Permite al contrato llevar el seguimiento de quien
* posee las entradas.
* Cada transferencia de entradas entre propietarios es 
* una deducción en un balance y una adicion en el otro.
* 
* Crea una tabla "balances" que mapee cada propietario 
* (su Public Key) al numero de tokens que posee.
* Añade a Rick con sus 100 entradas.
* Asegurate de que si el propietario (su Public Key) 
* ya existe en la tabla, sus unidades no se actualicen.
* 
* addOwner()
* añade el propietario inicial de todos los tokens de este contrato
* @param PublicKey del propietario
* @param cantidad de tokens que posee
*/

ricknillos.addOwner(rick.pk, ricknillos.totalSupply);
ricknillos.addOwner(morty.pk, 0);
console.log(ricknillos.balances);