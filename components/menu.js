class CustomMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: #065f46; /* Verde medio */
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
  }
}

customElements.define('custom-menu', CustomMenu);

