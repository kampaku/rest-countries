import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Country } from '../types/types';

const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], string>({
      query: (region) => {
        if (region === 'all') return `/all`;
        return `/region/${region}`;
      },
    }),
    getCountry: builder.query<Country[], string>({
      query: (name) => `/name/${name}`,
    }),
    getBorders: builder.query<Country[], string[]>({
      query: (codes) => {
        return `/alpha?codes=${codes.join(',')}`;
      },
    }),
  }),
});

export default countryApi;
export const { useGetCountriesQuery } = countryApi;
export const { useGetCountryQuery } = countryApi;
export const { useGetBordersQuery } = countryApi;
