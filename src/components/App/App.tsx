import { useEffect } from 'react';

import Header from '../Header/Header';
import styles from './App.module.scss';
import '../../assets/scss/style.scss';

const App = () => {
  useEffect(() => {

  }, []);
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
};

export default App;
