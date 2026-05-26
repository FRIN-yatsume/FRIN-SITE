(function () {
  const body = document.body;
  if (!body.classList.contains('subpage')) return;

  const headerBar = document.getElementById('header-bar');
  const nav = document.querySelector('#header-content nav');
  const navText = nav && nav.querySelector('a');
  const footer = document.getElementById('footer');
  const isQuestionnaire = body.classList.contains('subpage-questionnaire');

  const stopEdge = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-stop-edge')
  ) || 18;

  let metrics = null;
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

    if (!isQuestionnaire && footer) {
      body.dataset.footer = scrollY > 0 ? 'hidden' : 'visible';
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
    metrics = measureHeader();
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
