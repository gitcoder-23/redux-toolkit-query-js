import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from '../services/UsersService';

// console.log('usersApi->', usersApi);
export const store = configureStore({
  reducer: {
    // reducer generated
    [usersApi.reducerPath]: usersApi.reducer,
  },
  // 'middleware' coming from service userApi
  middleware: (getDefaultMW) => getDefaultMW().concat(usersApi.middleware),
});
