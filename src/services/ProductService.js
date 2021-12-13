import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { productApiHost } from '../constants';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: productApiHost,
  }),

  // if use more ops then add tags
  // tagTypes: ["Student", "Teacher", "Product"],

  // for add data or edit tag type required
  tagTypes: ['ProductData'],

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
      // string reverse
      transformResponse: (res) => res.reverse(),
      providesTags: ['ProductData'],
    }),

    getAllProductById: builder.query({
      // query: (proId) => `/products/${proId}`,
      query: (proId) => `/products/` + proId,
    }),

    addProduct: builder.mutation({
      query: (productAdd) => ({
        url: '/products',
        method: 'POST',
        body: productAdd,
      }),
      // after add
      invalidatesTags: ['ProductData'],
    }),
  }),
});

// generated hook autometically by endPoint name
export const {
  useGetAllProductsQuery,
  useGetAllProductByIdQuery,
  useAddProductMutation,
} = productApi;
