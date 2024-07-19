console.log("Carrito de compras..")
//Template String:
//Alternativa a la concatenacion
//Permite incrustar un valor dentro de un String
const nombreProducto = String("Lenovo V4")
console.log(` El producto es: ${ nombreProducto}`)

const precioProducto = 23 ;
const precioProductoStr ="23";

console.log(precioProducto);
console.log(precioProductoStr);

console.log(precioProducto === precioProductoStr);

const producto1 = {
    nombre : "Lenovo Thinkpad",
    color : 'green',
    modelo : 'IU643',
    descripcion : 'Laptop para trabajar liviano',
    precio : 23400000.89,
    getModelo : function(){
            console.log(this.modelo)
    }
}

producto1.imagen = "imagen.jpg"
console.log(producto1)

//invocar metodo getModelo:
producto1.getModelo();

//sin desestructuracion 
nombresito = producto1.nombre;
console.log(nombresito)

//con desestructuracion
const { descripcion, precio } = producto1;
console.log(descripcion, precio)

//Object Constructor:
const producto = function( nombre , color, precio ){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

//2 instancias de producto
const p1 = new producto("Lapiz HB Berol","Azul",5000);
console.log(p1);

//Operador spread

const medidas = {
    "peso" : "50kg",
    "altura" : "1m",
    "largo" : "50cm"

}
const nuevoProducto = { ...producto1, ...medidas };
console.log(nuevoProducto);