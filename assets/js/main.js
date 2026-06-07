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

const address = 'Osmangazi Mahallesi Aşıkpaşa Caddesi 143/C Keçiören Ankara';
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
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
