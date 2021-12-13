import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { productApiHost } from '../constants';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: productApiHost,
  }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
    }),

    getAllProductById: builder.query({
      query: (proId) => `/products/${proId}`,
    }),
  }),
});

// generated hook autometically by endPoint name
export const { useGetAllProductsQuery, useGetAllProductByIdQuery } = productApi;
