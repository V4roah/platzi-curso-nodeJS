const hola = (nombre, miCallback) => {
    setTimeout(function(){
        console.log(`Hola, ${nombre}`);
        miCallback(nombre);
    }, 1000);
};

const hablar = (callBackHablar) => {
    setTimeout(function(){
        console.log(`Bla bla bla bla bla .....`);
        callBackHablar();
    }, 1000);
};

const adios = (nombre, otroCallback) => {
    setTimeout(function(){
        console.log(`Adios, ${nombre}`);
        otroCallback();
    }, 1000);
};

const conversacion = (nombre, veces, callback) => {
    if (veces > 0){
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    }else {
        adios(nombre, callback);
    }
   

};

console.log("Iniciando proceso ...");
hola('Daniel' , function(nombre){
    conversacion(nombre, 5, function(){
        console.log("Proceso terminado ...");
    });
});








// hola('Daniel' , function(nombre){
//     hablar(function (){
//         hablar(function (){
//             adios(nombre, function (){
//                 console.log("Terminando proceso...");

//             });

//         })
//     })    
        

// }); 