// Language toggle
function setLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
