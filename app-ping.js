// Ping the app so it is already awake (it may stop when idle) by the time a visitor clicks "Try DocuLocate".
// no-cors: the response is never read; the request only needs to reach the server. The URL comes from the page's
// own app links, so the DOCULOCATE_APP_URL build setting and the dev server's localhost rewrite apply automatically.
(() => {
  const link = document.querySelector('[data-app-link]');
  if (!link) return;
  const url = new URL('/v1/health', link.href).href;
  const ping = () => {
    if (document.hidden) return;
    fetch(url, { mode: 'no-cors', cache: 'no-store' }).catch(() => {});
  };
  ping();
  setInterval(ping, 60000);
  document.addEventListener('visibilitychange', ping);
})();
