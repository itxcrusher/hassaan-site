import 'crusher-ui-kit';
import { showToast } from 'crusher-ui-kit/runtime';

const navKey = 'data-nav-open';
const panelDesktopQuery = window.matchMedia('(min-width: 961px)');

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

function getPanelIdFromHash() {
  const hash = window.location.hash.replace('#', '').trim();
  return hash || 'home';
}

function setActiveLink(id) {
  const links = document.querySelectorAll('[data-rail-link]');
  links.forEach((link) => {
    const linkId = (link.getAttribute('href') || '').replace('#', '');
    link.classList.toggle('is-active', linkId === id);
  });
}

function setActivePanel(id) {
  const panels = document.querySelectorAll('[data-panel]');

  // Capture the currently active panel BEFORE changing classes
  const outgoing = document.querySelector('[data-panel].is-active');

  // Clear previous back-section markers
  panels.forEach((p) => p.classList.remove('back-section'));

  // Mark the outgoing panel so it stays visible underneath the slide-in
  if (outgoing && outgoing.id !== id) {
    outgoing.classList.add('back-section');
  }

  let matched = false;
  panels.forEach((panel) => {
    const panelId = panel.id;
    const isActive = panelId === id;
    panel.classList.toggle('is-active', isActive);
    if (isActive) {
      panel.scrollTop = 0;
    }
    matched ||= isActive;
  });

  const resolved = matched ? id : 'home';
  if (!matched) {
    const home = document.getElementById('home');
    home?.classList.add('is-active');
    if (home) home.scrollTop = 0;
  }
  setActiveLink(resolved);
}

function syncPanelsFromLocation() {
  const id = getPanelIdFromHash();
  setActivePanel(id);
}

function bindPanelNavigation() {
  const links = document.querySelectorAll('[data-rail-link]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = (link.getAttribute('href') || '').replace('#', '');
      if (!targetId) return;

      if (panelDesktopQuery.matches) {
        event.preventDefault();
        history.pushState(null, '', `#${targetId}`);
        syncPanelsFromLocation();
      } else {
        setNavOpen(false);
        const target = document.getElementById(targetId);
        if (target) {
          event.preventDefault();
          history.pushState(null, '', `#${targetId}`);
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveLink(targetId);
        }
      }
    });
  });

  window.addEventListener('hashchange', syncPanelsFromLocation);
  panelDesktopQuery.addEventListener('change', () => {
    syncPanelsFromLocation();
  });
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
  setNavOpen(false);
  bindCopyEmail();
  bindRailToggle();
  bindPanelNavigation();
  syncPanelsFromLocation();
  setYear();
});
