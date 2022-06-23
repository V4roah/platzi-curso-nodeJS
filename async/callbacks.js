const hola = (nombre, miCallback) => {
    setTimeout(function(){
        console.log(`Hola, ${nombre}`);
        miCallback(nombre);
    }, 1000);
}

const adios = (nombre, otroCallback) => {
    setTimeout(function(){
        console.log(`Adios, ${nombre}`);
        otroCallback();

    }, 1000);

}

console.log("Inciando proceso...")
hola('Daniel' , function(nombre){
    adios(nombre, function (){
        console.log("Terminando proceso...")

    });

}); 
