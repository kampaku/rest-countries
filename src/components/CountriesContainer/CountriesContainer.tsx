import type { FC } from 'react';

import type { Country } from '../../types/types';
import { CountryCard } from '../CountryCard/CountryCard';
import styles from './CountriesContainer.module.scss';

type Props = {
  countries: Country[];
};
const CountriesContainer: FC<Props> = ({ countries }) => {
  return (
    <div className={styles.container}>
      {countries.map((country) => (
        <CountryCard key={country.cca3} data={country} />
      ))}
    </div>
  );
};

export { CountriesContainer };
