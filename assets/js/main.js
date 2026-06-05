// Mobil menü
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
  navToggle.classList.toggle('is-open');
});
nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
  })
);

// Yıl
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const revealTargets = document.querySelectorAll('.card, .step, .section__head, .gallery img, .brands, .districts');
revealTargets.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(el => io.observe(el));

// Talep formu — tüm talepler doğrudan WhatsApp'a yönlendirilir
const form = document.getElementById('talepForm');
const note = document.getElementById('formNote');
const WHATSAPP = '905357212190';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());

  const mesaj =
    `*Yeni Servis Talebi*\n` +
    `Ad: ${data.ad || '-'}\n` +
    `Telefon: ${data.telefon || '-'}\n` +
    `İlçe: ${data.ilce || '-'}\n` +
    `Marka: ${data.marka || '-'}\n` +
    `Açıklama: ${data.aciklama || '-'}`;

  note.className = 'form__note ok';
  note.textContent = 'WhatsApp\'a yönlendiriliyorsunuz...';

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mesaj)}`, '_blank');
  form.reset();
});
