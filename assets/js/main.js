const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const mapUrl = 'https://www.google.com/maps/place/Osmangazi,+A%C5%9F%C4%B1kpa%C5%9Fa+Cd.+143B,+06280+Ke%C3%A7i%C3%B6ren%2FAnkara/@40.0120191,32.8632945,19z/data=!4m6!3m5!1s0x14d34d22eaddf44f:0x7bac6d2dd65182fb!8m2!3d40.0120191!4d32.8632945';
document.querySelectorAll('#mapBtn, #addressLink').forEach((link) => {
  link.href = mapUrl;
  link.target = '_blank';
  link.rel = 'noopener';
});

document.getElementById('talepForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) return form.reportValidity();
  const data = Object.fromEntries(new FormData(form));
  const message = `Yeni Servis Talebi\nAd Soyad: ${data.ad}\nTelefon: ${data.telefon}\nİlçe: ${data.ilce}\nAdres: ${data.adres}\nMarka: ${data.marka}\nTalep: ${data.ariza}\nNot: ${data.aciklama || '-'}`;
  window.open(`https://wa.me/905357212190?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
}
