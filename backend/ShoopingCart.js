const carrito = [
    {
        nombre : "Lenovo ThinkPad",
        descripcion : "Laptop para oficina",
        tipoProducto : "Computador portatil",
        modelo : "BG6",
        Precio :{
            minimoVenta : 3000000,
            compra : 8500
        },
        caracteristicas :{
            dimensiones :{
                alto : "2 cm",
                ancho : "50 cm",
                largo : "30 cm"
            },
            fabricacion :{
                pais : "Taiwan",
                fecha : new Date('2017-05-02')
            }
        },
        obtenerPrecioCompra : function(){
            return this.Precio.compra
        }
    },
    {
        nombre : "Audifonos Beat",
        descripcion : "Aundifono de alta fidelidad",
        tipoProducto : "Audifonos",
        modelo : "Beat 6",
        Precio :{
            minimoVenta : 1000000,
            compra : 1200000
        },
        caracteristicas :{
            dimensiones :{
                alto : "5 cm",
                ancho : "10 cm",
                largo : "25 cm"
            },
            fabricacion :{
                pais : "China",
                fecha : new Date('2017-09-015')
            }
        },
    },
    {
        nombre : "Xiaomi mi a3",
        descripcion : "Celular gama media",
        tipoProducto : "Celular",
        modelo : "xm 3",
        Precio :{
            minimoVenta : 500000,
            compra : 9000
        },
        caracteristicas :{
            dimensiones :{
                alto : "2 cm",
                ancho : "30 cm",
                largo : "15 cm"
            },
            fabricacion :{
                pais : "China",
                fecha : new Date('2018-07-09')
            }
        },
    },
    {
        nombre : "Teclado hyperx",
        descripcion : "Teclado gaming",
        tipoProducto : "Teclado",
        modelo : "hyx 100k",
        Precio :{
            minimoVenta : 300000,
            compra : 450000
        },
        caracteristicas :{
            dimensiones :{
                alto : "10 cm",
                ancho : "60 cm",
                largo : "40 cm"
            },
            fabricacion :{
                pais : "China",
                fecha : new Date('2018-03-029')
            }
        }
    },
    { nombre : "mouse hyperx",
        descripcion : "mouse gamer",
        tipoProducto : "mouse",
        modelo : "xm mo3",
        Precio :{
            minimoVenta : 250000,
            compra : 300000
        },
        caracteristicas :{
            dimensiones :{
                alto : "2metros",
                ancho : "15 cm",
                largo : "20 cm"
            },
            fabricacion :{
                pais : "Taiwan",
                fecha : new Date('2019-04-027')
            }
        }
    },
]
for (const { nombre, tipo, modelo, caracteristicas } of carrito) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Tipo de Producto: ${tipo}`);
    console.log(`Modelo: ${modelo}`);
    console.log(`Dimensión Largo: ${caracteristicas.dimensiones.largo}`);
    console.log(`País de Fabricación: ${caracteristicas.fabricacion.pais}`);
    console.log('----------------------------------'); 
}
  let total = 0
  carrito.forEach (producto =>{
      total += producto.Precio.compra
  })
  console.log(`El valor del inventario es: ${total} `)
  console.log('----------------------------------');

  
let productosChina = carrito.filter((producto) =>{
    return producto.caracteristicas.fabricacion.pais === 'China'
})
console.log(productosChina)
console.log('----------------------------------');


let altoProducto = carrito.filter((producto) =>{
    return producto.caracteristicas.dimensiones.alto === '2metros'
})
console.log(altoProducto)
console.log('----------------------------------');

console.log(carrito[0].obtenerPrecioCompra())



  
