/* =============================================
   MUSUBI CAFE IYASUME — Shared Components
   Header / Footer / Particles / i18n / Back to top
============================================= */

(function () {
  /* =============================================
     i18n — Translation Engine
  ============================================= */
  const T = {
    jp: {
      'logo.sub':       'MUSUBI CAFE ハワイ',
      'header.cta':     '🛒 オンラインショップ',
      'nav.about':      'ABOUT',
      'nav.menu':       'MENU',
      'nav.locations':  'LOCATIONS',
      'nav.contact':    'CONTACT',
      'nav.instagram':  'INSTAGRAM',
      'footer.about':   'ハワイと日本の食文化をつなぐおにぎりカフェ。<br>手作りの温かさとアロハの心でお迎えします。',
      'footer.col.menu':    'MENU',
      'footer.col.about':   'ABOUT',
      'footer.col.support': 'SUPPORT',
      'footer.link.onigiri':   '🍙 おにぎり',
      'footer.link.bento':     '🍱 ランチボックス',
      'footer.link.drinks':    '🥤 ドリンク',
      'footer.link.seasonal':  '🌸 季節限定',
      'footer.link.story':     'ブランドストーリー',
      'footer.link.stores':    '店舗一覧',
      'footer.link.catering':  'ケータリング',
      'footer.link.careers':   '採用情報',
      'footer.link.contact':   'お問い合わせ',
      'footer.link.faq':       'よくある質問',
      'footer.link.allergy':   'アレルギー情報',
      'footer.privacy':        'プライバシーポリシー',
      'footer.terms':          '利用規約',
      'footer.copy':           '© 2024 MUSUBI CAFE IYASUME. All Rights Reserved.',
      'backtop.label':         'トップへ戻る',
    },
    en: {
      'logo.sub':       'MUSUBI CAFE HAWAII',
      'header.cta':     '🛒 Online Shop',
      'nav.about':      'ABOUT',
      'nav.menu':       'MENU',
      'nav.locations':  'LOCATIONS',
      'nav.contact':    'CONTACT',
      'nav.instagram':  'INSTAGRAM',
      'footer.about':   'Bridging Hawaiian and Japanese food culture through handmade onigiri.<br>We welcome you with warmth and the Aloha spirit.',
      'footer.col.menu':    'MENU',
      'footer.col.about':   'ABOUT',
      'footer.col.support': 'SUPPORT',
      'footer.link.onigiri':   '🍙 Onigiri',
      'footer.link.bento':     '🍱 Lunch Box',
      'footer.link.drinks':    '🥤 Drinks',
      'footer.link.seasonal':  '🌸 Seasonal',
      'footer.link.story':     'Brand Story',
      'footer.link.stores':    'Store Locations',
      'footer.link.catering':  'Catering',
      'footer.link.careers':   'Careers',
      'footer.link.contact':   'Contact Us',
      'footer.link.faq':       'FAQ',
      'footer.link.allergy':   'Allergy Info',
      'footer.privacy':        'Privacy Policy',
      'footer.terms':          'Terms of Use',
      'footer.copy':           '© 2024 MUSUBI CAFE IYASUME. All Rights Reserved.',
      'backtop.label':         'Back to top',
    },
  };

  /* 現在の言語（localStorage → デフォルト jp） */
  let currentLang = localStorage.getItem('iyasume-lang') || 'jp';

  /* ---- 翻訳適用 ---- */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('iyasume-lang', lang);

    /* data-i18n 属性を持つ要素（ヘッダー・フッター） */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
    });

    /* data-en 属性を持つ要素（ページ固有テキスト） */
    document.querySelectorAll('[data-en]').forEach(el => {
      /* 初回: JP テキストを保存 */
      if (!el.dataset.jp) el.dataset.jp = el.innerHTML;
      el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.jp;
    });

    /* data-en-placeholder 属性（input / textarea のプレースホルダー） */
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
      if (!el.dataset.jpPlaceholder) el.dataset.jpPlaceholder = el.placeholder || '';
      el.placeholder = lang === 'en' ? el.dataset.enPlaceholder : el.dataset.jpPlaceholder;
    });

    /* ランゲージボタンの active 更新 */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* html lang 属性 */
    document.documentElement.lang = lang === 'en' ? 'en' : 'ja';

    /* カスタムイベント発火（マップ等のカスタムハンドラー用） */
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  /* =============================================
     現在ページの判定
  ============================================= */
  const path = location.pathname.split('/').pop() || 'index.html';

  const navDef = [
    { href: 'about.html',     key: 'nav.about' },
    { href: 'menu.html',      key: 'nav.menu' },
    { href: 'locations.html', key: 'nav.locations' },
    { href: 'contact.html',   key: 'nav.contact' },
  ];

  const navHTML = (isMobile) => navDef.map(l =>
    `<a href="${l.href}" class="nav-link${path === l.href ? ' active' : ''}" data-i18n="${l.key}">${T[currentLang][l.key]}</a>`
  ).join('');

  /* =============================================
     Header
  ============================================= */
  document.getElementById('header').innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="logo">
        <span class="logo-icon">🍙</span>
        <div class="logo-text">
          <span class="logo-main">IYASUME</span>
          <span class="logo-sub" data-i18n="logo.sub">${T[currentLang]['logo.sub']}</span>
        </div>
      </a>
      <nav class="nav">${navHTML()}</nav>
      <div class="lang-switch">
        <button class="lang-btn${currentLang === 'en' ? ' active' : ''}" data-lang="en">EN</button>
        <button class="lang-btn${currentLang === 'jp' ? ' active' : ''}" data-lang="jp">JP</button>
      </div>
      <a href="menu.html" class="header-cta" data-i18n="header.cta">${T[currentLang]['header.cta']}</a>
      <button class="hamburger" id="hamburger" aria-label="メニューを開く">
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav class="mobile-menu" id="mobile-menu">
      ${navHTML(true)}
      <a href="menu.html" class="btn-primary" style="justify-content:center;margin-top:8px" data-i18n="header.cta">${T[currentLang]['header.cta']}</a>
    </nav>
  `;

  /* =============================================
     Footer
  ============================================= */
  document.getElementById('footer').innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="logo footer-logo">
            <span class="logo-icon" style="font-size:28px">🍙</span>
            <div class="logo-text">
              <span class="logo-main">IYASUME</span>
              <span class="logo-sub" data-i18n="logo.sub">${T[currentLang]['logo.sub']}</span>
            </div>
          </div>
          <p class="footer-about" data-i18n="footer.about">${T[currentLang]['footer.about']}</p>
          <div class="footer-sns">
            <div class="sns-btn">📸</div>
            <div class="sns-btn">📘</div>
            <div class="sns-btn">⭐</div>
            <div class="sns-btn">✈️</div>
          </div>
        </div>
        <div>
          <div class="footer-col-title" data-i18n="footer.col.menu">${T[currentLang]['footer.col.menu']}</div>
          <div class="footer-links">
            <a href="menu.html"    class="footer-link" data-i18n="footer.link.onigiri">${T[currentLang]['footer.link.onigiri']}</a>
            <a href="menu.html"    class="footer-link" data-i18n="footer.link.bento">${T[currentLang]['footer.link.bento']}</a>
            <a href="menu.html"    class="footer-link" data-i18n="footer.link.drinks">${T[currentLang]['footer.link.drinks']}</a>
            <a href="menu.html"    class="footer-link" data-i18n="footer.link.seasonal">${T[currentLang]['footer.link.seasonal']}</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title" data-i18n="footer.col.about">${T[currentLang]['footer.col.about']}</div>
          <div class="footer-links">
            <a href="about.html"     class="footer-link" data-i18n="footer.link.story">${T[currentLang]['footer.link.story']}</a>
            <a href="locations.html" class="footer-link" data-i18n="footer.link.stores">${T[currentLang]['footer.link.stores']}</a>
            <a href="catering.html"  class="footer-link" data-i18n="footer.link.catering">${T[currentLang]['footer.link.catering']}</a>
            <a href="careers.html"   class="footer-link" data-i18n="footer.link.careers">${T[currentLang]['footer.link.careers']}</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title" data-i18n="footer.col.support">${T[currentLang]['footer.col.support']}</div>
          <div class="footer-links">
            <a href="contact.html"  class="footer-link" data-i18n="footer.link.contact">${T[currentLang]['footer.link.contact']}</a>
            <a href="faq.html"      class="footer-link" data-i18n="footer.link.faq">${T[currentLang]['footer.link.faq']}</a>
            <a href="allergy.html"  class="footer-link" data-i18n="footer.link.allergy">${T[currentLang]['footer.link.allergy']}</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy" data-i18n="footer.copy">${T[currentLang]['footer.copy']}</div>
        <div class="footer-bottom-links">
          <a href="privacy.html" class="footer-bottom-link" data-i18n="footer.privacy">${T[currentLang]['footer.privacy']}</a>
          <a href="terms.html"   class="footer-bottom-link" data-i18n="footer.terms">${T[currentLang]['footer.terms']}</a>
        </div>
      </div>
    </div>
  `;

  /* =============================================
     Lang switch — ボタンクリック
  ============================================= */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn || !btn.dataset.lang) return;
    applyLang(btn.dataset.lang);
  });

  /* =============================================
     Hamburger
  ============================================= */
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

  /* =============================================
     Header scroll
  ============================================= */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* =============================================
     Back to top
  ============================================= */
  const backTop = document.getElementById('back-top');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* =============================================
     Scroll Reveal
  ============================================= */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* =============================================
     Particles
  ============================================= */
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

  /* =============================================
     Smooth scroll
  ============================================= */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
      }
    });
  });

  /* =============================================
     ページ読み込み時に保存済み言語を適用
  ============================================= */
  if (currentLang === 'en') {
    /* EN が保存されている場合のみ再適用（data-en 要素を変換） */
    applyLang('en');
  }
  /* JP の場合はデフォルトのままなので何もしない */

})();
