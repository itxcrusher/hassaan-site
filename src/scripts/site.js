import 'crusher-ui-kit';
import { setMode, showToast } from 'crusher-ui-kit/runtime';

const modeKey = 'hassaan-site:mode';
const navKey = 'data-nav-open';

function readMode() {
  return document.documentElement.getAttribute('data-mode') === 'light' ? 'light' : 'dark';
}

function syncModeButton() {
  const button = document.querySelector('[data-mode-toggle]');
  if (!button) return;
  const mode = readMode();
  const nextMode = mode === 'dark' ? 'light' : 'dark';
  button.setAttribute('aria-pressed', String(mode === 'dark'));
  button.textContent = nextMode === 'light' ? 'Switch to light mode' : 'Switch to dark mode';
}

function bindModeToggle() {
  const button = document.querySelector('[data-mode-toggle]');
  if (!button) return;
  button.addEventListener('click', () => {
    const nextMode = readMode() === 'dark' ? 'light' : 'dark';
    setMode(nextMode);
    localStorage.setItem(modeKey, nextMode);
    syncModeButton();
  });
}

function bindCopyEmail() {
  const button = document.querySelector('[data-copy-email]');
  if (!button) return;
  button.addEventListener('click', async () => {
    const email = button.getAttribute('data-email');
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      showToast({ title: 'Email copied', message: email, tone: 'success' });
    } catch {
      showToast({ title: 'Copy failed', message: 'Clipboard access was not available.', tone: 'danger' });
    }
  });
}

function setYear() {
  const node = document.querySelector('[data-current-year]');
  if (!node) return;
  node.textContent = String(new Date().getFullYear());
}

function setNavOpen(open) {
  document.documentElement.setAttribute(navKey, open ? 'true' : 'false');
}

function bindRailToggle() {
  const toggle = document.querySelector('[data-rail-toggle]');
  const overlay = document.querySelector('[data-rail-overlay]');
  const links = document.querySelectorAll('[data-rail-link]');
  if (!toggle || !overlay) return;

  toggle.addEventListener('click', () => {
    const isOpen = document.documentElement.getAttribute(navKey) === 'true';
    setNavOpen(!isOpen);
  });

  overlay.addEventListener('click', () => {
    setNavOpen(false);
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      setNavOpen(false);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const storedMode = localStorage.getItem(modeKey);
  setMode(storedMode === 'light' ? 'light' : 'dark');
  setNavOpen(false);
  bindModeToggle();
  bindCopyEmail();
  bindRailToggle();
  syncModeButton();
  setYear();
});
