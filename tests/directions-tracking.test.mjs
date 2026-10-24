import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';

const script = readFileSync(new URL('../public/directions-tracking.js', import.meta.url), 'utf8');

function browser() {
  const calls = [];
  const listeners = [];
  class Element {
    constructor(link = null) { this.link = link; }
    closest() { return this.link; }
  }
  const context = {
    window: { location: { href: 'https://cananskitchen.com/' }, gtag: (...args) => calls.push(args) },
    document: { addEventListener: (type, handler, options) => listeners.push({ type, handler, options }) },
    Element,
    URL,
  };
  const install = () => runInNewContext(script, context);
  const click = (href) => {
    // A nested icon/text element must resolve to its enclosing link.
    const event = { target: new Element(href ? { href } : null) };
    listeners.forEach(({ handler }) => handler(event));
    assert.equal(event.defaultPrevented, undefined, 'navigation must not be intercepted');
  };
  return { calls, listeners, context, install, click };
}

test('initialization and page loads do not count as directions conversions', () => {
  const b = browser();
  b.install();
  assert.equal(b.calls.length, 0);
  assert.equal(b.listeners.length, 1);
  assert.equal(b.listeners[0].options.passive, true);
});

test('directions and footer address links send exactly one canonical conversion per click', () => {
  const b = browser();
  b.install();
  for (const href of [
    'https://www.google.com/maps/dir/?api=1&destination=Canan',
    'https://google.com/maps/dir/?api=1&destination=Canan',
    'https://maps.google.com/?q=16937+Bushard+St',
  ]) {
    const before = b.calls.length;
    b.click(href);
    const sent = b.calls.slice(before);
    const conversions = sent.filter(([, event]) => event === 'conversion');
    assert.equal(conversions.length, 1);
    assert.equal(conversions[0][2].send_to, 'AW-11272356282/UTJ7CM_V9rUZELqDiv8p');
    const ga4 = sent.filter(([, event]) => event === 'get_directions');
    assert.equal(ga4.length, 1);
    assert.equal(ga4[0][2].send_to, 'ga4');
    assert.equal(sent.length, 2);
  }
});

test('reinstalling the script cannot register duplicate listeners', () => {
  const b = browser();
  b.install();
  b.install();
  b.click('https://www.google.com/maps/dir/?destination=Canan');
  assert.equal(b.listeners.length, 1);
  assert.equal(b.calls.filter(([, event]) => event === 'conversion').length, 1);
});

test('phone, menu, embeds, unrelated hosts, and non-link clicks do not count', () => {
  const b = browser();
  b.install();
  for (const href of [null, 'tel:9493946318', '/#menu',
    'https://www.google.com/maps/embed?pb=example',
    'https://www.google.com.evil.example/maps/dir/', 'https://maps.google.com/']) b.click(href);
  assert.equal(b.calls.filter(([, event]) => event === 'conversion').length, 0);
  assert.equal(b.calls.filter(([, event]) => event === 'get_directions').length, 0);
});

test('missing/blocked Google tag does not break a directions click', () => {
  const b = browser();
  b.install();
  delete b.context.window.gtag;
  assert.doesNotThrow(() => b.click('https://www.google.com/maps/dir/?destination=Canan'));
});

test('phone links send one GA4 click_to_call event and no Ads conversion', () => {
  const b = browser();
  b.install();
  for (const href of ['tel:9493946318', 'tel:+19493946318']) {
    const before = b.calls.length;
    b.click(href);
    const sent = b.calls.slice(before);
    assert.equal(sent.length, 1);
    assert.deepEqual([sent[0][0], sent[0][1], sent[0][2].send_to], ['event', 'click_to_call', 'ga4']);
  }
});

test('GA4 events never target the Google Ads account', () => {
  const b = browser();
  b.install();
  b.click('tel:9493946318');
  b.click('https://www.google.com/maps/dir/?api=1&destination=Canan');
  for (const [, event, parameters] of b.calls) {
    if (event !== 'conversion') assert.equal(parameters.send_to, 'ga4');
  }
});

test('delivery links send one GA4 order_online_click with the platform and no Ads conversion', () => {
  const b = browser();
  b.install();
  for (const [href, platform] of [
    ['https://order.online/store/canan', 'order'],
    ['https://www.doordash.com/store/canan', 'doordash'],
    ['https://www.ubereats.com/store/canans-kitchen', 'ubereats'],
    ['https://www.grubhub.com/restaurant/canans', 'grubhub'],
  ]) {
    const before = b.calls.length;
    b.click(href);
    const sent = b.calls.slice(before);
    assert.equal(sent.length, 1, href);
    assert.deepEqual([sent[0][1], sent[0][2].send_to, sent[0][2].platform], ['order_online_click', 'ga4', platform]);
  }
});

test('lookalike delivery hosts send nothing', () => {
  const b = browser();
  b.install();
  for (const href of ['https://doordash.com.evil.example/store', 'https://notgrubhub.com/x']) b.click(href);
  assert.equal(b.calls.length, 0);
});
