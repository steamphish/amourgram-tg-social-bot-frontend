import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../core/api/base-query';
import { SignInFormValues, SignInResponse } from './models/auth.model';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    signIn: builder.query<SignInResponse, SignInFormValues>({
      query: (data) => {
        return {
          url: '/auth/login',
          method: 'post',
          data,
        };
      },
    }),
  }),
});

export const { useLazySignInQuery } = authApi;
