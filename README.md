# Creación de Componentes Web Personalizados

Este proyecto es una web modular que hace uso de **Web Components** para crear una estructura dinámica y reutilizable. La interfaz incluye un encabezado, un menú de navegación, un área principal para contenido dinámico, una tabla de usuarios, un perfil de usuario, y una galería de imágenes, todo ello cargado de manera interactiva mediante la manipulación del hash en la URL.

## Estructura del Proyecto

El proyecto se organiza en los siguientes archivos y carpetas:

![estructutra](https://github.com/user-attachments/assets/a953c5bf-7d64-4aac-8248-c97151f61093)

Cada archivo JS dentro de `components/` define un componente web que se utiliza en el archivo `index.html` para mostrar diferentes secciones de la página. Los componentes tienen un alcance aislado gracias al uso de *Shadow DOM*, lo que permite encapsular estilos y lógica sin afectar al resto del documento.

### Índice

1. [Header](#header)
2. [Instalación](#instalación)
3. [Smileys & Emotion](#smileys--emotion)
4. [Contribución](#contribución)
5. [Contacto](#contacto)


#### **Header**

Este componente (header.js) crea un encabezado en la parte superior de la página. El encabezado tiene un fondo verde oscuro y un texto centrado.

- En el constructor del componente, se utiliza `this.attachShadow({ mode: 'open' })` para crear un *Shadow DOM*.
- Dentro del *Shadow DOM*, se inserta un `header` con el texto "Conectados".

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
`;´´´

El texto del encabezado es personalizado y se encuentra dentro de un bloque <header> que se presenta con un fondo verde y texto en blanco.









