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


//verifica que Rick no se actualiza una vez que ya existe en el balance
//ricknillos.addOwner(rick.pk, 500);
//console.log(ricknillos.balances);

/**
* Consulta los balances
* 
* numOwners()
* @return numero de propietarios registrados en la tabla balances
* 
* balanceOf()
* @param PublicKey del propietario
* @return cantidad de tokens que posee
* Dada una direccion, devuelve su balance de tokens. Si no existe 
* el propietario, devuelve cero.
*/

console.log("\n" + "Consulta de balances" + "\n" + "====================")
ricknillos.numOwners();
ricknillos.balanceOf(rick.pk);
ricknillos.balanceOf(morty.pk);

/**
* Morty quiere comprarle 2 entradas a Rick
* 
* transfer()
* @param PublicKey del destinatario
* @param cantidad de tokens
* Dada una direccion y una cantidad, transfiere esa cantidad
* de tokens a esa direccion, desde el balance de la direccion
* propietaria del contrato (la de Rick en este caso).
* 
* LLama a la funcion require() para comprobar si el propietario 
* del contrato dispone de suficientes tokens. Si no hay suficientes,
* falla silenciosamente (no hace nada) y no modifica los balances.
* 
* require()
* @param una condicion que ha de verificarse (ser cierta)
* Lanza una EXCEPCION si no se cumple la condicion
*/

console.log("\n" + "Transferencia de entradas" + "\n" + "=========================");
ricknillos.transfer(morty.pk, 2);
ricknillos.balanceOf(rick.pk);
ricknillos.balanceOf(morty.pk);
console.log(ricknillos.balances);

// verifica que require falla si no hay tokens suficientes en el balance de Rick
ricknillos.transfer(morty.pk, 300);

// Morty vuelve a comprar un par de entradas mas
ricknillos.transfer(morty.pk, 2);
console.log("2 entradas mas para Morty:")
ricknillos.balanceOf(morty.pk)

/**
* A veces, hay reventa ;)
* 
* Morty le vende 1 entrada a Jen.
* 
* Dado un remitente, un destinatario, y una cantidad, 
* se transfieren tokens de una direccion a la otra.
*   
* transfer()
* @param sender PK
* @param recipient PK
* @param cantidad de tokens
*/

console.log("\n" + "Reventa de entradas" + "\n" + "===================");
ricknillos.addOwner(jen.pk, 0)
ricknillos.transferFrom(morty.pk, jen.pk, 1);
ricknillos.balanceOf(morty.pk);
ricknillos.balanceOf(jen.pk);

/**
* Llega el dia del concierto y Rick quiere
* controlar el acceso a la sala de conciertos.
* Muestra una lista de compradores con el número de entradas
* que han adquirido (excluyendo a Rick).
* 
* owners()
* @return muestra en consola la PublicKey de los compradores
*         y el numero de tokens que han adquirido
*/

console.log("\n" + "Lista de compradores" + "\n" + "====================");
ricknillos.owners();

/**
* Calcula el numero de asistentes al concierto (excluyendo a Rick),
* es decir, el numero de entradas vendidas.
* 
* totalTokensSold()
* @return numero de tokens (entradas) vendidos
*/
ricknillos.totalTokensSold();