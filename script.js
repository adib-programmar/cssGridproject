const pages = {
  landing: document.getElementById('landing'),
  auth: document.getElementById('auth'),
  app: document.getElementById('app'),
  notfound: document.getElementById('notfound')
};

const navTo = (target) => {
  Object.values(pages).forEach((page) => page.classList.remove('active'));

  if (target === 'landing') pages.landing.classList.add('active');
  else if (['signin', 'signup', 'forgot'].includes(target)) {
    pages.auth.classList.add('active');
    setAuth(target);
  } else if (['dashboard'].includes(target)) {
    pages.app.classList.add('active');
    setTab('dashboard');
  } else if (['pricing'].includes(target)) {
    pages.app.classList.add('active');
    setTab('pricing');
  } else {
    pages.notfound.classList.add('active');
  }
};

document.querySelectorAll('[data-nav]').forEach((button) => {
  button.addEventListener('click', () => navTo(button.dataset.nav));
});

const authCards = document.querySelectorAll('[data-auth]');
const setAuth = (authName = 'signin') => {
  authCards.forEach((card) => card.classList.toggle('hidden', card.dataset.auth !== authName));
};

document.querySelectorAll('[data-auth-target]').forEach((button) => {
  button.addEventListener('click', () => setAuth(button.dataset.authTarget));
});

const tabs = document.querySelectorAll('[data-tab]');
const tabPanels = document.querySelectorAll('[data-tab-panel]');
const setTab = (tabName) => {
  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === tabName));
  tabPanels.forEach((panel) => panel.classList.toggle('active', panel.dataset.tabPanel === tabName));
};

tabs.forEach((tab) => tab.addEventListener('click', () => setTab(tab.dataset.tab)));

const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});

document.getElementById('collapseBtn')?.addEventListener('click', () => {
  document.getElementById('sidebar')?.classList.toggle('collapsed');
});

window.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    alert('Command palette preview: Search, create task, summarize file, or start study plan.');
  }
});
