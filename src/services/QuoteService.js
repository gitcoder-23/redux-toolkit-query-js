import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { quotesApiHost } from '../constants';

export const quotesApi = createApi({
  // reducer path key
  reducerPath: 'quotesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: quotesApiHost,
  }),
  endpoints: (builder) => ({
    getRandomQuote: builder.query({
      query: () => '/random',
    }),
  }),
});

// hook
export const { useGetRandomQuoteQuery } = quotesApi;
