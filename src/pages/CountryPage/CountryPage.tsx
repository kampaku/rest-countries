import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';

import { CountryDetails, Spinner } from '../../components';
import styles from './CountryPage.module.scss';
import { $countryStatus, pageMounted } from './Model';

const CountryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { country: data, isLoading, error } = useStore($countryStatus);

  const onClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (name) pageMounted(name);
  }, [name]);

  return (
    <div>
      <button className={styles.buttonBack} type="button" onClick={onClick}>
        <MdOutlineKeyboardBackspace />
        Back
      </button>
      <div className={styles.countryWrapper}>
        {isLoading && <Spinner />}
        {error && <span className={styles.error}>{error.error.message}</span>}
        {data && !isLoading && <CountryDetails data={data} />}
      </div>
    </div>
  );
};

export { CountryPage };
