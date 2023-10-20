async function obtenerGato() {
  try {
    const respuesta = await axios.get('https://api.thecatapi.com/v1/images/search');
    console.log('Datos obtenidos:', respuesta);
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerGato();