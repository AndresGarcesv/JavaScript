//Ejemplo
//Sistaxis: declaracion de funciones
//invocar,llamar o ejecutar saludo
saludo("Andres")//-> argumento: Andres
function saludo(nombre){//->parametro
    console.log(`Hola ${nombre} como estas`)
}

//Sintaxis: Expresion Funcion
//se asigna a una constante
const saludo2 = function(nombre="Andres2"){//->parametro por defecto
    console.log(`Hola ${nombre} como estas`)
}
//invocar saludo2:
saludo2();
