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

// Harita — cihaza göre Apple Haritalar (iOS) veya Google Haritalar
const ADRES = 'Osmangazi Mahallesi Aşıkpaşa Caddesi 143/C Keçiören Ankara';
const isIOS =
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const haritaURL = isIOS
  ? `https://maps.apple.com/?q=${encodeURIComponent(ADRES)}`
  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADRES)}`;

document.querySelectorAll('#mapBtn, #addressLink').forEach((el) => {
  el.setAttribute('href', haritaURL);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener');
});

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

  let mesaj =
    `*Yeni Servis Talebi*\n` +
    `Ad: ${data.ad || '-'}\n` +
    `Telefon: ${data.telefon || '-'}\n` +
    `İlçe: ${data.ilce || '-'}\n` +
    `Marka: ${data.marka || '-'}\n` +
    `Arıza/Talep: ${data.ariza || '-'}`;
  if (data.aciklama && data.aciklama.trim()) {
    mesaj += `\nNot: ${data.aciklama.trim()}`;
  }

  note.className = 'form__note ok';
  note.textContent = 'WhatsApp\'a yönlendiriliyorsunuz...';

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mesaj)}`, '_blank');
  form.reset();
});
