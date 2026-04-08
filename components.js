/* =============================================
   MUSUBI CAFE IYASUME — Shared Components
   Header / Footer / Particles / Back to top
============================================= */

(function () {
  /* ---- 現在のページパスでナビのactiveを判定 ---- */
  const path = location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { href: 'about.html',     label: 'ABOUT' },
    { href: 'menu.html',      label: 'MENU' },
    { href: 'locations.html', label: 'LOCATIONS' },
    { href: 'contact.html',   label: 'CONTACT' },
  ];

  const navHTML = navLinks.map(l =>
    `<a href="${l.href}" class="nav-link${path === l.href ? ' active' : ''}">${l.label}</a>`
  ).join('');

  const mobileNavHTML = navLinks.map(l =>
    `<a href="${l.href}" class="nav-link${path === l.href ? ' active' : ''}">${l.label}</a>`
  ).join('');

  /* ---- Header ---- */
  document.getElementById('header').innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="logo">
        <span class="logo-icon">🍙</span>
        <div class="logo-text">
          <span class="logo-main">IYASUME</span>
          <span class="logo-sub">MUSUBI CAFE ハワイ</span>
        </div>
      </a>
      <nav class="nav">${navHTML}</nav>
      <div class="lang-switch">
        <button class="lang-btn">EN</button>
        <button class="lang-btn active">JP</button>
      </div>
      <a href="menu.html" class="header-cta">🛒 オンラインショップ</a>
      <button class="hamburger" id="hamburger" aria-label="メニューを開く">
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav class="mobile-menu" id="mobile-menu">
      ${mobileNavHTML}
      <a href="menu.html" class="btn-primary" style="justify-content:center;margin-top:8px">🛒 オンラインショップ</a>
    </nav>
  `;

  /* ---- Footer ---- */
  document.getElementById('footer').innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="logo footer-logo">
            <span class="logo-icon" style="font-size:28px">🍙</span>
            <div class="logo-text">
              <span class="logo-main">IYASUME</span>
              <span class="logo-sub">MUSUBI CAFE HAWAII</span>
            </div>
          </div>
          <p class="footer-about">ハワイと日本の食文化をつなぐおにぎりカフェ。<br>手作りの温かさとアロハの心でお迎えします。</p>
          <div class="footer-sns">
            <div class="sns-btn">📸</div>
            <div class="sns-btn">📘</div>
            <div class="sns-btn">⭐</div>
            <div class="sns-btn">✈️</div>
          </div>
        </div>
        <div>
          <div class="footer-col-title">MENU</div>
          <div class="footer-links">
            <a href="menu.html" class="footer-link">🍙 おにぎり</a>
            <a href="menu.html" class="footer-link">🍱 ランチボックス</a>
            <a href="menu.html" class="footer-link">🥤 ドリンク</a>
            <a href="menu.html" class="footer-link">🌸 季節限定</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">ABOUT</div>
          <div class="footer-links">
            <a href="about.html" class="footer-link">ブランドストーリー</a>
            <a href="locations.html" class="footer-link">店舗一覧</a>
            <a href="contact.html" class="footer-link">ケータリング</a>
            <a href="contact.html" class="footer-link">採用情報</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">SUPPORT</div>
          <div class="footer-links">
            <a href="contact.html" class="footer-link">お問い合わせ</a>
            <a href="contact.html" class="footer-link">よくある質問</a>
            <a href="contact.html" class="footer-link">アレルギー情報</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2024 MUSUBI CAFE IYASUME. All Rights Reserved.</div>
        <div class="footer-bottom-links">
          <a href="#" class="footer-bottom-link">プライバシーポリシー</a>
          <a href="#" class="footer-bottom-link">利用規約</a>
        </div>
      </div>
    </div>
  `;

  /* ---- Hamburger ---- */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  let menuOpen = false;
  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    const spans = hamburger.querySelectorAll('span');
    if (menuOpen) {
      spans[0].style.cssText = 'transform:translateY(7.5px) rotate(45deg)';
      spans[1].style.cssText = 'opacity:0;transform:scaleX(0)';
      spans[2].style.cssText = 'transform:translateY(-7.5px) rotate(-45deg)';
    } else {
      spans.forEach(s => s.style.cssText = '');
    }
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => s.style.cssText = '');
    });
  });

  /* ---- Header scroll ---- */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ---- Back to top ---- */
  const backTop = document.getElementById('back-top');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- Scroll Reveal ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---- Particles ---- */
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const emojis = ['🌸', '🌺', '✨', '🌊', '⭐'];
    function createParticle() {
      const el = document.createElement('span');
      el.className = 'particle';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.fontSize = (12 + Math.random() * 14) + 'px';
      const dur = 12 + Math.random() * 16;
      el.style.animationDuration = dur + 's';
      particlesContainer.appendChild(el);
      setTimeout(() => el.remove(), dur * 1000);
    }
    for (let i = 0; i < 6; i++) setTimeout(createParticle, i * 2000);
    setInterval(createParticle, 2500);
  }

  /* ---- Smooth scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
      }
    });
  });

  /* ---- Lang switch ---- */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
})();
