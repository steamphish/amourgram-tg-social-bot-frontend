import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../core/api/base-query';
import { List, ListQueryParams } from '../../../common/models';
import { Event } from './models/event.model';

export const transformResponse = (response: any) => {
  return {
    content: response.content || [],
  };
};

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: baseQuery,
  tagTypes: ['Event'],
  endpoints: (build) => ({
    getEvents: build.query<List<Event>, ListQueryParams>({
      keepUnusedDataFor: 1,
      query: ({ page, size, field, direction }) => {
        return {
          url: '/admin/events',
          method: 'get',
          params: {
            page: page - 1,
            size,
            field,
            direction: !!field ? direction : undefined,
          },
        };
      },
      providesTags: ['Event'],
    }),
    getEvent: build.query<Event, number>({
      query: (id: number) => {
        return {
          url: `/admin/events/${id}`,
          method: 'get',
        };
      },
    }),
  }),
});

export const { useGetEventsQuery, useGetEventQuery } = eventApi;
