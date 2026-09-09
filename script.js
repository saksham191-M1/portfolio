document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}));

const toggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') document.body.classList.remove('theme-dark');

function updateThemeButton() {
  const dark = document.body.classList.contains('theme-dark');
  toggle.textContent = dark ? 'LIGHT' : 'DARK';
  toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
  toggle.setAttribute('aria-pressed', String(dark));
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('theme-dark') ? 'dark' : 'light');
  updateThemeButton();
});
updateThemeButton();
