// Realizar una solicitud GET a la API de Rick and Morty
axios.get('https://rickandmortyapi.com/api/character/?page=1')
.then(function (respuesta) {
  // Manejar la respuesta exitosa
  console.log('Datos obtenidos:', respuesta.data.results);
})
.catch(function (error) {
  // Manejar cualquier error que ocurra durante la solicitud
  console.error('Error:', error);
});