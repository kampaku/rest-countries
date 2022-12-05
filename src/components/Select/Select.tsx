import type { Region } from 'src/types/types';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './Select.module.scss';
import { selectedRegion, setSelect } from './select-slice';

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
const Select = () => {
  const filter = useAppSelector(selectedRegion);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: Region = e.target.value as Region;
    dispatch(setSelect(value));
  };

  return (
    <div>
      <select
        className={styles.select}
        onChange={handleChange}
        defaultValue={filter}
      >
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
