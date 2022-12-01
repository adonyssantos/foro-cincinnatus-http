const userJson = '{"name":"Fulano","profession":"Developer","age":20,"address":{"city":"São Paulo","state":"SP"}}';

// Convertir JSON a objeto
const user = JSON.parse(userJson);

console.log('user', user);
