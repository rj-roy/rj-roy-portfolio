'use client';

export const THEME_KEY = 'theme';
export const DEFAULT_THEME = 'dark';

export function getInitialTheme() {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  try {
    const t = window.localStorage.getItem(THEME_KEY);
    return t === 'light' || t === 'dark' ? t : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function applyTheme(theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* noop */
  }
}

export const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';var e=document.documentElement;e.dataset.theme=t;if(t==='dark'){e.classList.add('dark')}else{e.classList.remove('dark')}}catch(err){}})();`;