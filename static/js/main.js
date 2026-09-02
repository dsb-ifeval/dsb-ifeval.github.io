// DSB-IFEval project page — minimal vanilla JS
(function () {
  // copy BibTeX
  const btn = document.querySelector('.copy');
  if (btn) {
    btn.addEventListener('click', () => {
      const t = document.getElementById('bibtex').innerText;
      navigator.clipboard.writeText(t).then(() => {
        const old = btn.textContent; btn.textContent = 'copied ✓';
        setTimeout(() => (btn.textContent = old), 1400);
      });
    });
  }
  // active nav link on scroll
  const links = [...document.querySelectorAll('nav.top .links a')];
  const map = links.map(a => ({ a, el: document.querySelector(a.getAttribute('href')) }))
                   .filter(x => x.el);
  const onScroll = () => {
    const y = window.scrollY + 90;
    let cur = map[0];
    for (const m of map) if (m.el.offsetTop <= y) cur = m;
    links.forEach(a => a.style.color = '');
    if (cur) cur.a.style.color = 'var(--brand-dk)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
