import { useEffect, useState, useTransition } from 'react';
import type { Country } from 'src/types/types';

import {
  CountriesContainer,
  SearchBar,
  Select,
  Spinner,
} from '../../components';
import { selectedRegion } from '../../components/Select/select-slice';
import { useGetCountriesQuery } from '../../redux/services';
import { useAppSelector } from '../../redux/store';
import { isErrorWithMessage } from '../../services/helper';
import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const [isPending, startTransition] = useTransition();
  const region = useAppSelector(selectedRegion);
  const { data, error, isLoading } = useGetCountriesQuery(region);
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);

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
        <SearchBar onSearch={setQuery} />
        <Select />
      </div>
      <div className={styles.countries}>
        {error && (
          <span>{isErrorWithMessage(error) && error.data.message}</span>
        )}
        {(isLoading || isPending) && <Spinner />}
        {countries && <CountriesContainer countries={countries} />}
      </div>
    </div>
  );
};

export { SearchPage };
