const reprodcutorMusica ={
    estado : "apagado",
    play :function(cancion)  {
        if(this.estado === "apagado"){
            console.log(`Comenzando reproduccion de la cancion ${cancion}...`)
            //cambiar el estado
            this.estado = "Play"
        }else{
            console.log(`Cancion en ejecucion: Stop para terminar`)
        }
    },
    stop : function(){
        if(this.estado === "apagado"){
            console.log(`Reprpductor ya esta apagado`)
        }else{
            console.log(`Apagando reproductor...`)
            this.estado = "apagado"
        }
    }
    ,
    getEstado : function(){
        return this.estado
    }
    ,
    setEstado : function(estado){
        this.estado = estado
    }
}


reprodcutorMusica.play("Himno Nacional");
//reprodcutorMusica.stop();
//reprodcutorMusica.stop();