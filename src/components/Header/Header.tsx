import { Link } from 'react-router-dom';

import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.title}>Where in the world</h1>
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export { Header };
