async function obtenerDatos() {
  try {
    const respuesta = await axios.get('https://rickandmortyapi.com/api/character');
    console.log('Datos obtenidos:', respuesta);
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerDatos();