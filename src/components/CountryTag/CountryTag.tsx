import type { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './CountryTag.module.scss';

type Props = {
  name: string;
};

const CountryTag: FC<Props> = ({ name }) => {
  return (
    <Link to={`/country/${name}`} className={styles.link}>
      <div className={styles.tag}>{name}</div>
    </Link>
  );
};

export { CountryTag };
