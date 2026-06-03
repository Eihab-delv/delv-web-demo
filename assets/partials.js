// DELV — shared nav + footer injector
(function() {
  const PAGES = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'about.html', label: 'About', key: 'about' },
    { href: 'services.html', label: 'Services', key: 'services', drop: [
      { href: 'platform-development.html', label: 'Platform Development' },
      { href: 'ai-services.html', label: 'AI Services' },
      { href: 'robotics.html', label: 'Robotics' },
      { href: 'advisory.html', label: 'Advisory' },
      { href: '48-hour-prototype.html', label: '48 Hour Prototype', featured: true },
    ]},
    { href: 'industries.html', label: 'Industries', key: 'industries' },
    { href: 'insights.html', label: 'Insights', key: 'insights' },
    { href: 'contact.html', label: 'Contact', key: 'contact' },
  ];

  function navHtml(current) {
    const links = PAGES.map(p => {
      const active = (p.key === current || (p.drop && p.drop.some(d => d.href.replace('.html','') === current))) ? 'active' : '';
      if (p.drop) {
        return `<li class="has-drop"><a href="${p.href}" class="${active}">${p.label}</a>
          <div class="drop">${p.drop.map(d => `<a href="${d.href}" class="${d.featured ? 'featured' : ''}">${d.label}</a>`).join('')}</div>
        </li>`;
      }
      return `<li><a href="${p.href}" class="${active}">${p.label}</a></li>`;
    }).join('');

    return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo" aria-label="DELV home">
          <img src="assets/logo-white.png" alt="DELV" />
        </a>
        <ul class="nav-links">${links}</ul>
        <div class="nav-cta">
          <a href="contact.html" class="btn btn-secondary">Start a conversation</a>
          <button class="nav-burger" aria-label="Open menu" onclick="document.querySelector('.mobile-menu').classList.add('open')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>
    </nav>
    <aside class="mobile-menu" role="dialog" aria-label="Menu">
      <button class="close-btn" aria-label="Close" onclick="document.querySelector('.mobile-menu').classList.remove('open')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
      <ul>
        ${PAGES.map(p => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}
        <li><a href="platform-development.html">— Platform Development</a></li>
        <li><a href="ai-services.html">— AI Services</a></li>
        <li><a href="robotics.html">— Robotics</a></li>
        <li><a href="advisory.html">— Advisory</a></li>
        <li><a href="48-hour-prototype.html" style="color:var(--orange)">— 48 Hour Prototype</a></li>
      </ul>
    </aside>
    `;
  }

  function footerHtml() {
    return `
    <footer class="foot">
      <div class="wrap">
        <div class="foot-top">
          <div class="foot-brand">
            <img src="assets/logo-white.png" alt="DELV" />
            <div class="tag-line">We make what's next operational.</div>
            <div class="sub">Platforms. AI. Robotics. Advisory. Built for real-world operations.</div>
          </div>
          <div class="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="platform-development.html">Platform Development</a></li>
              <li><a href="ai-services.html">AI Services</a></li>
              <li><a href="robotics.html">Robotics</a></li>
              <li><a href="advisory.html">Advisory</a></li>
              <li><a href="48-hour-prototype.html" style="color:var(--orange)">48 Hour Prototype →</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="industries.html">Industries</a></li>
              <li><a href="insights.html">Insights</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Contact</h5>
            <ul>
              <li>Global delivery</li>
              <li><a href="mailto:hello@delv.com">hello@delv.com</a></li>
              <li style="margin-top:14px"><a href="contact.html" style="color:var(--blue)">Start a conversation →</a></li>
            </ul>
          </div>
        </div>
        <div class="foot-bot">
          <span>© ${new Date().getFullYear()} DELV — Twenty years of operational technology</span>
          <span>EMERGING TECHNOLOGY · OPERATIONAL CERTAINTY</span>
        </div>
      </div>
    </footer>
    `;
  }

  window.DELV = {
    mountNav(current) {
      const slot = document.getElementById('nav-slot');
      if (slot) slot.outerHTML = navHtml(current);
    },
    mountFooter() {
      const slot = document.getElementById('footer-slot');
      if (slot) slot.outerHTML = footerHtml();
    }
  };
})();
