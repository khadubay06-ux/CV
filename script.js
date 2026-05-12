const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

const setTheme = (theme) => {
  if (theme === 'dark') {
    body.classList.add('dark-theme');
    themeToggleButton.querySelector('i').classList.replace('fa-moon', 'fa-sun');
  } else {
    body.classList.remove('dark-theme');
    themeToggleButton.querySelector('i').classList.replace('fa-sun', 'fa-moon');
  }
};

const storedTheme = localStorage.getItem('portfolio-theme');
setTheme(storedTheme === 'dark' ? 'dark' : 'light');

themeToggleButton.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-theme');
  setTheme(isDark ? 'dark' : 'light');
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
});

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
