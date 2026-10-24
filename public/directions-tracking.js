// One delegated listener covers existing and dynamically rendered React links.
//   Directions link: one Google Ads conversion + one GA4 "get_directions" event.
//   Phone link:      one GA4 "click_to_call" event (no Ads conversion).
// Keep the overlapping TaEHCKTP5MMcELqDiv8p conversion uninstalled.
// GA4 events use send_to 'ga4', which reaches only the GA4 config tagged
// { groups: 'ga4' } in index.html, so Google Ads never receives them.
(function () {
  if (window.canansDirectionsTrackingInstalled) return;
  window.canansDirectionsTrackingInstalled = true;

  document.addEventListener('click', function (event) {
    if (!(event.target instanceof Element)) return;
    var link = event.target.closest('a[href]');
    if (!link) return;
    if (typeof window.gtag !== 'function') return;

    var url = new URL(link.href, window.location.href);

    if (url.protocol === 'tel:') {
      window.gtag('event', 'click_to_call', { send_to: 'ga4', link_url: url.href });
      return;
    }

    var isDirections =
      ((url.hostname === 'www.google.com' || url.hostname === 'google.com') &&
        url.pathname.indexOf('/maps/dir/') === 0) ||
      (url.hostname === 'maps.google.com' && url.searchParams.has('q'));

    if (isDirections) {
      window.gtag('event', 'get_directions', { send_to: 'ga4', link_url: url.href });
      window.gtag('event', 'conversion', {
        send_to: 'AW-11272356282/UTJ7CM_V9rUZELqDiv8p'
      });
    }
  }, { capture: true, passive: true });
})();
