import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Country } from '../types/types';

const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], void>({
      query: () => '/all',
    }),
    getCountry: builder.query<Country[], string>({
      query: (name) => `/name/${name}`,
    }),
  }),
});

export default countryApi;
export const { useGetAllCountriesQuery } = countryApi;
export const { useGetCountryQuery } = countryApi;
