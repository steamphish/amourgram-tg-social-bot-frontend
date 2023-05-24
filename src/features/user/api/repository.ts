import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../core/api/base-query';
import { List, ListQueryParams, UserBrief } from './models/user.model';

export const transformResponse = (response: any) => {
  return {
    content: response.content || [],
  };
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query<List<UserBrief>, ListQueryParams>({
      query: ({ page, size, field, direction }) => {
        return {
          url: '/admin/profiles',
          method: 'get',
          params: {
            page: page - 1,
            size,
            field,
            direction: !!field ? direction : undefined,
          },
        };
      },
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
