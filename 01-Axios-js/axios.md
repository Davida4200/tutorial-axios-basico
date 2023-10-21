# Librería Axios JS

### ¿Qué hay en este documento?

Este documento fue creado con fines educativos para explicar cómo usar la librería Axios en un nivel básico con el método GET.

# Tabla de contenidos

1. [Introducción](#introducción)
   1. [Petición XHR](#petición-xhr)
   2. [Petición Axios](#petición-axios)
2. [Instalaciones necesarias](#instalaciones-necesarias)
3. [Primeros pasos en Axios](#primeros-pasos-en-axios)

# Introducción

Antes de sumergirnos en Axios, es importante mencionar que, en el pasado, una de las principales formas de realizar solicitudes HTTP en JavaScript era a través del objeto XMLHttpRequest (XHR). Aunque XHR funcionaba, su sintaxis era propensa a errores y un poco difícil de leer.

Con la llegada de nuevas tecnologías como Axios, podemos realizar peticiones con una sintaxis más limpia y eliminando la necesidad de escribir múltiples confirmaciones, lo que hace que el código sea más legible y mantenible.

# Instalaciones necesarias

1. [Visual Studio Code](https://code.visualstudio.com/)

2. [Extensión Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

# Primeros pasos en Axios

Antes de empezar, veremos las partes de una petición get con Axios utilizando **[Async + await](https://es.javascript.info/async-await)** y [try catch](https://es.javascript.info/try-catch).

## Petición Axios con Async + await

Veremos la siguiente petición en pequeñas partes para entenderla mejor.

``` javascript
const obtenerGato = async () => {
  try {
    const respuesta = await axios.get('https://api.thecatapi.com/v1/images/search');
    console.log('Datos obtenidos:', respuesta);
  } catch (error) {
    console.error('Error:', error);
  }
};

obtenerGato();
```

``` javascript
const obtenerGato = async () => {
  //petición
}
```
En esta parte usamos la palabra async para indicarle a JavaScript que estamos trabajando con una función asincrónica pero la definimos como una **constante**. La razón de esto es para proteger la "integridad" de la función, porque en algún punto podríamos hacer algo como esto:

``` javascript
obtenerGato = 5;
```

Si eso ocurre nuestra aplicación estaría completamente arruinada por una línea, pero evitamos este problema con **const**, ya que no permitirá cambiar el valor de la función.

``` javascript
const obtenerGato = async () => {
  try {
  } catch (error) {

  }
}
```

Utilizamos try catch para tener un manejo personalizado del flujo dependiendo del resultado. **try** es el espacio en el que ponemos el código a ejecutar. **catch** es el manejador de los errores dándonos la posibilidad de manejar el código de una manera específica, si no utilizamos un try catch estamos permitiendo que los errores manejen nuestra aplicación y corten la ejecución en algún punto.

``` javascript
catch (error)
```

Y utilizamos **(error)** para recibir el error dentro de la variable llamada **error**, y posteriormente usarlo.

``` javascript
async function obtenerGato() {
  try {
    const respuesta = await axios.get('https://api.thecatapi.com/v1/images/search');
    console.log('Datos obtenidos:', respuesta);
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerGato();
```

Al igual que antes, usamos **const** para la variable **respuesta** y mantener su naturaleza con el tiempo, siempre será una respuesta.

Utilizamos el objeto axios con el método **GET** apuntando a la URL de donde queremos sacar la información.

Luego mostramos en consola el resultado y finalmente, con **catch**, mostramos el error en consola.

# Aplicación práctica

## Ejemplo 1

Haremos una petición a la API de [The Cat API](https://thecatapi.com/) y mostraremos los datos en la consola del navegador. Seguiremos estos pasos:

1. Trabajaremos en una carpeta base llamada **01-gatos** y crearemos dos archivos: **gatos.html y gatos.js**

    ![Alt text](/01-Axios-js/imagenes/archivos-gatos.png)

2. En **gatos.html** hacemos la estructura básica de un archivo HTML, ponemos el CDN que encontramos en la [documentación de Axios](https://axios-http.com/es/docs/intro), y debajo de este ponemos la referencia a nuestro **gatos.js** se verá así:

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Axios - gatitos</title>
</head>
<body>

  <!-- CDN de Axios -->
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script src="gatos.js"></script>
</body>
</html>
```

3. En **gatos.js** usaremos el código de ejemplo que vimos en la introducción, quedaría así:

``` javascript
async function obtenerGato() {
  try {
    const respuesta = await axios.get('https://api.thecatapi.com/v1/images/search');
    console.log('Datos obtenidos:', respuesta);
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerGato();
```

4. Esta parte es importante, porque lo que haremos ahora es usar la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) de Visual Studio Code.

    - Primero, nos posicionamos en el archivo **gatos.html** y ejecutamos Live Server.

      ![Alt text](/01-Axios-js/imagenes/live-server.png)

    - Ahora, en la página que nos abre Live Server, presionamos la tecla F12 para abrir las DevTools, y nos dirigimos a la **consola**, veremos algo como esto:

      ![Alt text](/01-Axios-js/imagenes/consola-json-contraido.png)

    - Le damos click a ese elemento **Object** y lo abrimos, veremos algo así:

      ![Alt text](/01-Axios-js/imagenes/consola-json-expandido.png)

       #### Primer ejercicio
    - Podemos ver varios elementos, la primera tarea es acceder al elemento **data** de este JSON mediante el archivo de gatos.js que tenemos en nuestro IDE.

    - **Nota.** Puede ser de ayuda entender que trabajamos con un objeto y tenemos que acceder a su propiedad, y que la respuesta está en manipular lo que tenemos dentro del **try**.

      #### Segundo ejercicio

    - La siguiente tarea es acceder al elemento **0** dentro del JSON, este ejercicio es distinto porque se encuentra dentro de un **Array**, como vemos acá:

      ![Alt text](/01-Axios-js/imagenes/json-array.png)

      **Nota.** Realmente estaríamos hablando de que esta es la estructura del objeto:

        ![Alt text](/01-Axios-js/imagenes/json-array-ejemplo.png)

      Si hablaramos de que estamos pidiendo 3 gatos y no 1, la estructura de **data** sería algo así:

      ![Alt text](/01-Axios-js/imagenes/json-3-gatitos.png)

      Teniendo eso en cuenta, la instrucción es acceder a la única posición del arreglo.

      Para finalizar este punto, luego de acceder al arreglo, vamos a tener acceso a las propiedades del objeto (**id**, **url**, **width** y **height**), pero ahora vamos a acceder a la url.

      #### Cuarto ejercicio

      Vamos a crear una imagen con base en la URL que obtuvimos del punto anterior, para ello usaremos este código base:

      ``` javascript
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
      ```

      **Nota.** Las diferencias de este código son:
        - La variable respuesta, se debe poner el acceso a la URL nuevamente.
        - Hacemos un retorno. En la línea que mostramos la respuesta en consola ya no hacemos un **console.log**, en este caso retornamos la respuesta.

      **Aspectos a considerar:** 
       - Ahora llamamos a la función **obtenerGato( )** dentro de otra función asíncrona, y con el **await** se indica que el valor se asigna en la variable hasta que se termine de ejecutar **obtenerGato( )**.

       ``` javascript
        const imagen = document.createElement("img");
        imagen.src = imagenUrl;
        document.body.appendChild(imagen);
       ```
        - En la primera sentencia es donde se indica que crearemos un elemento de tipo **imagen** en nuestro HTML, luego a esta imagen le cambiamos el atributo **src** y le asignamos el valor que enviamos desde **obtenerGato( )**, y ahora tenemos nuestra imagen lista.

        - Después, usamos **appendChild** para pintar este elemento en nuestro HTML.

    ### Resultado

    - El resultado de nuestro código debería ser algo parecido a esto:

    ![Alt text](/01-Axios-js/imagenes/gatito-1.png)

    - Recargamos la página y obtenemos una nueva imagen:

    ![Alt text](/01-Axios-js/imagenes/gatito-2.png)

    ![Alt text](/01-Axios-js/imagenes/gatito-3.png)

   Listo! Has terminado el taller, gracias por llegar hasta acá.

    ![Alt text](/01-Axios-js/imagenes/baby-yoda-thank-you.gif)