# Creación de Componentes Web Personalizados

Este proyecto es una web modular que hace uso de **Web Components** para crear una estructura dinámica y reutilizable. La interfaz incluye un encabezado, un menú de navegación, un área principal para contenido dinámico, una tabla de usuarios, un perfil de usuario, y una galería de imágenes, todo ello cargado de manera interactiva mediante la manipulación del hash en la URL.

## Estructura del Proyecto

El proyecto se organiza en los siguientes archivos y carpetas:

![estructutra](https://github.com/user-attachments/assets/a953c5bf-7d64-4aac-8248-c97151f61093)

Cada archivo JS dentro de `components/` define un componente web que se utiliza en el archivo `index.html` para mostrar diferentes secciones de la página. Los componentes tienen un alcance aislado gracias al uso de *Shadow DOM*, lo que permite encapsular estilos y lógica sin afectar al resto del documento.

### Índice

1. [Header](#header)
2. [Footer](#footer)
3. [Main Container](#main-container)
4. [Menú](#menú)
5. [Social Profile](#social-profile)
6. [Custom Table](#custom-table)
7. [Gallery](#gallery)
8. [Index](#index)
9. [App](#app)
10. [Estilos](#estilos)
11. [Conclusión](#conclusión)



#### **Header**

Este componente (header.js) crea un encabezado en la parte superior de la página. El encabezado tiene un fondo verde oscuro y un texto centrado.

- En el constructor del componente, se utiliza `this.attachShadow({ mode: 'open' })` para crear un *Shadow DOM*.
- Dentro del *Shadow DOM*, se inserta un `header` con el texto "Conecta2".

```javascript
this.shadowRoot.innerHTML = `
  <style>
    header {
      background-color: #064e3b;
      color: #ffffff;
      padding: 1rem;
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
    }
  </style>
  <header>Conectados</header>
`;
```
El texto del encabezado es personalizado y se encuentra dentro de un bloque <header> que se presenta con un fondo verde y texto en blanco.

#### **Footer**

El componente de pie de página (footer.js) es similar al encabezado, proporcionando un diseño consistente para la página. El pie de página contiene un mensaje de derechos de autor y es de color verde oscuro.

Utiliza también un Shadow DOM para aislar los estilos.
El contenido está en un <footer> que muestra el mensaje de derechos reservados.

```javascript
this.shadowRoot.innerHTML = `
  <style>
    footer {
      background-color: #064e3b;
      color: #ffffff;
      padding: 0.5rem;
      text-align: center;
      font-size: 1rem;
    }
  </style>
  <footer>&copy; 2024 Conectados. Todos los derechos reservados.</footer>
`;
```

El pie de página mantiene el mismo estilo visual que el encabezado, asegurando una apariencia coherente.

#### **Main Container**

Este componente (main.js) sirve como contenedor principal de la página. Su propósito es envolver el contenido dinámico que se carga según la navegación.

Usa un `slot` que permite insertar contenido personalizado en el contenedor desde fuera del componente.

```javascript
this.shadowRoot.innerHTML = `
  <style>
    :host {
      display: block;
      padding: 1rem;
    }
  </style>
  <slot></slot>
`;
```
El uso de `slot` permite que el contenido dentro de <main-container> cambie dependiendo de la ruta, lo que facilita la creación de una interfaz de usuario dinámica.

#### **Menú**

El componente de menú (menu.js) proporciona la navegación entre las diferentes secciones del sitio: perfil, tabla y galería. Los enlaces son visibles en una barra de navegación ubicada en la parte superior de la página.

Los enlaces están estilizados en verde con un efecto de subrayado al pasar el mouse sobre ellos.

```javascript
this.shadowRoot.innerHTML = `
  <style>
    nav {
      background-color: #065f46;
      padding: 1rem;
      display: flex;
      justify-content: space-around;
    }
    a {
      color: #ffffff;
      text-decoration: none;
      font-size: 1rem;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
  <nav>
    <a href="#/profile">Perfil</a>
    <a href="#/table">Tabla</a>
    <a href="#/gallery">Galería</a>
  </nav>
`;
```

Cada enlace lleva a una ruta diferente, lo que activa el cambio de contenido dentro del contenedor principal.

#### **Social Profile**

Este componente (social-profile.js) muestra un perfil de usuario ficticio con detalles como nombre, correo electrónico, ocupación, etc. Está diseñado para ilustrar un perfil de usuario en una aplicación web.

Muestra el perfil en un formato simple y centrado dentro de la página.

#### **Custom Table**

Este componente (custom-table.js) genera una tabla dinámica que carga datos de usuarios desde una API externa (en este caso, https://jsonplaceholder.typicode.com/users).

Realiza una petición HTTP a la API utilizando fetch para obtener los datos.
Luego, crea filas en la tabla para cada usuario, mostrando su ID, nombre y correo electrónico.

```javascript
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await response.json();
```

Una vez que los datos se reciben de la API, se agregan a la tabla y se muestran en la página.


#### **Gallery**

El componente de galería (gallery.js) carga y muestra imágenes de Pokémon utilizando la API https://pokeapi.co/api/v2/pokemon.

Realiza una solicitud fetch a la API para obtener los datos de Pokémon.
Cada imagen de Pokémon se agrega a la galería, creando una cuadrícula visual.

```javascript
const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
const data = await response.json();
```

Las imágenes de Pokémon se muestran en una disposición de cuadrícula, con un borde verde alrededor de cada imagen.

#### **Index**

La página comienza con una estructura básica estándar de HTML5, que incluye el tipo de documento `(<!DOCTYPE html>)` y el idioma de la página `(<html lang="es">)`. En el `head`, se especifican los metadatos necesarios como la codificación de caracteres, el viewport (para diseño responsivo), el título de la página y la hoja de estilos CSS externa styles.css.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Conectados</title>
<link rel="stylesheet" href="styles.css">
```
La etiqueta link se usa para incluir el archivo CSS global que contiene los estilos comunes de la página.

**Carga de componentes personalizados**

Dentro del body, se cargan los componentes personalizados que definen las diferentes secciones de la página. Los componentes son etiquetados como `custom-header`, `custom-menu`, `main-container`, y `custom-footer`. Estos componentes son definidos en los archivos JavaScript y proporcionan el encabezado, el menú de navegación, el contenedor principal para el contenido dinámico y el pie de página, respectivamente.

- `custom-header`: Carga el encabezado de la página, que contiene el título "Conectados".
- `custom-menu`: Define un menú de navegación con enlaces a diferentes secciones (perfil, tabla, galería).
- `main-container`: Un contenedor que envuelve el contenido dinámico, que cambiará según la navegación.
- `custom-footer`: Muestra el pie de página con derechos reservados.

Estos componentes son elementos personalizados creados con Web Components en los archivos JS correspondientes.

**Carga de los archivos JS de los componentes**

A continuación, se cargan todos los archivos JavaScript necesarios para los componentes definidos. Cada archivo JavaScript es un componente que se define usando class y la API de Web Components. Estos archivos son:

```html
<script src="components/header.js"></script>
<script src="components/footer.js"></script>
<script src="components/main.js"></script>
<script src="components/menu.js"></script>
<script src="components/social-profile.js"></script>
<script src="components/custom-table.js"></script>
<script src="components/gallery.js"></script>
```

Cada uno de estos scripts define un componente, y son necesarios para que los componentes personalizados funcionen correctamente en el documento HTML.

**Carga del archivo app.js**

Al final del archivo, se incluye el archivo app.js, que contiene la lógica de navegación de la aplicación. Este archivo maneja la carga dinámica de contenido dentro del contenedor <main-container> cuando se cambia de ruta en el menú de navegación.

```html
Copiar código
<script src="app.js"></script>
```
Este archivo escucha los cambios en la URL (específicamente, los cambios en el hash de la URL), y cambia el contenido que se muestra en el contenedor principal (#content) según la ruta activa. Cuando el usuario navega a diferentes secciones (perfil, tabla, galería), el contenido dentro del contenedor cambia sin necesidad de recargar la página.

**Explicación de la navegación**
La navegación se maneja con enlaces dentro del menú (`custom-menu`). Cada enlace tiene un hash (#), lo que indica que no se realiza una recarga de la página, sino que se utiliza el hashchange para cambiar el contenido del #content. Por ejemplo:

```html
<a href="#/profile">Perfil</a>
<a href="#/table">Tabla</a>
<a href="#/gallery">Galería</a>
```
Cuando el usuario hace clic en uno de estos enlaces, el contenido dentro de #content se actualiza con el componente correspondiente:

`#/profile`: Carga el componente <social-profile></social-profile>.
`#/table`: Carga el componente <custom-table></custom-table>.
`#/gallery`: Carga el componente <gallery-page></gallery-page>.

El archivo index.html es el punto de entrada de la aplicación y se encarga de cargar y organizar los componentes personalizados que conforman la interfaz. Gracias a la modularidad de los componentes, el contenido puede ser cargado dinámicamente sin recargar la página, lo que ofrece una experiencia de usuario más fluida. Además, el uso de Web Components asegura que cada sección de la página esté encapsulada y sea reutilizable.

#### **App**

El archivo app.js gestiona la navegación de la aplicación, cargando el contenido correspondiente según la ruta seleccionada en el menú.

Define un objeto routes que mapea las rutas con los componentes correspondientes.

```javascript
const routes = {
  '/profile': '<social-profile></social-profile>',
  '/table': '<custom-table></custom-table>',
  '/gallery': '<gallery-page></gallery-page>',
};
```

Este archivo se encarga de escuchar los cambios en el hash de la URL y actualizar el contenido de la página dinámicamente sin necesidad de recargarla.

#### **Estilos**

El archivo styles.css contiene los estilos globales para la página. Define la tipografía, los márgenes, los colores de fondo y otros elementos visuales comunes.

Aplica estilos consistentes a los elementos básicos de la página, como los encabezados y los enlaces, usando colores que combinan con la paleta del diseño general.

#### **Conclusión**

El proyecto demuestra cómo usar Web Components para construir una aplicación web modular y reutilizable. Cada componente está aislado y puede ser utilizado en otros proyectos sin problemas. La estructura modular facilita la expansión del proyecto y la reutilización de sus partes, lo que permite un desarrollo ágil y flexible.


Este archivo `README.md` ahora contiene una descripción detallada de cada componente, cómo funciona, y ejemplos específicos de código para facilitar la comprensión.

