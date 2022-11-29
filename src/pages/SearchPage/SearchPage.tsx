import { useStore } from 'effector-react';
import { useEffect, useState, useTransition } from 'react';
import type { Country } from 'src/types/types';

import {
  CountriesContainer,
  SearchBar,
  Select,
  Spinner,
} from '../../components';
import { $query } from '../../components/SearchBar/Model';
import { $countriesStatus, pageMounted } from './Model';
import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const [isPending, startTransition] = useTransition();
  const [region, setRegion] = useState<string>('all');
  const { countries: data, isLoading, error } = useStore($countriesStatus);
  // const [query, setQuery] = useState('');
  const query = useStore($query)
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    pageMounted(region);
  }, [region]);

  useEffect(() => {
    if (data) {
      startTransition(() => {
        const filteredCountries = data.filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        );
        setCountries(filteredCountries);
      });
    }
  }, [query, data, startTransition]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <SearchBar />
        <Select onSelect={setRegion} />
      </div>
      <div className={styles.countries}>
        {error && (
          <span>{error.error.message}</span>
        )}
        {(isLoading || isPending) && <Spinner />}
        {(countries && !isLoading && !error) && <CountriesContainer countries={countries} />}
      </div>
    </div>
  );
};

export { SearchPage };
