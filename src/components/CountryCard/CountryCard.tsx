import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import type { Country } from '../../types/types';
import styles from './CountryCard.module.scss';

type Props = {
  data: Pick<Country, 'name' | 'population' | 'region' | 'capital' | 'flags'>;
};

const CountryCard: FC<Props> = memo(({
  data: { capital, name, population, region, flags },
}) => {
  return (
    <Link to={`/country/${name.common}`} className={styles.link}>
      <div className={styles.card}>
        <img src={flags.svg} alt="flag" className={styles.img} />
        <div className={styles.info}>
          <span className={styles.countryName}>{name.common}</span>
          <span>
            <span className={styles.category}>Population: </span>
            {population.toLocaleString()}
          </span>
          <span>
            <span className={styles.category}>Region: </span>
            {region}
          </span>
          <span>
            <span className={styles.category}>Capital: </span>
            {capital}
          </span>
        </div>
      </div>
    </Link>
  );
});

export { CountryCard };
