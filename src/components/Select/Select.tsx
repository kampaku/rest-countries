import { FC, useEffect, useState } from 'react';

import styles from './Select.module.scss';

type Props = {
  onSelect: (region: string) => void;
};
const Select: FC<Props> = ({ onSelect }) => {
  const [value, setValue] = useState('all');

  const onChange = (val: string) => {
    setValue(val);
  };
  useEffect(() => {
    onSelect(value);
  }, [onSelect, value]);
  return (
    <div>
      <select
        className={styles.select}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export { Select };
