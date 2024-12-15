document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('#content');

  const routes = {
    '/profile': '<social-profile></social-profile>',
    '/table': '<custom-table></custom-table>',
    '/gallery': '<gallery-page></gallery-page>',
  };

  function navigate() {
    const hash = window.location.hash || '#/profile';
    content.innerHTML = routes[hash.slice(1)] || '<h1>Página no encontrada</h1>';
  }

  window.addEventListener('hashchange', navigate);

  navigate(); // Cargar contenido inicial
});
