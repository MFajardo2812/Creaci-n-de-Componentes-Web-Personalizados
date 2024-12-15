class SocialProfile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .profile {
          text-align: center;
          font-family: Arial, sans-serif;
        }
        h2 {
          color: #065f46;
        }
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-bottom: 15px;
        }
      </style>
      <div class="profile">
        <img src="https://image-api.espe.edu.ec/imagen/L00415848" alt="Foto de usuario">
        <h2>Perfil de Usuario</h2>
        <p>Nombre: Margarita Fajardo</p>
        <p>Email: mcfajardo1@espe.edu.ec</p>
        <p>Descripción: Estudiante de ITIN en la Universidad de las Fuerzas Armadas</p>
      </div>
    `;
  }
}

customElements.define('social-profile', SocialProfile);

