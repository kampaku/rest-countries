import { combine, createEffect, createEvent, createStore, sample } from 'effector';

import { Api } from '../../services/api';
import type { Country, CountryWithNeighbors } from '../../types/types';

const pageMounted = createEvent<string>();
const borderReset = createEvent();

const getCountryFx = createEffect<string, Country[]>(async (name) => {
  borderReset();
  const req = await Api.getCountry(name);
  return req;
});

const getBordersFx = createEffect(async (codes: string[]) => {
  const req = await Api.getNeighbors(codes);
  return req;
});

const $country = createStore<Country | null>(null).on(
  getCountryFx.done,
  (_, { result }) => result[0]
);

const $neighborsCountries = createStore<Country[] | null>(null)
  .on(getBordersFx.doneData, (_, result) => result)
  .reset(borderReset);

const $fail = createStore<{ params: string; error: Error } | null>(null);

sample({
  clock: pageMounted,
  target: getCountryFx,
});

sample({
  source: $country,
  filter: (country: Country | null): country is CountryWithNeighbors => {
    return country !== null && typeof country.borders !== 'undefined';
  },
  fn: (country): string[] => country.borders,
  target: getBordersFx,
});

sample({
  clock: getCountryFx.fail,
  target: $fail,
});

const $countryStatus = combine({
  isLoading: getCountryFx.pending,
  country: $country,
  error: $fail,
});

export {
  $country,
  $countryStatus,
  $neighborsCountries,
  getBordersFx,
  getCountryFx,
  pageMounted,
};
