import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from '../services/UsersService';
import { quotesApi } from '../services/QuoteService';

// console.log('usersApi->', usersApi);
export const store = configureStore({
  reducer: {
    // reducer generated
    [usersApi.reducerPath]: usersApi.reducer,
    [quotesApi.reducerPath]: quotesApi.reducer,
  },
  // 'middleware' coming from service userApi
  // middleware: (getDefaultMW) => getDefaultMW().concat(usersApi.middleware),
  middleware: (getDefaultMW) =>
    getDefaultMW().concat(usersApi.middleware, quotesApi.middleware),
});
