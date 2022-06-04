import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div>Where in the world</div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
