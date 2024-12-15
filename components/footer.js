class CustomFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #064e3b; /* Verde oscuro */
          color: #ffffff;
          padding: 0.5rem;
          text-align: center;
          font-size: 1rem;
        }
      </style>
      <footer>&copy; 2024 Conecta2. Todos los derechos reservados.</footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
