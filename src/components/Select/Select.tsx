import { useEvent, useStore } from 'effector-react';
import React, { FC, memo,useEffect } from 'react';
import type { Region } from 'src/types/types';

import { $filter, filterChanged } from './Model';
import styles from './Select.module.scss';

type Props = {
  onSelect: (region: string) => void;
};

type optionsType = {
  value: Region;
  label: string;
};
const options: optionsType[] = [
  { value: 'all', label: 'All' },
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

const Select: FC<Props> = memo(({ onSelect }) => {
  const filter = useStore($filter);
  const changed = useEvent(filterChanged);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: Region = e.target.value as Region;
    changed(value);
  };

  useEffect(() => {
    onSelect(filter);
  }, [onSelect, filter]);
  return (
    <div>
      <select className={styles.select} onChange={handleChange}>
        {options.map(({ value, label }) => (
          <option value={value} defaultValue={filter} key={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
});

export { Select };
