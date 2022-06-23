const hola = (nombre) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
};

const hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Bla bla bla bla bla .....`);
    //   resolve(nombre);
      reject("ha habido un error");
    }, 1000);
  });
};

const adios = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Adios, ${nombre}`);
      resolve();
    }, 1000);
  });
};

// ----
console.log("Iniciando el proceso....");
hola("Daniel")
.then(hablar)
.then(adios)
.then((nombre) => {
  console.log("Terminado el proceso....");
})
.catch(error => {
    console.error("ha habido un error:");
    console.error(error);
});

