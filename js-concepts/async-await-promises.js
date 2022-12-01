function funcionQueDuraraUnTiempo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola mundo');
      resolve('Hola mundo');
    }, 5000);
  });
}

// Sincronismo
function funcionSincrona() {
  console.log('Inicio');
  funcionQueDuraraUnTiempo(); // Esta función dura 5 segundos, pero el programa sigue ejecutándose
  console.log('Fin');
}

// funcionSincrona();

// Asincronismo con async/await
async function funcionAsincrona() {
  console.log('Inicio');
  await funcionQueDuraraUnTiempo(); // Esta función dura 5 segundos, pero el programa espera a que termine
  console.log('Fin');
}

// funcionAsincrona();

// Asincronismo con promesas
function funcionAsincronaConPromesas() {
  console.log('Inicio');
  funcionQueDuraraUnTiempo()
    .then(() => {
      console.log('Fin');
    });
}

// funcionAsincronaConPromesas();
