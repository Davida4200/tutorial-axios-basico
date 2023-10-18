# Librería Axios JS

### ¿Qué hay en este documento?

Este documento fue creado con fines educativos para explicar cómo usar la librería Axios en un nivel básico.

# Tabla de contenidos

1. [Introducción](#introducción)
   1. [Petición XHR](#petición-xhr)
   2. [Petición Axios](#petición-axios)
2. [Instalaciones necesarias](#instalaciones-necesarias)
3. [Primeros pasos en Axios](#primeros-pasos-en-axios)

# Introducción

Antes de sumergirnos en Axios, es importante mencionar que, en el pasado, una de las principales formas de realizar solicitudes HTTP en JavaScript era a través del objeto XMLHttpRequest (XHR). Aunque XHR funcionaba, su sintaxis era propensa a errores y un poco difícil de leer.

Con la llegada de nuevas tecnologías como Axios, podemos realizar peticiones con una sintaxis más limpia y eliminando la necesidad de escribir múltiples confirmaciones, lo que hace que el código sea más legible y mantenible.

#### Petición XHR
``` javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ejemplo.com/api/datos.json', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    var datos = JSON.parse(xhr.responseText);
    console.log(datos); // Datos en formato JSON
  }
};
xhr.send();
```

#### Petición Axios
``` javascript
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
```
<br>
<br>

# Instalaciones necesarias

1. [Node.js](https://nodejs.org/es/)

2. [Visual Studio Code](https://code.visualstudio.com/)

3. [Extensión Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

4. [Axios](https://axios-http.com/es/docs/intro)

<br>
<br>

# Primeros pasos en Axios

Antes de empezar, veremos las partes de una petición get con Axios utilizando **[.then()](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)** o **[Async + await](https://es.javascript.info/async-await)**.

## Petición Axios con .then()

Veremos la petición con **.then()** en pequeñas partes para entenderla mejor.

``` javascript
axios.get('URL')
```

Utilizamos el objeto axios con el método get, apuntando a la URL de donde queremos sacar la información.

``` javascript
axios.get('URL')
.then(function (datos) {
  console.log('Datos obtenidos:', datos);
})
```

**.then()**  es el manejador de la promesa para una respuesta exitosa. Cuando la solicitud se completa con éxito utilizamos un [Callback](https://developer.mozilla.org/es/docs/Glossary/Callback_function) y le asignamos como argumento la variable en la que se almacena la respuesta. En este caso, la respuesta se almacena en la variable **datos**, y veremos los datos en consola.

``` javascript
axios.get('URL')
.then(function (datos) {
  console.log('Datos obtenidos:', datos);
})
.catch(function (error) {
  console.error('Error:', error);
});
```

**.catch()** es el manejador de errores de la promesa y se ejecuta únicamente cuando nuestra respuesta es fallida.

**.catch()** contiene el error, y al igual que en **.then()**, utilizamos un [Callback](https://developer.mozilla.org/es/docs/Glossary/Callback_function) en donde almacenamos el error en la variable **error**, y posteriormente lo visualizaremos en consola.

## Petición Axios con Async + Await

falta

# Aplicación práctica de Axios

## Ejemplo 1

Traeremos información de la API de Rick & Morty, y la veremos en la consola del navegador. Para ello seguiremos estos pasos:

1. Trabajaremos en una carpeta base llamada **01-Axios-js** y crearemos dos archivos, **index.html e index.js**

![Alt text](./imagenes/archivos-iniciales.png)

2. En el **index.html** ponemos este código:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Axios</title>
</head>
<body>

  <!--CDN de Axios-->
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <!--Referencia a nuestro index.js-->
  <script src="index.js"></script>
</body>
</html>
```

3. En el archivo index.js ponemos el siguiente código:
``` javascript
axios.get('https://rickandmortyapi.com/api/character/?page=1')
.then(function (respuesta) {
  console.log('Datos obtenidos:', respuesta.data.results);
})
.catch(function (error) {
  console.error('Error:', error);
});
```