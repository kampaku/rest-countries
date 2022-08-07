import '../assets/scss/style.scss';

import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '../components';
import { CountryPage, SearchPage } from '../pages';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/country/:name" element={<CountryPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
