/* ============================================================
   PRASAD ATHAVE — main.js v2
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* 1. AOS */
  AOS.init({ duration: 650, easing: 'ease-out-cubic', once: true, offset: 50 });

  /* 2. Nav scroll */
  const nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 30);
    highlightNav();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* 3. Hamburger */
  const burger = document.getElementById('hamburger');
  const links  = document.getElementById('nav-links');
  burger?.addEventListener('click', () => {
    burger.classList.toggle('open');
    links.classList.toggle('open');
  });
  links?.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
    burger.classList.remove('open');
    links.classList.remove('open');
  }));

  /* 4. Smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 62, behavior: 'smooth' });
    });
  });

  /* 5. Active nav highlight */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  function highlightNav() {
    const y = window.scrollY + 120;
    let cur = '';
    sections.forEach(s => { if (s.offsetTop <= y) cur = s.id; });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${cur}`));
  }

});
