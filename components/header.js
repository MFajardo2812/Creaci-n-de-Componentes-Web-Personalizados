class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
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
      <header>Conecta2</header>
    `;
  }
}

customElements.define('custom-header', CustomHeader);
