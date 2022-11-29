import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from 'effector';

import { Api } from '../../services/api';
import type { Country } from '../../types/types';

const pageMounted = createEvent<string>();

const getCountriesFx = createEffect(async (region: string) => {
  const req = await Api.getCountries(region);
  return req;
});

const $countries = createStore<Country[] | null>(null).on(
  getCountriesFx.done,
  (_, { result }) => result
);

const $fail = createStore<{ params: string; error: Error } | null>(null);

const $countriesStatus = combine({
  isLoading: getCountriesFx.pending,
  countries: $countries,
  error: $fail,
});

sample({
  clock: pageMounted,
  target: getCountriesFx,
});

sample({
  clock: getCountriesFx.fail,
  target: $fail,
});

export { $countriesStatus, pageMounted };
