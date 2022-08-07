import type { FC } from 'react';

import { useGetBordersQuery } from '../../redux/services';
import type { Country } from '../../types/types';
import { CountryTag } from '../index';
import styles from './CountryDetails.module.scss';

type Props = {
  data: Pick<
    Country,
    | 'name'
    | 'population'
    | 'region'
    | 'capital'
    | 'flags'
    | 'subregion'
    | 'languages'
    | 'currencies'
    | 'borders'
    | 'tld'
  >;
};

const CountryDetails: FC<Props> = ({
  data: {
    borders,
    capital,
    currencies,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
    tld,
  },
}) => {
  const currency = currencies && Object.values(currencies);
  const nativeName = name.nativeName && Object.values(name.nativeName);
  const langs = languages && Object.values(languages);

  const { data: neighbors } = useGetBordersQuery(borders || [''], {
    skip: typeof borders === 'undefined',
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.flag}>
        <img src={flags.svg} alt="flag" className={styles.flag} />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name.common}</span>
        <div className={styles.column}>
          {nativeName && (
            <span>
              <span className={styles.infoType}>Native name: </span>
              {nativeName[0].common}
            </span>
          )}
          <span>
            <span className={styles.infoType}>Population: </span>
            {population.toLocaleString()}
          </span>
          <span>
            <span className={styles.infoType}>Region: </span>
            {region}
          </span>
          {subregion && (
            <span>
              <span className={styles.infoType}>Sub Region: </span>
              {subregion}
            </span>
          )}
          {capital && (
            <span>
              <span className={styles.infoType}>Capital: </span>
              {capital.join(', ')}
            </span>
          )}
        </div>
        <div className={styles.column}>
          {tld && (
            <span>
              <span className={styles.infoType}>Top Level Domain: </span>
              {tld.join(' ')}
            </span>
          )}
          {currency && (
            <span>
              <span className={styles.infoType}>Currency: </span>
              {currency[0].name}
            </span>
          )}
          {langs && (
            <span>
              <span className={styles.infoType}>Languages: </span>
              {langs.join(', ')}
            </span>
          )}
        </div>
        {neighbors && (
          <span className={styles.borders}>
            Border countries:
            <span className={styles.tags}>
              {neighbors.map((country) => (
                <CountryTag name={country.name.common} key={country.cca3} />
              ))}
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export { CountryDetails };
