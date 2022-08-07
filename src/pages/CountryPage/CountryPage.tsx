import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';

import { CountryDetails, Spinner } from '../../components';
import { useGetCountryQuery } from '../../redux/services';
import { isErrorWithMessage } from '../../services/helper';
import styles from './CountryPage.module.scss';

const CountryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetCountryQuery(name || '');

  const onClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <button className={styles.buttonBack} type="button" onClick={onClick}>
        <MdOutlineKeyboardBackspace />
        Back
      </button>
      <div className={styles.countryWrapper}>
        {isLoading && <Spinner />}
        {error && (
          <span className={styles.error}>
            {isErrorWithMessage(error) && error.data.message}
          </span>
        )}
        {data && <CountryDetails data={data[0]} />}
      </div>
    </div>
  );
};

export { CountryPage };
