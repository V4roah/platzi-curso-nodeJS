const hola = async (nombre) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
};

const hablar = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Bla bla bla bla bla .....`);
      resolve(nombre);
      // reject("ha habido un error");
    }, 1000);
  });
};

const adios = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Adios, ${nombre}`);
      resolve();
    }, 1000);
  });
};

const main = async () => {
  let nombre = await hola("Daniel");
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Terminamos proceso....");
};

console.log("Hola");
main();
