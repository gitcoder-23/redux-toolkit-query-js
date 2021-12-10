import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiHost } from '../constants';

// Api Slice & creates hooks
export const usersApi = createApi({
  // key
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiHost,
  }),
  endpoints: (builder) => ({
    // EndPoints name 'getAllUsers'
    getAllUsers: builder.query({
      // Api last point
      query: () => '/users',
    }),

    getSingleUserById: builder.query({
      // query: (userId) => `/users/`+ userId,
      query: (userId) => `/users/${userId}`,
    }),
  }),
});

// generated hook autometically by endPoint name
export const { useGetAllUsersQuery, useGetSingleUserByIdQuery } = usersApi;
