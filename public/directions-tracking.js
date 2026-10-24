// One delegated listener covers existing and dynamically rendered React links.
// Keep the overlapping TaEHCKTP5MMcELqDiv8p conversion uninstalled.
(function () {
  if (window.canansDirectionsTrackingInstalled) return;
  window.canansDirectionsTrackingInstalled = true;

  document.addEventListener('click', function (event) {
    if (!(event.target instanceof Element)) return;
    var link = event.target.closest('a[href]');
    if (!link) return;

    var url = new URL(link.href, window.location.href);
    var isDirections =
      ((url.hostname === 'www.google.com' || url.hostname === 'google.com') &&
        url.pathname.indexOf('/maps/dir/') === 0) ||
      (url.hostname === 'maps.google.com' && url.searchParams.has('q'));

    if (isDirections && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11272356282/UTJ7CM_V9rUZELqDiv8p'
      });
    }
  }, { capture: true, passive: true });
})();
