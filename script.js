(() => {
  const modal = document.querySelector('#store-modal');
  const config = window.BETWEENHUGS_CONFIG || {};
  const isValidStoreUrl = value => typeof value === 'string' && /^https:\/\//i.test(value);
  document.querySelectorAll('[data-store]').forEach(link => {
    const type = link.dataset.store;
    const url = type === 'ios' ? config.appStoreUrl : config.googlePlayUrl;
    if (isValidStoreUrl(url)) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.addEventListener('click', event => {
        event.preventDefault();
        modal?.showModal();
      });
    }
  });
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
