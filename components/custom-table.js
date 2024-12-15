class CustomTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        th, td {
          border: 1px solid #065f46;
          padding: 0.5rem;
          text-align: left;
        }
        th {
          background-color: #064e3b;
          color: #ffffff;
        }
        td {
          background-color: #e8f5e9;
        }
      </style>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>
    `;

    this.loadData();
  }

  async loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const tbody = this.shadowRoot.querySelector('#table-body');

    data.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      `;
      tbody.appendChild(row);
    });
  }
}

customElements.define('custom-table', CustomTable);
