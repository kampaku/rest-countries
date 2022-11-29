import { useEvent } from 'effector-react';
import type { ChangeEvent } from 'react';
import { MdSearch } from 'react-icons/md';

import { inputChanged } from './Model';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const inputEvent = useEvent(inputChanged);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    inputEvent(target.value);
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
