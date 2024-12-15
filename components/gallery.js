class Gallery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 10px;
          padding: 1rem;
        }
        .image-item {
          text-align: center;
        }
        img {
          width: 100%;
          height: auto;
          border: 2px solid #065f46;
        }
        .name {
          margin-top: 5px;
          font-weight: bold;
          color: #065f46;
        }
      </style>
      <div class="gallery" id="gallery-container"></div>
    `;

    this.loadImages();
  }

  async loadImages() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    const gallery = this.shadowRoot.querySelector('#gallery-container');

    data.results.forEach((pokemon, index) => {
      const container = document.createElement('div');
      container.classList.add('image-item');
      
      const img = document.createElement('img');
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
      img.alt = pokemon.name;
      
      const name = document.createElement('div');
      name.classList.add('name');
      name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);  // Capitalize first letter

      container.appendChild(img);
      container.appendChild(name);
      gallery.appendChild(container);
    });
  }
}

customElements.define('gallery-page', Gallery);
