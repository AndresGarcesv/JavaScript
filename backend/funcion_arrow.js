//Sintaxis: Funcion Arrow Flecha
//Reglas:
// 1. si el bloque de codigo de la funcion flecha solo tiene una linea, no hace falta ponerle los corchetes
// 2. si la funcion flecha tiene un solo parametro se puede omitir el parentesis de los parametros
// 3. si el bloque de codigo de la funcion flecha solo tiene una linea debe retormnar un valor, es posible omitir el return,pero solo si se aplica la regla 1
// 4. 
const saludo = nombre =>
    `Hola ${nombre} desde una funcion flecha`


//invocar a la funcion flecha
console.log( saludo("Andres"));