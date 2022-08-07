import type { ChangeEvent, FC } from 'react';
import { MdSearch } from 'react-icons/md';

import styles from './SearchBar.module.scss';

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar: FC<Props> = ({ onSearch }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    onSearch(target.value);
  };
  return (
    <label className={styles.wrapper}>
      <MdSearch className={styles.search} />
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search for a country..."
        onChange={onChange}
      />
    </label>
  );
};

export { SearchBar };
