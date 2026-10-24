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
    assert.equal(b.calls.length, before + 1);
    const [command, event, parameters] = b.calls.at(-1);
    assert.equal(command, 'event');
    assert.equal(event, 'conversion');
    assert.equal(parameters.send_to, 'AW-11272356282/UTJ7CM_V9rUZELqDiv8p');
  }
});

test('reinstalling the script cannot register duplicate listeners', () => {
  const b = browser();
  b.install();
  b.install();
  b.click('https://www.google.com/maps/dir/?destination=Canan');
  assert.equal(b.listeners.length, 1);
  assert.equal(b.calls.length, 1);
});

test('phone, menu, embeds, unrelated hosts, and non-link clicks do not count', () => {
  const b = browser();
  b.install();
  for (const href of [null, 'tel:9493946318', '/#menu',
    'https://www.google.com/maps/embed?pb=example',
    'https://www.google.com.evil.example/maps/dir/', 'https://maps.google.com/']) b.click(href);
  assert.equal(b.calls.length, 0);
});

test('missing/blocked Google tag does not break a directions click', () => {
  const b = browser();
  b.install();
  delete b.context.window.gtag;
  assert.doesNotThrow(() => b.click('https://www.google.com/maps/dir/?destination=Canan'));
});
