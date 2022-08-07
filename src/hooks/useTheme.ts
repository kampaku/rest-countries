import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
const useTheme = (): [Theme, (val: Theme) => void] => {
  const storageKey = 'theme';
  const getColorPreference = (): Theme => {
    const item = localStorage.getItem(storageKey);
    if (item === 'dark' || item === 'light') {
      return item;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };
  const [theme, setTheme] = useState<Theme>(() => getColorPreference());

  useEffect(() => {
    const setPreference = () => {
      localStorage.setItem(storageKey, theme);
      document.documentElement.setAttribute('data-theme', theme);
    };

    setPreference();
  }, [theme]);

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: isDark }) => {
      setTheme(isDark ? 'dark' : 'light');
    });

  return [theme, setTheme];
};

export default useTheme;
