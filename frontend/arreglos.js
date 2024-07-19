//definir un arreglo de 
//nombres de productos
const nombres = ["Lapiz HB","Resaltador","Borrador de nata"];
//agregar elementos al arreglo:
nombres[3] = "Micropuntas"
console.table(nombres);
console.log(nombres[1])
//agregar elemento al final:
nombres.push("Corrector");

//agregar elementos al principio:
nombres.unshift("borrador miga de pan")

//eliminar elementos de un arreglo
delete nombres[3]

//eliminar elemento del final
nombres.pop();


//elimiar elementos del principio
nombres.shift()
console.table(nombres);

for(let i=0 ; i<nombres.length ; i=i+1){
        console.log(nombres[i])
}

//Operador spread con arreglos

const nombres2 = [
    "transportador",
    "Regla de 30cm",
]
const productos =[ ...nombres,nombres2]
console.table(productos)