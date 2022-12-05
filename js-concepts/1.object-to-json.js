const usuario = {
  name: 'Fulano',
  profession: 'Developer',
  age: 20,
  address: {
    city: 'São Paulo',
    state: 'SP',
  },
};

// Convertir objeto a JSON
const usuarioJSON = JSON.stringify(usuario);

console.log('usuarioJSON', usuarioJSON);
