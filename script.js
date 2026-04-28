const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.svc-card, .why-card, .animal-row, .process-step').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    if (form.action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      alert("Form not configured yet — please call 781-796-2390 or email Wildwisemanagement@gmail.com.");
    }
  });
}
