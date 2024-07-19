//definir un arreglo de
//nombres de producto
const nombres = ["Lapiz HB", "Resaltador", "Borrador de nata", 8876454, true, null, undefined ];
//agregar elementos al arreglo:
nombres[3] = "Micropunta"
console.table(nombres);
console.log(nombres[1])
//arreglar elemento al final:
nombres.push("Corrector");

//agregar elemnto al principio
nombres.unshift("Borrador miga de pan")

//eliminar elementos de un arreglo
delete nombres[3];

//eliminar elementos de final:
nombres.pop();


//eliminar elementos del principio:
nombres.shift()

console.table(nombres);

for( let i=0 ; i<nombres.length ; i=i+1 ){
    console.log(nombres[i])

}

//operador Spread con arreglos:
const nombres2 = [
    "Transportador",
    "Regla 30cm"
]

let Productos = [...nombres, ...nombres2]
const elemento = "compas"
Productos = [...Productos, elemento] 
const transportador = "transportador"
Productos = [...Productos, transportador]
console.table(Productos)