import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

import useTheme from '../../hooks/useTheme';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme();

  const onBtnClick = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button type="button" className={styles.button} onClick={onBtnClick}>
      {theme === 'light' ? (
        <IoMoonOutline className={styles.icon} />
      ) : (
        <IoSunnyOutline className={styles.icon} />
      )}
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export { ThemeSwitcher };
