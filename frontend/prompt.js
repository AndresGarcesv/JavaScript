/*alert("hola 2826502")*/
/*let nombre = prompt("Por favor ingrese su nombre")*/
/*document.querySelector("div").innerHTML = nombre*/
const nombreProducto = new String("Lenovo V4")
console.log(nombreProducto)

const precioProducto = 23 ;
const precioProductoStr ="23";

console.log(precioProducto);
console.log(precioProductoStr);

console.log(precioProducto === precioProductoStr);

//Objeto producto:
//Objeto literal:
const producto1 = {
        nombre : "Lenovo Thinkpad",
        color : 'green',
        modelo : 'IU643',
        descripcion : 'Laptop para trabajar liviano',
        precio : 23400000.89
}
//acceder a los atributos del objeto
console.log(producto1["modelo"]);

//Object Constructor:
const producto = function( nombre , color, precio ){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

//2 instancias de producto
const p1 = new producto("Lapiz HB Berol","Azul",5000);
console.log(p1);

