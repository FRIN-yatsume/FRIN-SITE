(function () {
  const body = document.body;
  if (!body.classList.contains('subpage')) return;

  const headerBar = document.getElementById('header-bar');
  const nav = document.querySelector('#header-content nav');
  const navText = nav && nav.querySelector('a');
  const footer = document.getElementById('footer');
  const isQuestionnaire = body.classList.contains('subpage-questionnaire');

  let rootStyle = getComputedStyle(document.documentElement);

  const stopEdge = parseFloat(rootStyle.getPropertyValue('--nav-stop-edge')) || 18;

  function readCssPositiveNumber(varName, fallback) {
    const n = parseFloat(rootStyle.getPropertyValue(varName));
    return Number.isFinite(n) && n > 0 ? n : fallback;
  }

  function readLogoScrollScaleMin() {
    const n = parseFloat(rootStyle.getPropertyValue('--logo-scroll-scale-min'));
    if (!Number.isFinite(n) || n <= 0) return 0.7;
    return Math.min(1, n);
  }

  function logoScaleForScroll(scrollY) {
    if (!metrics) return 1;
    const { scrollRange } = metrics;
    if (scrollRange <= 0) return 1;
    const progress = Math.min(1, scrollY / scrollRange);
    const minScale = readLogoScrollScaleMin();
    return 1 - progress * (1 - minScale);
  }

  let metrics = null;
  let footerMetrics = null;
  let ticking = false;

  function measureHeader() {
    if (!headerBar || !nav || !navText) return null;

    headerBar.style.removeProperty('height');
    body.style.removeProperty('--header-bar-height');

    const expandedHeight = headerBar.offsetHeight;
    const headerTop = headerBar.getBoundingClientRect().top;
    const navTextTop = navText.getBoundingClientRect().top;
    const navTopInHeader = navTextTop - headerTop;

    const minHeaderHeight = Math.ceil(
      expandedHeight - (navTopInHeader - stopEdge)
    );
    const scrollRange = Math.max(0, expandedHeight - minHeaderHeight);

    return { expandedHeight, minHeaderHeight, scrollRange };
  }

  function measureFooter() {
    if (!footer || isQuestionnaire) return null;
    const height = footer.offsetHeight;
    const hideMult = readCssPositiveNumber('--footer-hide-scroll-mult', 1);
    const hideRange = Math.max(height * hideMult, 1);
    return { height, hideRange };
  }

  function footerOffsetForScroll(scrollY) {
    if (!footerMetrics) return 0;
    const { height, hideRange } = footerMetrics;
    const progress = Math.min(1, scrollY / hideRange);
    return progress * height;
  }

  function headerHeightForScroll(scrollY) {
    if (!metrics) return metrics?.expandedHeight ?? 0;
    const { expandedHeight, minHeaderHeight, scrollRange } = metrics;
    if (scrollRange <= 0) return expandedHeight;
    const shrunk = expandedHeight - Math.min(scrollY, scrollRange);
    return Math.max(minHeaderHeight, shrunk);
  }

  function updateChrome() {
    const scrollY = window.scrollY;
    const h = headerHeightForScroll(scrollY);
    const heightPx = h + 'px';

    body.style.setProperty('--header-bar-height', heightPx);
    if (headerBar) headerBar.style.height = heightPx;

    document.documentElement.style.setProperty(
      '--logo-scale',
      String(logoScaleForScroll(scrollY))
    );

    if (!isQuestionnaire && footer && footerMetrics) {
      const offsetY = footerOffsetForScroll(scrollY);
      const hidden = offsetY >= footerMetrics.height;
      footer.style.transform = offsetY > 0 ? `translateY(${offsetY}px)` : '';
      footer.style.pointerEvents = hidden ? 'none' : '';
      footer.setAttribute('aria-hidden', hidden ? 'true' : 'false');
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateChrome);
    }
  }

  function remeasure() {
    rootStyle = getComputedStyle(document.documentElement);
    metrics = measureHeader();
    footerMetrics = measureFooter();
    updateChrome();
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(remeasure);
  } else {
    remeasure();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', remeasure);
})();
