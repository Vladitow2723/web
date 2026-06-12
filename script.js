// Elementos del DOM
const sidebar = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menuToggleBtn');

// Función para abrir/cerrar sidebar
function toggleSidebar() {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

// Eventos
if (menuBtn) menuBtn.addEventListener('click', toggleSidebar);
if (overlay) overlay.addEventListener('click', toggleSidebar);

// Cerrar sidebar al hacer clic en un enlace (opcional, mejora UX)
document.querySelectorAll('.sidebar-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
      toggleSidebar();
    }
  });
});

// Resaltar enlace activo según la página actual
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.sidebar-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});