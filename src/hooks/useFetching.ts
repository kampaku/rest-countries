import { useState } from 'react';

const useFetching = (callback: () => void): [() => void, boolean, string] => {
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return [fetching, isLoading, error];
};

export default useFetching;
