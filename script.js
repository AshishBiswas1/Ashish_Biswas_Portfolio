// Dark/Light Theme Toggle
const themeBtn = document.querySelector('.toggle-theme');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeIcon.innerHTML = theme === 'dark' ? '&#9790;' : '&#9788;';
}

function toggleTheme() {
  const currentTheme = html.getAttribute('data-theme') || 'light';
  setTheme(currentTheme === 'light' ? 'dark' : 'light');
}

themeBtn.addEventListener('click', toggleTheme);

// Load saved theme
(function () {
  const saved = localStorage.getItem('theme');
  if(saved) setTheme(saved);
  else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme('dark');
  }
})();

// Contact Form Handler
const form = document.getElementById("contact-form");
const result = document.getElementById("form-result");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  // Simulate successful form submission (replace with real backend as needed)
  result.style.color = "var(--accent)";
  result.textContent = "Thank you! Your message has been sent.";
  setTimeout(() => { result.textContent = ""; }, 4000);
  form.reset();
});
