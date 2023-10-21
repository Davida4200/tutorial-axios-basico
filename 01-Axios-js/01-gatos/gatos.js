async function obtenerGato() {
  try {
    const respuesta = await axios.get('https://api.thecatapi.com/v1/images/search');
    return ('Datos obtenidos:', respuesta);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function mostrarImagenGato() {
  const imagenUrl = await obtenerGato();
  if (imagenUrl) {
    const imagen = document.createElement("img");
    imagen.src = imagenUrl;
    document.body.appendChild(imagen);
  }
}

mostrarImagenGato();


// Ejemplo de un JSON con 3 gatitos
data =
[
  {
    "id":"MTg0Mjg0OQ",
    "url":"https://cdn2.thecatapi.com/images/cnc.jpg",
    "width":657,
    "height":500
  }
],
[
  {
    "id":"MTc4NjYzNA",
    "url":"https://cdn2.thecatapi.com/images/MTc4NjYzNA.jpg",
    "width":960,
    "height":642
  }
],
[
  {
    "id":"7rp",
    "url":"https://cdn2.thecatapi.com/images/7rp.gif",
    "width":300,
    "height":225
  }
]